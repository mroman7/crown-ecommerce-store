import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utile';
import './signin.style.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        }
        catch (error) {
            console.log(error);
        }

    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email & password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="email"
                        id="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />

                    <FormInput
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit"> SIGNIN </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> SIGNIN WITH GOOGLE </CustomButton>
                    </div>
                </form>

            </div>
        );
    }
}

export default SignIn;