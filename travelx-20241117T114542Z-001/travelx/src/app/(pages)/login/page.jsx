"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Image from "next/image";
import React, { useState } from "react";
import Paris from "/public/delhi.jpg";
import { schema } from "./schema";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Github } from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    if (Object.keys(errors).length > 0) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await signIn("credentials", { ...data, redirect: false });

      if (res?.error == null) {
        router.push("/");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="relative h-screen w-full">
      <div className="relative h-full w-full">
        <Image
          className="brightness-50 h-full w-full object-cover"
          src={Paris}
          alt="Login's image"
        />
        <div className="h-fit w-fit px-10 py-5 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg">
          <h2 className="text-center p-4 font-semibold text-slate-800 text-2xl border-b border-slate-500">
            Log In
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 flex flex-col items-center w-full gap-8"
          >
            <Input
              className="w-full mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600"
              type="email"
              placeholder="John@gmail.com"
              register={register("email")}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
            <Input
              className="w-full mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600"
              type="password"
              placeholder="*******"
              register={register("password")}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password.message}</span>
            )}

            <Button
              disabled={isSubmitting || isLoading}
              label={isLoading ? "Logging in..." : "Submit"}
              className="w-3/4 mx-auto cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500 transition-all hover:bg-blue-600"
            />
          </form>
          <div className="flex items-center justify-between px-6 mt-5 mx-auto">
            <Button
              label={<FaGithub />}
              onClick={() => signIn("github", { callbackUrl: "/" })}
              className="text-center bg-black text-white px-8 py-6 text-xl rounded-lg"
            />
            <Button
              label={<FaGoogle />}
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="text-center bg-red-800 text-white px-8 py-6 text-xl rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
