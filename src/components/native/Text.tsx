
import React from 'react';

interface TextProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Text = ({ children, style, className }: TextProps) => {
  // For web only - we're not actually using React Native in the browser
  return <span style={style} className={className}>{children}</span>;
};

export default Text;
