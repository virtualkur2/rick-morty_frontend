import { Navigate, Outlet } from "react-router";
import type { UserRole } from "../../types/user-role.type";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/selectors/auth.selectors";
import { APP_ROUTES } from "../../constants";

export interface ProtectedRouteProps {
    allowedRoles?: UserRole[];
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
    const { token, user} = useSelector(authSelector);
    
    if(!token) {
        return <Navigate to={APP_ROUTES.login} replace/>;
    }

    if(allowedRoles && user && !allowedRoles.includes(user.role)) {
        return <Navigate to={APP_ROUTES.unauthorized} replace />;
    }
    
    return <Outlet />;
}

export default ProtectedRoute;
