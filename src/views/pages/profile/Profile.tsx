import SignInForm from '@/views/auth/SignIn/SignInForm'
import Simple from '@/components/layouts/AuthLayout/Simple'
import { StorageManager } from '@aws-amplify/ui-react-storage'

const SignInSimple = () => {
    return (
        <Simple
            content={
                <div className="mb-4">
                    <h3 className="mb-1">Profile</h3>
                    <p>Please enter your details!</p>
                </div>
            }
        >
            {/* <StorageManager accessLevel="private" maxFileCount={1} /> */}

            <SignInForm
                disableSubmit={true}
                signUpUrl="/auth/sign-up-simple"
                forgotPasswordUrl="/auth/forgot-password-simple"
            />
        </Simple>
    )
}

export default SignInSimple
