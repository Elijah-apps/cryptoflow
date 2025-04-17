
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransferForm from "@/components/transfers/TransferForm";
import ReceiveForm from "@/components/transfers/ReceiveForm";

const Transfer = () => {
  return (
    <div className="space-y-6 pb-20 sm:pb-0">
      <div>
        <h1 className="text-2xl font-bold">Transfer</h1>
        <p className="text-gray-400">Send and receive cryptocurrency</p>
      </div>
      
      <div className="max-w-md mx-auto">
        <Tabs defaultValue="send" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="send">Send</TabsTrigger>
            <TabsTrigger value="receive">Receive</TabsTrigger>
          </TabsList>
          
          <TabsContent value="send">
            <TransferForm />
          </TabsContent>
          
          <TabsContent value="receive">
            <ReceiveForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Transfer;
