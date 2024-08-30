"use client";

import LoginForm from "@/components/sections/auth/login-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="w-full md:grid md:grid-cols-2 min-h-screen">
      <div className="flex relative items-center justify-center py-12 col-span-1">
        <p className="absolute text-primary text-3xl font-[700] top-[16px] left-[16px]">
          Digital
        </p>
        <div className="mx-auto mt-[80px] md:mt-0 grid max-w-2xl w-full gap-6 px-4">
          <div className="grid gap-2 text-center">
            <p className="text-balance text-left text-primary font-[700] text-[24px] md:text-[28px] xl:text-[36px]">
              Artificial Intelligence Driving Results For The Travel Industry
            </p>
            <p className="text-balance text-left text-muted-foreground">
              Welcome back! Please login to your account.
            </p>
          </div>
          <LoginForm />
          <p className="flex justify-center text-muted-foreground">
            Or login with
          </p>
          <div className="flex gap-2 justify-center">
            <Button variant={"outline"}>
              <FcGoogle className="mr-2" /> Google
            </Button>
            <Button variant={"outline"}>
              <FaFacebook className="mr-2" /> Facebook
            </Button>
            <Button variant={"outline"}>
              <FaLinkedin className="mr-2" /> LinkedIn
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden h-full bg-muted md:flex col-span-1">
        <Image
          src="/assets/images/login.png"
          alt="Image"
          width={500}
          height={500}
          quality={100}
          className="my-auto w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
