import { useUserAuth } from "@/context/userAuthContext";
import { Navigate, Outlet } from "react-router";

export const ProtectedRoutes = () => {
  const { user } = useUserAuth();

  console.log(user);

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};
