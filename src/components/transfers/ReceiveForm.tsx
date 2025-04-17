
import { QrCode, Copy, Download } from "lucide-react";
import { toast } from "sonner";

const ReceiveForm = () => {
  const walletAddress = "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t";
  
  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    toast.success("Address copied to clipboard");
  };
  
  // QR code placeholder component
  const QrCodePlaceholder = () => (
    <div className="w-full h-full border-2 border-dashed border-gray-400 rounded flex items-center justify-center bg-gray-50">
      <div className="text-xs text-gray-500 p-2 text-center">
        <QrCode className="mx-auto mb-2 text-gray-400" size={24} />
        QR Code for your wallet address
      </div>
    </div>
  );
  
  return (
    <div className="glass-card rounded-xl p-6">
      <h2 className="text-xl font-bold mb-6 flex items-center">
        <QrCode size={18} className="mr-2" />
        Receive Crypto
      </h2>
      
      <div className="mx-auto text-center">
        <div className="relative mx-auto w-48 h-48 mb-6 bg-white p-2 rounded-lg">
          <QrCodePlaceholder />
        </div>
        
        <p className="text-sm text-gray-400 mb-2">Your Wallet Address</p>
        <div className="bg-crypto-card-dark border border-white/10 rounded-lg p-3 flex items-center mb-6">
          <p className="text-sm font-mono truncate flex-1">{walletAddress}</p>
          <button 
            onClick={copyAddress}
            className="ml-2 p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Copy size={16} className="text-crypto-accent-blue" />
          </button>
        </div>
        
        <div className="flex flex-col space-y-3">
          <button
            className="py-3 px-6 bg-crypto-blue rounded-xl hover:bg-crypto-blue/90 transition-colors flex items-center justify-center"
            onClick={copyAddress}
          >
            <Copy size={16} className="mr-2" />
            Copy Address
          </button>
          
          <button
            className="py-3 px-6 bg-crypto-purple rounded-xl hover:bg-crypto-purple/90 transition-colors flex items-center justify-center"
          >
            <Download size={16} className="mr-2" />
            Download QR Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiveForm;
