
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add global styles for new animations
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  @keyframes ping-slow {
    0% { transform: scale(0.95); opacity: 1; }
    75%, 100% { transform: scale(1.5); opacity: 0; }
  }
  
  @keyframes ping-slower {
    0% { transform: scale(0.95); opacity: 0.8; }
    75%, 100% { transform: scale(2); opacity: 0; }
  }
  
  @keyframes pulse-subtle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-ping-slow {
    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  
  .animate-ping-slower {
    animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  
  .animate-pulse-subtle {
    animation: pulse-subtle 2s ease-in-out infinite;
  }
  
  .shadow-glow {
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.1);
  }
  
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
