import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setError(null);
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      if(axios.isAxiosError(err) ) setError(err?.response?.data?.error ?? err.message);
    }
  };


  return (
    <>
      <Card className="p-4 max-w-sm mx-auto">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Link to={"/register"}>
              <Button variant="link">
                  Register
              </Button>
            </Link> 
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); setError(null);}}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" placeholder="Password" type="password" value={password} onChange={(e) => { setPassword(e.target.value); setError(null);}} />
              </div>
              {error && <div className="text-red-500 self-center">{error}</div>}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button onClick={handleLogin} type="submit" className="w-full">
            Login
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}