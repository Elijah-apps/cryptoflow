
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Button as WebButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
  disabled?: boolean;
}

const Button = ({ children, onPress, variant = "default", className, disabled }: ButtonProps) => {
  // For web, we'll use the existing button component
  if (typeof window !== 'undefined') {
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

  // For native platforms
  return (
    <TouchableOpacity 
      style={[
        styles.button,
        variant === 'outline' && styles.outlineButton,
        disabled && styles.disabled
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[
        styles.text,
        variant === 'outline' && styles.outlineText,
        disabled && styles.disabledText
      ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#3b82f6',
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  outlineText: {
    color: '#3b82f6',
  },
  disabledText: {
    color: '#9ca3af',
  },
});

export default Button;
