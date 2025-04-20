
import { useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Wallet, LockKeyhole, Mail } from "lucide-react";
import Button from "@/components/native/Button";
import Input from "@/components/native/Input";
import Text from "@/components/native/Text";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { apiService } from "@/services/api/apiService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const result = await apiService.login(email, password);
      
      if (result.success) {
        toast.success("Logged in successfully!");
        navigate("/dashboard");
      } else {
        toast.error(result.error || "Login failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred during login");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const containerStyle = Platform.select({
    web: styles.container,
    default: {
      ...styles.container,
      backgroundColor: '#0f172a',
      flex: 1,
      padding: 24,
    }
  });

  const contentStyle = Platform.select({
    web: styles.content,
    default: {
      ...styles.content,
      maxWidth: 400,
      width: '100%',
      alignSelf: 'center',
    }
  });

  return (
    <View style={containerStyle}>
      <View style={contentStyle}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Wallet style={styles.icon} />
          </View>
          <Text style={styles.title}>CreekChain</Text>
          <Text style={styles.subtitle}>Sign in to access your crypto wallet</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Label htmlFor="email">Email</Label>
            <View style={styles.inputWrapper}>
              <Mail style={styles.inputIcon} />
              <Input
                value={email}
                onChangeText={setEmail}
                placeholder="name@example.com"
                type="email"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.passwordHeader}>
              <Label htmlFor="password">Password</Label>
              <Link to="/forgot-password" style={styles.forgotPassword}>
                Forgot password?
              </Link>
            </View>
            <View style={styles.inputWrapper}>
              <LockKeyhole style={styles.inputIcon} />
              <Input
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                secureTextEntry={!showPassword}
              />
              <Button
                onPress={() => setShowPassword(!showPassword)}
                variant="ghost"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </Button>
            </View>
          </View>

          <Button
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text>{isLoading ? "Signing in..." : "Sign in"}</Text>
          </Button>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>
              Don't have an account?{" "}
              <Link to="/signup" style={styles.signupLink}>
                Sign up
              </Link>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 24,
  },
  content: {
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  iconContainer: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 9999,
    marginBottom: 16,
  },
  icon: {
    width: 56,
    height: 56,
    color: '#3b82f6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: 16,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  inputGroup: {
    marginBottom: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  inputIcon: {
    position: 'absolute',
    left: 12,
    width: 20,
    height: 20,
    color: '#94a3b8',
  },
  passwordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  forgotPassword: {
    color: '#3b82f6',
    fontSize: 14,
  },
  loginButton: {
    marginTop: 24,
  },
  signupContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  signupText: {
    color: '#94a3b8',
    fontSize: 14,
  },
  signupLink: {
    color: '#3b82f6',
  },
});

export default Login;
