import { useNavigate } from "react-router";
import PageTitle from "../../components/title/PageTitle";
import { useGetUsersQuery } from "../../redux/api/endpoints/users.endpoint";
import { Container, FavoriteLink, StatusMessage, TableData, TableHeader, TableRow, UserTable } from "./AdminUserPage.styles";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/selectors/auth.selectors";
import { useEffect } from "react";
import { APP_ROUTES } from "../../constants";
import { UserRole } from "../../types/user-role.type";

const AdminUserPage = () => {
    const navigate = useNavigate();
    const { data: users, isLoading, isError, error } = useGetUsersQuery();
    const { user: currentUser } = useSelector(authSelector);

    useEffect(() => {
        if (currentUser?.role !== UserRole.ADMIN) {
            navigate(APP_ROUTES.unauthorized); // Or '/login', depending on desired behavior
        }
    }, [currentUser, navigate]);

    if (isLoading) {
        return <StatusMessage>Loading users...</StatusMessage>;
    }

    if (isError) {
        return <StatusMessage>Error loading users: {JSON.stringify(error)}</StatusMessage>;
    }

    if (!users || users.length === 0) {
        return <StatusMessage>No users found.</StatusMessage>;
    }

    return (
        <Container>
            <PageTitle>User Management</PageTitle>
            <UserTable>
                <thead>
                    <tr>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Email</TableHeader>
                        <TableHeader>Role</TableHeader>
                        <TableHeader>Created</TableHeader>
                        <TableHeader>Favorites</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                        <TableData>{user.name}</TableData>
                        <TableData>{user.email}</TableData>
                        <TableData>{user.role}</TableData>
                        <TableData>{new Date(user.createdAt).toLocaleDateString()}</TableData>
                        <TableData>
                          <FavoriteLink to={`/admin/users/${user.id}/favorites`}>
                            View Favorites
                          </FavoriteLink>
                        </TableData>
                      </TableRow>
                    ))}
                </tbody>
            </UserTable>
        </Container>
    );
}

export default AdminUserPage;
