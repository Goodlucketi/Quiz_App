import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    // If the token doesn't exist, redirect to the login page
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children; // Render the protected component (e.g., Dashboard) if the token exists
};

export default PrivateRoute;
