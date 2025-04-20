
import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { Button as WebButton } from "@/components/ui/button";

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
  disabled?: boolean;
  style?: any;
}

const Button = ({ children, onPress, variant = "default", className, disabled, style }: ButtonProps) => {
  if (Platform.OS === 'web') {
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
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={style}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;
