import { Button, PasswordInput, TextInput } from "../../components/forms";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./schema";
import { initialValues } from "./constants";
import { useMutation } from "@tanstack/react-query"
import { signInRequest } from "./actions";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showSuccessToast } from "../../utils/toast";
import { signIn } from "../../redux/slices/authSlice";

const SignInPage = () => {
    const dispatch = useDispatch();
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
        mutationFn: signInRequest,
        onSuccess: (data) => {
            showSuccessToast(data?.data?.message);
            dispatch(signIn(data?.data?.data))
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
                    Welcome back
                </h2>
                <h2 className="mt-1 text-center text-lg font-medium leading-9 tracking-tight text-gray-600">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-6" >
                    <TextInput {...register('email')} label='Email' placeholder='Enter email' error={errors?.email?.message} />
                    <PasswordInput {...register('password')} label='Password' placeholder='Enter password' error={errors?.password?.message} />
                    <div className="text-sm text-end">
                        <Link to='/forgot-password' className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot Password?
                        </Link>
                    </div>
                    <Button type='submit' disabled={isPending}>
                        {isPending ? 'Please wait...' : ' Sign In'}
                    </Button>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Don't have an account? &nbsp;
                    <Link to='/sign-up' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignInPage;
