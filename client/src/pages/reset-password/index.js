import { Button, PasswordInput } from "../../components/forms";
import { useForm } from "react-hook-form";
import { resetPassword } from "./actions";
import { showSuccessToast } from "../../utils/toast";
import { useMutation } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";

const ResetPasswordPage = () => {
    const { pathname } = useLocation();
    const userId = pathname?.split('/')?.at(2)
    const access_token = pathname.split('/')?.at(3);
    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm({
        mode: "all",
        reValidateMode: "onChange",
    });
    const { mutate, isPending } = useMutation({
        mutationFn: resetPassword,
        onSuccess: (data) => {
            showSuccessToast(data?.data?.message);
        }
    })
    const handleSubmitForm = (data) => {
        const { password } = data;
        mutate({
            password,
            access_token,
            id: userId
        })
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
                    Reset Your Password
                </h2>
                <h2 className="mt-1 text-center text-lg font-medium leading-9 tracking-tight text-gray-600">
                    Type in your email and we'll send you a link to reset your password
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-6" >
                    <PasswordInput {...register('password')} label='Password' placeholder='Enter password' error={errors?.password?.message} />
                    <Button disabled={isPending} type='submit'>
                        {isPending ? 'Please wait...' : "Submit"}
                    </Button>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account? &nbsp;
                    <Link to="/sign-in" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default ResetPasswordPage;
