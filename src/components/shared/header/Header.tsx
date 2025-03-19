import { Button } from "@/components/ui/button";
import { useUserAuth } from "@/context/userAuthContext";
import { useNavigate } from "react-router";

export const Header = () => {
  const { logOut } = useUserAuth();

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/login");
  };

  return (
    <section className="flex justify-between">
      <div className="flex gap-8">
        <h1 className="text-2xl">TODOS</h1>
        <Button variant="outline" onClick={() => navigate("/new-todo")}>
          New Todo
        </Button>
      </div>

      <Button onClick={handleLogOut}>Logout</Button>
    </section>
  );
};
