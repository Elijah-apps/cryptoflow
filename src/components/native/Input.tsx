
import React from 'react';
import { Input as WebInput } from "@/components/ui/input";

interface InputProps {
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  label?: string;
  className?: string;
  type?: string;
}

const Input = ({ 
  value, 
  onChangeText, 
  placeholder, 
  secureTextEntry, 
  label,
  className,
  type
}: InputProps) => {
  // For web only - using the shadcn Input component
  return (
    <WebInput
      value={value}
      onChange={(e) => onChangeText?.(e.target.value)}
      placeholder={placeholder}
      type={secureTextEntry ? 'password' : (type || 'text')}
      className={className}
    />
  );
};

export default Input;
