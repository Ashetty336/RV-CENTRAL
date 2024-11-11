import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { generateToken, verifyPassword } from '@/lib/auth';
import { z } from 'zod';

const loginSchema = z.object({
  usn: z.string().regex(/^1RV\d{2}[A-Z]{2}\d{3}$/),
  password: z.string().min(6),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { usn, password } = loginSchema.parse(body);

    const user = await db.user.findUnique({
      where: { usn: usn.toUpperCase() },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const token = await generateToken({
      sub: user.id,
      usn: user.usn,
      role: user.role,
    });

    const response = NextResponse.json({
      user: {
        id: user.id,
        usn: user.usn,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}