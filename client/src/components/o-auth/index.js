import React, { useState } from 'react'
import { Button } from '../forms'
import { auth, githubAuthProvider, googleAuthProvider } from '../../config/firebase';
import { showErrorToast, showSuccessToast } from '../../utils/toast';
import { signInWithPopup } from 'firebase/auth';
import { useMutation } from '@tanstack/react-query';
import { signIn } from '../../redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { signInWithGoogleRequest, signInWithGithubRequest } from './actions';
import { useNavigate } from 'react-router-dom';



const authRequest = {
    google: signInWithGoogleRequest,
    github: signInWithGithubRequest
}
const authProvider = {
    google: googleAuthProvider,
    github: githubAuthProvider
}

const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [authType, setAuthType] = useState(null)

    const { mutate: mutateOAuth } = useMutation({
        mutationFn: authRequest?.[authType],
        onSuccess: (data) => {
            showSuccessToast(data?.data?.message);
            dispatch(signIn(data?.data?.data))
            navigate(-1)
        }
    })


    const handleOAuth = async (type) => {
        setAuthType(type);
        try {
            const result = await signInWithPopup(auth, authProvider?.[type]);
            const { user = {} } = result || {};
            const payload = {
                username: user?.displayName || '',
                email: user?.email || '',
                photo: user?.photoURL || '',
            }
            mutateOAuth(payload)
        } catch (error) {
            showErrorToast(error?.message || 'Failed to login O Auth')
        }
    }
    return (
        <div className="mt-5 flex items-center gap-2">
            <Button onClick={() => handleOAuth('google')} type='button' className="flex items-center space-x-3 w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-bold leading-6 text-gray-700 shadow-sm hover:bg-gray-100  border-2 border-gray-300">
                <FcGoogle className="text-2xl" />
                <span>Google</span>
            </Button>
            <Button onClick={() => handleOAuth('github')} type='button' className="flex items-center space-x-3 w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-bold leading-6 text-gray-700 shadow-sm hover:bg-gray-100  border-2 border-gray-300">
                <FaGithub className="text-2xl" />
                <span>Github</span>
            </Button>
        </div>
    )
}

export default OAuth