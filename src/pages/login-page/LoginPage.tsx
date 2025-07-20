import { useEffect, useState, type FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router";
import { useLoginMutation } from "../../redux/api/endpoints/auth.endpoints";
import { authSelector } from "../../redux/selectors/auth.selectors";
import { APP_ROUTES } from "../../constants";
import { clearError, setCredentials } from "../../redux/slices/auth.slice";
import { AuthContainer, StyledLink, Title } from "./LoginPage.styles";
import Form from "../../components/form/Form";
import Input from "../../components/form/input/Input";
import ErrorMessage from "../../components/form/error/ErrorMessage";
import { SubmitButton } from "../../components/button";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [login, {isLoading, error}] = useLoginMutation();

    const {token} = useSelector(authSelector);

    useEffect(() => {
        if(token) {
            navigate(APP_ROUTES.dashboard);
        }
    }, [token, navigate]);

    useEffect(() => {
        dispatch(clearError());
    }, [dispatch]);

    const loginAttempt = async () => {
        try {
            const result = await login({email, password}).unwrap();
            dispatch(setCredentials(result));
        } catch (error: any) {
            console.error('Login failed:', error);
        }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();   
        loginAttempt();
    }

    return (
        <AuthContainer>
            <Title>Login</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    required
                />
                <SubmitButton
                    type="submit"
                    disabled={isLoading}
                >{isLoading ? 'Login in...' : 'Login'}</SubmitButton>
            </Form>
            {error && <ErrorMessage>{( error as any).data?.message ?? (error as any).message ?? 'Login failed'}</ErrorMessage>}
            <StyledLink to={APP_ROUTES.signup}>Don't have an account? Sign Up</StyledLink>
        </AuthContainer>
    );
}

export default LoginPage;
