
import { useState } from "react";
import { Shield, User, Globe, Moon, Sun, Bell, Key, Eye, EyeOff } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [hideBalances, setHideBalances] = useState(false);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    toast.success(`${isDarkMode ? 'Light' : 'Dark'} mode enabled`);
  };
  
  const toggleNotifications = () => {
    setNotifications(!notifications);
    toast.success(`Notifications ${notifications ? 'disabled' : 'enabled'}`);
  };
  
  const toggleHideBalances = () => {
    setHideBalances(!hideBalances);
    toast.success(`Balances ${hideBalances ? 'visible' : 'hidden'}`);
  };
  
  return (
    <div className="space-y-6 pb-20 sm:pb-0 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-400">Manage your wallet settings</p>
      </div>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="bg-crypto-card-dark mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <div className="glass-card rounded-xl p-6 space-y-6">
            <div>
              <h2 className="text-lg font-bold mb-4 flex items-center">
                <User size={18} className="mr-2" />
                Account Information
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-1">
                    <p className="text-sm text-gray-400">Username</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="font-medium">cryptouser</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-1">
                    <p className="text-sm text-gray-400">Email</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="font-medium">user@example.com</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-1">
                    <p className="text-sm text-gray-400">Member Since</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="font-medium">April 15, 2025</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-6">
              <h2 className="text-lg font-bold mb-4 flex items-center">
                <Globe size={18} className="mr-2" />
                Network Settings
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Network</p>
                    <p className="text-sm text-gray-400">Connected to Mainnet</p>
                  </div>
                  <Button variant="outline" className="border-white/10 bg-crypto-card-dark">
                    Change
                  </Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Gas Price</p>
                    <p className="text-sm text-gray-400">Automatic (Standard)</p>
                  </div>
                  <Button variant="outline" className="border-white/10 bg-crypto-card-dark">
                    Customize
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="security">
          <div className="glass-card rounded-xl p-6 space-y-6">
            <div>
              <h2 className="text-lg font-bold mb-4 flex items-center">
                <Shield size={18} className="mr-2" />
                Security Settings
              </h2>
              
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-400">Add an extra layer of security</p>
                  </div>
                  <Button variant="outline" className="border-crypto-accent-blue text-crypto-accent-blue">
                    Enable
                  </Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium flex items-center">
                      <Eye size={16} className="mr-1" />
                      Hide Balances
                    </p>
                    <p className="text-sm text-gray-400">Hide your crypto balances</p>
                  </div>
                  <Switch
                    checked={hideBalances}
                    onCheckedChange={toggleHideBalances}
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Auto-Lock Timer</p>
                    <p className="text-sm text-gray-400">Lock after 5 minutes of inactivity</p>
                  </div>
                  <Button variant="outline" className="border-white/10 bg-crypto-card-dark">
                    Change
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-6">
              <h2 className="text-lg font-bold mb-4 flex items-center">
                <Key size={18} className="mr-2" />
                Backup & Recovery
              </h2>
              
              <div className="space-y-4">
                <div className="glass-card rounded-xl p-4 bg-crypto-blue/10 border border-crypto-blue/20">
                  <h3 className="font-medium mb-2">Recovery Phrase</h3>
                  <p className="text-sm text-gray-300 mb-3">Your recovery phrase is the only way to restore your wallet if you lose access.</p>
                  <Button 
                    variant="outline" 
                    className="bg-transparent border-crypto-blue text-crypto-blue hover:bg-crypto-blue/10 w-full"
                  >
                    Reveal Recovery Phrase
                  </Button>
                </div>
                
                <div className="glass-card rounded-xl p-4 bg-crypto-card-dark">
                  <h3 className="font-medium mb-2">Private Keys</h3>
                  <p className="text-sm text-gray-300 mb-3">Export private keys for individual cryptocurrencies.</p>
                  <Button 
                    variant="outline" 
                    className="bg-transparent border-white/10 text-white w-full"
                  >
                    Export Private Keys
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="preferences">
          <div className="glass-card rounded-xl p-6 space-y-6">
            <div>
              <h2 className="text-lg font-bold mb-4 flex items-center">
                <Globe size={18} className="mr-2" />
                Display Settings
              </h2>
              
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium flex items-center">
                      {isDarkMode ? <Moon size={16} className="mr-1" /> : <Sun size={16} className="mr-1" />}
                      Dark Mode
                    </p>
                    <p className="text-sm text-gray-400">Toggle between light and dark themes</p>
                  </div>
                  <Switch
                    checked={isDarkMode}
                    onCheckedChange={toggleDarkMode}
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Currency</p>
                    <p className="text-sm text-gray-400">Default display currency</p>
                  </div>
                  <Button variant="outline" className="border-white/10 bg-crypto-card-dark">
                    USD
                  </Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Language</p>
                    <p className="text-sm text-gray-400">Interface language</p>
                  </div>
                  <Button variant="outline" className="border-white/10 bg-crypto-card-dark">
                    English
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-6">
              <h2 className="text-lg font-bold mb-4 flex items-center">
                <Bell size={18} className="mr-2" />
                Notifications
              </h2>
              
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Push Notifications</p>
                    <p className="text-sm text-gray-400">Receive notifications for important updates</p>
                  </div>
                  <Switch
                    checked={notifications}
                    onCheckedChange={toggleNotifications}
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Price Alerts</p>
                    <p className="text-sm text-gray-400">Get notified about significant price changes</p>
                  </div>
                  <Switch
                    checked={notifications}
                    onCheckedChange={toggleNotifications}
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Transaction Notifications</p>
                    <p className="text-sm text-gray-400">Receive notifications for wallet activity</p>
                  </div>
                  <Switch
                    checked={notifications}
                    onCheckedChange={toggleNotifications}
                  />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
