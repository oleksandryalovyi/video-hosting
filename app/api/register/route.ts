import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/utils/prismadb";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, username } = body;

    if (!email || !password || !username) {
      return NextResponse.error();
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        name: username,
        emailVerified: new Date(),
      },
    });

    return NextResponse.json(user);
  } catch (e) {
    console.error(e);
    return NextResponse.error();
  }
}
