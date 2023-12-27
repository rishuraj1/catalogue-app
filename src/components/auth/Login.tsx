import { SignIn } from '@clerk/clerk-react'

import AuthLayout from './AuthLayout'

const Login = () => {
    return (
        <AuthLayout>
            <SignIn
                path='/'
                routing='path'
                signUpUrl='/register'
                afterSignInUrl='/dashboard'
            />
        </AuthLayout>
    )
}

export default Login