import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth/auth";

function ProtectedRoute({ component: Component }: any) {
  const auth = useAuth();

  if (auth.isLoggedIn()) {
    console.log("user");
    return <Component />;
  } else {
    return <Navigate to="/" replace />;
  }
}
export default ProtectedRoute;
