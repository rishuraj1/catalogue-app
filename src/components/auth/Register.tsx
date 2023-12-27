import { SignUp } from '@clerk/clerk-react'

import AuthLayout from './AuthLayout'

const Register = () => {
    return (
        <AuthLayout>
            <SignUp afterSignUpUrl='/' />
        </AuthLayout>
    )
}

export default Register