
import React from 'react';
import { Text as RNText, Platform } from 'react-native';

interface TextProps {
  children: React.ReactNode;
  style?: any;
  className?: string;
}

const Text = ({ children, style, className }: TextProps) => {
  // For web only - we're not actually using React Native in the browser
  if (Platform.OS === 'web') {
    return <span style={style} className={className}>{children}</span>;
  }
  
  return <RNText style={style}>{children}</RNText>;
};

export default Text;
