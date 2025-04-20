
import React from 'react';
import { TextInput, Platform } from 'react-native';
import { Input as WebInput } from "@/components/ui/input";

interface InputProps {
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  label?: string;
  className?: string;
  type?: string;
  style?: any;
}

const Input = ({ 
  value, 
  onChangeText, 
  placeholder, 
  secureTextEntry, 
  label,
  className,
  type,
  style
}: InputProps) => {
  if (Platform.OS === 'web') {
    return (
      <WebInput
        value={value}
        onChange={(e) => onChangeText?.(e.target.value)}
        placeholder={placeholder}
        type={secureTextEntry ? 'password' : (type || 'text')}
        className={className}
      />
    );
  }

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={style}
    />
  );
};

export default Input;
