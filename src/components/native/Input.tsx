
import React from 'react';
import { TextInput, StyleSheet, View, Text as RNText } from 'react-native';
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
  // For web
  if (typeof window !== 'undefined') {
    return (
      <WebInput
        value={value}
        onChange={(e) => onChangeText?.(e.target.value)}
        placeholder={placeholder}
        type={type || 'text'}
        className={className}
      />
    );
  }

  // For native platforms
  return (
    <View style={styles.container}>
      {label && <RNText style={styles.label}>{label}</RNText>}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#9ca3af"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#1f2937',
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 8,
    padding: 12,
    color: '#ffffff',
    fontSize: 16,
  },
});

export default Input;
