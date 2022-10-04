import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ page }) => {
  const isUserSignedIn = true;

  if (isUserSignedIn) {
    return page;
  }

  return <Navigate to="/not-found" />;
};

export default ProtectedRoute;
