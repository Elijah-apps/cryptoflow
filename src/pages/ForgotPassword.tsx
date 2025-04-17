
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    // This is a mock password reset - in a real app this would send a reset link
    setSubmitted(true);
    toast.success("Reset link sent to your email!");
  };

  return (
    <div className="min-h-screen bg-crypto-bg-dark text-white flex flex-col justify-center p-6">
      <div className="max-w-md w-full mx-auto">
        <div className="mb-6">
          <Link to="/login" className="inline-flex items-center text-crypto-accent-blue hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to login
          </Link>
        </div>

        <div className="text-center mb-8">
          <Wallet className="w-16 h-16 text-crypto-accent-blue mx-auto mb-4" />
          <h1 className="text-3xl font-bold crypto-gradient-text">Reset password</h1>
          <p className="text-gray-400 mt-2">We'll send you a link to reset your password</p>
        </div>

        <div className="glass-card rounded-xl p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
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

              <Button type="submit" className="w-full bg-crypto-blue hover:bg-crypto-blue/90">
                Send reset link
              </Button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-crypto-blue/20 mx-auto flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-crypto-accent-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Check your email</h3>
              <p className="text-gray-400 mb-6">
                We've sent a password reset link to <span className="text-white">{email}</span>
              </p>
              <Button
                variant="outline"
                className="border-white/10 hover:bg-white/5"
                onClick={() => setSubmitted(false)}
              >
                Resend email
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
