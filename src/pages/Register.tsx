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
import { toast } from "sonner";

export const Register = () => {
  const { signUp } = useUserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signUp(email, password)
        .then(() => {
          toast.success("Successfully registered!");
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
          toast.error("Something went wrong!");
        });
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <form
      onSubmit={handleSignUp}
      className="w-svw h-svh flex flex-col justify-center items-center"
    >
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            or{" "}
            <Link to="/login" className="text-blue-600 underline  decoration-2">
              Login
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
          <Button type="submit">Register</Button>
        </CardFooter>
      </Card>
    </form>
  );
};
