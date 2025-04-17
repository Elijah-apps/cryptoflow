
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";

const CreateNewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    // This is a mock password reset - in a real app this would update the password
    toast.success("Password reset successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-crypto-bg-dark text-white flex flex-col justify-center p-6">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-8">
          <Wallet className="w-16 h-16 text-crypto-accent-blue mx-auto mb-4" />
          <h1 className="text-3xl font-bold crypto-gradient-text">Create new password</h1>
          <p className="text-gray-400 mt-2">Your new password must be different from previously used passwords</p>
        </div>

        <div className="glass-card rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
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
              <p className="text-xs text-gray-400 mt-1">
                Must be at least 8 characters and include a number and a special character
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <div className="relative">
                <LockKeyhole className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10 bg-crypto-card-dark border-white/10 text-white"
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-crypto-blue hover:bg-crypto-blue/90">
              Reset password
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
