import { RouterProvider } from "react-router";
import { router } from "../router/routes";
import { UserAuthProvider } from "@/context/userAuthContext";
import { Toaster } from "@/components/ui/sonner";

export const App = () => {
  return (
    <UserAuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </UserAuthProvider>
  );
};
