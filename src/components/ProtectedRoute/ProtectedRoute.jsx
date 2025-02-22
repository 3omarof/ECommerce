import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../../Context/user.context";

export default function ProtectedRoute({ children }) {
  const { token } = useContext(userContext);
  console.log(token);

  if (token) {
    return children;
  } else {
    return <Navigate to="/auth/login" />;
  }
}
