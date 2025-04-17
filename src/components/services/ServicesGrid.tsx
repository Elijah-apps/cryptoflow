
import { Phone, Database, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesGrid = () => {
  const services = [
    {
      icon: Phone,
      name: "Airtime",
      path: "/dashboard/services/airtime",
      color: "bg-crypto-purple",
    },
    {
      icon: Database,
      name: "Data",
      path: "/dashboard/services/data",
      color: "bg-crypto-blue",
    },
    {
      icon: Zap,
      name: "Electricity",
      path: "/dashboard/services/electricity",
      color: "bg-crypto-accent-blue",
    },
  ];

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Services</h3>
      <div className="grid grid-cols-3 gap-4">
        {services.map((service) => (
          <Link
            key={service.name}
            to={service.path}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-crypto-card-dark hover:bg-white/5 transition-colors"
          >
            <div className={`w-10 h-10 ${service.color} rounded-full flex items-center justify-center mb-2`}>
              <service.icon size={20} className="text-white" />
            </div>
            <span className="text-sm">{service.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
