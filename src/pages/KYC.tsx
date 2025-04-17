
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, CheckCircle } from "lucide-react";

const KYC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-20 sm:pb-0">
      <div>
        <h1 className="text-2xl font-bold">KYC Verification</h1>
        <p className="text-gray-400">Complete verification to unlock trading features</p>
      </div>

      <div className="glass-card p-6 space-y-6">
        {/* Level 1 - Basic Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-crypto-blue flex items-center justify-center">
              1
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Basic Information</h3>
              <p className="text-sm text-gray-400">Personal details and information</p>
            </div>
            {currentStep > 1 && <CheckCircle className="text-green-500" />}
          </div>
          
          {currentStep === 1 && (
            <div className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Date of Birth" type="date" />
              <Input placeholder="Country of Residence" />
              <Button 
                className="w-full" 
                onClick={() => setCurrentStep(2)}
              >
                Continue
              </Button>
            </div>
          )}
        </div>

        {/* Level 2 - Document Verification */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-crypto-purple flex items-center justify-center">
              2
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Document Verification</h3>
              <p className="text-sm text-gray-400">Upload government-issued ID</p>
            </div>
            {currentStep > 2 && <CheckCircle className="text-green-500" />}
          </div>
          
          {currentStep === 2 && (
            <div className="space-y-4 pt-4">
              <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center">
                <Upload className="mx-auto mb-2" />
                <p className="text-sm text-gray-400">
                  Drag and drop your document or click to upload
                </p>
              </div>
              <Button 
                className="w-full" 
                onClick={() => setCurrentStep(3)}
              >
                Upload & Continue
              </Button>
            </div>
          )}
        </div>

        {/* Level 3 - Advanced Verification */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-crypto-accent-blue flex items-center justify-center">
              3
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Advanced Verification</h3>
              <p className="text-sm text-gray-400">Additional verification for higher limits</p>
            </div>
          </div>
          
          {currentStep === 3 && (
            <div className="space-y-4 pt-4">
              <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center">
                <Upload className="mx-auto mb-2" />
                <p className="text-sm text-gray-400">
                  Upload proof of address (utility bill, bank statement)
                </p>
              </div>
              <Button className="w-full">
                Complete Verification
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KYC;
