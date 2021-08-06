import SignIn from '../signin/signin.component';
import SignUp from '../sign-up/sign-up.component';
import './signin-signup.style.scss';

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;