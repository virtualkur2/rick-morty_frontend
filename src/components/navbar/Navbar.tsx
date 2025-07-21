import { AppTitle, NavBarContainer, NavLinks, StyledNavLink, UserInfo } from "./Navbar.styles";
import { APP_NAME, APP_ROUTES } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router";
import { authSelector } from "../../redux/selectors/auth.selectors";
import { UserRole } from "../../types/user-role.type";
import { logout } from "../../redux/slices/auth.slice";
import { LogoutButton } from "../button";

const Navbar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const {token, user} = useSelector(authSelector);

    const handleLogout = () => {
        dispatch(logout());
        navigate(APP_ROUTES.login);
    }

    return (
        <NavBarContainer>
            <AppTitle to={'/'}>{APP_NAME}</AppTitle>
            <NavLinks>
                {token
                    ? (
                        <>
                            {user && <UserInfo>Welcome {user.name} ({user.role.toUpperCase()})</UserInfo>}
                            <StyledNavLink to={APP_ROUTES.dashboard}>Dashboard</StyledNavLink>
                            {user?.role === UserRole.ADMIN && (
                                <StyledNavLink
                                    to={APP_ROUTES.admin_users}
                                >Manage Users</StyledNavLink>
                            )}
                            <LogoutButton type="button" onClick={handleLogout}>Logout</LogoutButton>
                        </>
                    ) : (
                        <>
                            <StyledNavLink to={APP_ROUTES.login}>Login</StyledNavLink>
                            <StyledNavLink to={APP_ROUTES.signup}>Sign Up</StyledNavLink>
                        </>
                    )
                }
            </NavLinks>
        </NavBarContainer>
    );
}

export default Navbar;