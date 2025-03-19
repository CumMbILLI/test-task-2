import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUserAuth } from "@/context/userAuthContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

export const Login = () => {
  const { logIn } = useUserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="w-svw h-svh flex flex-col justify-center items-center"
    >
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            or{" "}
            <Link
              to="/register"
              className="text-blue-600 underline  decoration-2"
            >
              Register
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <label>Email</label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardContent>
        <CardFooter>
          <Button type="submit">Login</Button>
        </CardFooter>
      </Card>
    </form>
  );
};
