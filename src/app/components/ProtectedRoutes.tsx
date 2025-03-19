import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router";

export const ProtectedRoutes = () => {
  const { user } = useAuth();

  console.log(user);

  return <Outlet />;
};
