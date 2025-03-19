import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { auth } from "@/config/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/", { replace: true });
      console.log("User logged in successfully");
    } catch (error) {
      console.error("Error logging in:", error);
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
