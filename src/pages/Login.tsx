
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Wallet, LockKeyhole, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a mock login - in a real app this would verify credentials
    if (email && password) {
      toast.success("Logged in successfully!");
      navigate("/");
    } else {
      toast.error("Please enter both email and password");
    }
  };

  return (
    <div className="min-h-screen bg-crypto-bg-dark text-white flex flex-col justify-center p-6">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-8">
          <Wallet className="w-16 h-16 text-crypto-accent-blue mx-auto mb-4" />
          <h1 className="text-3xl font-bold crypto-gradient-text">Welcome back</h1>
          <p className="text-gray-400 mt-2">Sign in to access your crypto wallet</p>
        </div>

        <div className="glass-card rounded-xl p-6">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-crypto-card-dark border-white/10 text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-crypto-accent-blue hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <LockKeyhole className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-crypto-card-dark border-white/10 text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full bg-crypto-blue hover:bg-crypto-blue/90">
              Sign in
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link to="/signup" className="text-crypto-accent-blue hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
