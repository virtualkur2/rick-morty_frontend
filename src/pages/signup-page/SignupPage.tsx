import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router";
import { clearError } from "../../redux/slices/auth.slice";
import { useSignupMutation } from "../../redux/api/endpoints/auth.endpoints";
import { APP_ROUTES } from "../../constants";
import FormContainer from "../../components/form/container/FormContainer";
import FormTitle from "../../components/form/title/FormTitle";
import Form from "../../components/form/Form";
import Input from "../../components/form/input/Input";
import { SubmitButton } from "../../components/button";
import { CustomLink } from "../../components/link/CustomLink";
import ErrorMessage from "../../components/form/error/ErrorMessage";
import SuccessMessage from "../../components/form/success/SuccessMessage";

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [signup, { isLoading, error }] = useSignupMutation();

    useEffect(() => {
        return () => {
          dispatch(clearError());
        };
      }, [dispatch]);

    const attemptSignup = async () => {
        try {
            await signup({ name, email, password }).unwrap(); // .unwrap() to catch errors
            setSignupSuccess(true);
            setTimeout(() => {
              navigate(APP_ROUTES.login);
            }, 2000);
          } catch (err: any) {
            console.error('Signup failed:', err);
          }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSignupSuccess(false);
        attemptSignup();
    }

    return (
        <FormContainer>
            <FormTitle>Sign Up</FormTitle>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.currentTarget.value)}
                    required
                />
                <Input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    required
                />
                <Input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    required
                />
                <SubmitButton
                    type="submit"
                    disabled={isLoading}
                >{isLoading ? 'Signing Up...' : 'Sign Up'}</SubmitButton>
            </Form>
            {error && <ErrorMessage>{( error as any).data?.message ?? (error as any).message ?? 'Login failed'}</ErrorMessage>}
            {signupSuccess && <SuccessMessage>Signup successful! Redirecting to login...</SuccessMessage>}
            <CustomLink to={APP_ROUTES.login}>Already have an account? Login</CustomLink>
        </FormContainer>
    );
}

export default SignupPage;
