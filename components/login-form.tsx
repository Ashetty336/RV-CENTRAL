"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Icons } from '@/components/icons';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(event.currentTarget);
    const usn = formData.get('usn') as string;
    const password = formData.get('password') as string;

    // Demo credentials for testing
    if (usn === '1RV21CS000' && password === 'demo123') {
      setTimeout(() => {
        router.push('/dashboard');
      }, 1000);
    } else {
      setError('Invalid credentials. Try USN: 1RV21CS000, Password: demo123');
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto backdrop-blur-lg bg-white/10 border-white/20">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Sign in</CardTitle>
        <CardDescription className="text-center text-gray-400">
          Enter your USN and password to access your account
        </CardDescription>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="usn">University Seat Number (USN)</Label>
            <Input
              id="usn"
              name="usn"
              placeholder="1RV21CS000"
              type="text"
              required
              pattern="^1RV\d{2}[A-Z]{2}\d{3}$"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
              disabled={isLoading}
            />
            <p className="text-xs text-gray-400">
              Format: 1RV[Year][Dept][Number] (e.g., 1RV21CS000)
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
              disabled={isLoading}
            />
          </div>
          {error && (
            <div className="text-sm text-red-400 bg-red-500/10 p-3 rounded-md">
              {error}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In
          </Button>
          <div className="text-sm text-center space-x-1 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Forgot password?
            </a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">
              Contact support
            </a>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}