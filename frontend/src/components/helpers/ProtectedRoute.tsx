import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth/auth";

function ProtectedRoute({
  component: Component,
  redirectIfAuthenticated = false,
  preventIfProfileCompleted = false,

  adminOnly = false,
}: any) {
  const auth = useAuth();

  if (redirectIfAuthenticated && auth.isLoggedIn) {
    return <Navigate to="/" replace />;
  } else if (adminOnly && !auth.isAdmin) {
    return <Navigate to="/" replace />;
  } else if (!redirectIfAuthenticated && !auth.isLoggedIn) {
    return <Navigate to="/" replace />;
  } else if (preventIfProfileCompleted && auth.isSetupCompleted) {
    return <Navigate to="/" replace />;
  } else {
    return <Component />;
  }
}
export default ProtectedRoute;
