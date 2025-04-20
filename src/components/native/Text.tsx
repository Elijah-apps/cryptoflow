
import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

interface TextProps {
  children: React.ReactNode;
  style?: any;
}

const Text = ({ children, style }: TextProps) => {
  // For web
  if (typeof window !== 'undefined') {
    return <span style={style}>{children}</span>;
  }

  // For native platforms
  return <RNText style={[styles.text, style]}>{children}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default Text;
