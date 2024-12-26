import Image from 'next/image';
import { LoginForm } from '@/components/login-form';
import { QuickLinks } from '@/components/quick-links';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1f3c] to-[#0f1225] text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 items-center justify-center min-h-screen">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
            <div className="relative w-12 h-12">
              <Image
                src="/rv-logo.jpg"
                alt="RV Central Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              RV Central
            </h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-200">
            Your Gateway to Campus Life
          </h2>
          <p className="text-gray-400 max-w-md mx-auto lg:mx-0">
            Access all your college resources, track attendance, join project teams, and stay updated with campus news - all in one place.
          </p>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <LoginForm />
          <QuickLinks />
        </div>
      </div>
    </main>
  );
}