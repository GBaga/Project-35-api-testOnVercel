import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  // Check if the route is an admin route and if the user has admin privileges
  if (children.type.name.startsWith("Admin") && !user.isAdmin) {
    return <Navigate to="/login" />;
  }

  return children;
}
