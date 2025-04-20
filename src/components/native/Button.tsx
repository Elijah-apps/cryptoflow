
import React from 'react';
import { Button as WebButton } from "@/components/ui/button";

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
  disabled?: boolean;
}

const Button = ({ children, onPress, variant = "default", className, disabled }: ButtonProps) => {
  // For web only - using the shadcn Button component
  return (
    <WebButton 
      onClick={onPress} 
      variant={variant} 
      className={className}
      disabled={disabled}
    >
      {children}
    </WebButton>
  );
};

export default Button;
