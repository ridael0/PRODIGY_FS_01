import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      setError(null);
      await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
      });
      navigate("/");
    } catch (err) {
      if(axios.isAxiosError(err) ) setError(err?.response?.data?.error ?? err.message);
    }
  };

  return (
    <Card className="p-4 max-w-sm mx-auto">
      <CardHeader>
        <CardTitle className="">Register</CardTitle>
        <CardAction>
            <Link to={"/"}>
              <Button variant="link">
                  Login
              </Button>
            </Link> 
          </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <div className="text-red-500 self-center">{error}</div>}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleRegister} className="w-full">Register</Button>
      </CardFooter>
    </Card>
  );
}