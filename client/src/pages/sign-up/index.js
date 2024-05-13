import { Button, OAuth, PasswordInput, TextInput } from "../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./schema";
import { initialValues } from "./constants";
import { useMutation } from "@tanstack/react-query"
import { signUpRequest } from "./actions";
import { Link, useNavigate } from "react-router-dom";
import { showSuccessToast } from "../../utils/toast";

const SignInPage = () => {
    const navigate = useNavigate();
    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: initialValues,
        mode: "all",
        reValidateMode: "onChange",
    });
    const { mutate, isPending } = useMutation({
        mutationFn: signUpRequest,
        onSuccess: (data) => {
            showSuccessToast(data?.data?.message);
            navigate('/sign-in')
        }
    })
    const handleSubmitForm = (data) => {
        mutate(data)
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
                    Get started
                </h2>
                <h2 className="mt-1 text-center text-lg font-medium leading-9 tracking-tight text-gray-600">
                    Create a new account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-6" >
                    <TextInput {...register('username')} label='Username' placeholder='Enter username' error={errors?.username?.message} />
                    <TextInput {...register('email')} label='Email' placeholder='Enter email' error={errors?.email?.message} />
                    <PasswordInput {...register('password')} label='Password' placeholder='Enter password' error={errors?.password?.message} />
                    <Button type='submit' disabled={isPending}>
                        {isPending ? 'Please wait...' : ' Sign Up'}
                    </Button>
                </form>
                <p className="mt-5 text-center text-sm text-gray-500">
                    Or continue with
                </p>
                <OAuth />
                <p className="mt-5 text-center text-sm text-gray-500">
                    Already have an account? &nbsp;
                    <Link to='/sign-in' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignInPage;
