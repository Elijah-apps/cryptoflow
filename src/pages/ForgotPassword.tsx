
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { apiService } from "@/services/api/apiService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"email" | "otp" | "success">("email");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const result = await apiService.requestPasswordReset(email);
      
      if (result.success) {
        setStep("otp");
        toast.success("OTP sent to your email!");
      } else {
        toast.error(result.error || "Failed to send OTP. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while requesting password reset");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const result = await apiService.verifyOTP(email, otp);
      
      if (result.success) {
        setStep("success");
        toast.success("OTP verified successfully!");
      } else {
        toast.error(result.error || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while verifying OTP");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
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
          <h1 className="text-3xl font-bold crypto-gradient-text">CreekChain</h1>
          <p className="text-gray-400 mt-2">Reset your password</p>
        </div>

        <div className="glass-card rounded-xl p-6">
          {step === "email" && (
            <form onSubmit={handleSubmitEmail} className="space-y-6">
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

              <Button 
                type="submit" 
                className="w-full bg-crypto-blue hover:bg-crypto-blue/90"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send OTP"}
              </Button>
            </form>
          )}

          {step === "otp" && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Enter OTP</h3>
                <p className="text-gray-400 mb-4">
                  We've sent a one-time password to <span className="text-white">{email}</span>
                </p>
              </div>
              
              <div className="flex justify-center mb-4">
                <InputOTP 
                  maxLength={6} 
                  value={otp} 
                  onChange={setOtp} 
                  className="gap-2"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="bg-crypto-card-dark border-white/10" />
                    <InputOTPSlot index={1} className="bg-crypto-card-dark border-white/10" />
                    <InputOTPSlot index={2} className="bg-crypto-card-dark border-white/10" />
                    <InputOTPSlot index={3} className="bg-crypto-card-dark border-white/10" />
                    <InputOTPSlot index={4} className="bg-crypto-card-dark border-white/10" />
                    <InputOTPSlot index={5} className="bg-crypto-card-dark border-white/10" />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              
              <Button 
                onClick={handleVerifyOTP} 
                className="w-full bg-crypto-blue hover:bg-crypto-blue/90"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify OTP"}
              </Button>
              
              <div className="text-center">
                <button 
                  type="button" 
                  onClick={() => setStep("email")}
                  className="text-crypto-accent-blue text-sm hover:underline"
                >
                  Didn't receive the code? Try again
                </button>
              </div>
            </div>
          )}

          {step === "success" && (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-crypto-blue/20 mx-auto flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-crypto-accent-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">OTP Verified</h3>
              <p className="text-gray-400 mb-6">
                You can now reset your password
              </p>
              <Link to="/reset-password">
                <Button className="bg-crypto-blue hover:bg-crypto-blue/90">
                  Create New Password
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
