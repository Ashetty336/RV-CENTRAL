import Register from '@/components/supaauth/register'
import React from 'react'
import Image from 'next/image'
import { QuickLinks } from '@/components/quick-links'

function page() {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Branding and Quick Links */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-b from-[#1a1f3c] to-[#0f1225] p-8">
        <div className="w-full flex flex-col justify-between">
          {/* Branding */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
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
            <p className="text-gray-400 max-w-md">
              Access all your college resources, track attendance, join project teams, and stay updated with campus news - all in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-8">
            <QuickLinks />
          </div>
        </div>
      </div>

      {/* Right side - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <Register />
      </div>
    </div>
  )
}

export default page