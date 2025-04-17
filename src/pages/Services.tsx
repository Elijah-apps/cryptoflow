
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Database, Zap, Tv } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Phone,
      name: "Airtime",
      description: "Buy airtime for any network",
      path: "/dashboard/services/airtime",
      color: "bg-crypto-purple",
    },
    {
      icon: Database,
      name: "Data",
      description: "Purchase internet data bundles",
      path: "/dashboard/services/data",
      color: "bg-crypto-blue",
    },
    {
      icon: Zap,
      name: "Electricity",
      description: "Pay electricity bills",
      path: "/dashboard/services/electricity",
      color: "bg-crypto-accent-blue",
    },
    {
      icon: Tv,
      name: "TV",
      description: "Subscribe to TV packages",
      path: "/dashboard/services/tv",
      color: "bg-crypto-pink",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Services</h1>
        <p className="text-gray-400">Quick access to all billing services</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Card key={service.name} className="bg-crypto-card-dark border-white/10">
            <Link to={service.path} className="block p-6">
              <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
