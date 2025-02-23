"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { onAuthenticateUser } from "@/lib/actions/user/onAuthenticateUser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";
import { Spinner } from "@/components/spinner";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const signUpSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignUpPage = () => {
  const { pending } = useFormStatus();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: {
    username: string;
    email: string;
    password: string;
  }) => {
    try {
      const result = await onAuthenticateUser({
        email: data.email,
        username: data.username,
        password: data.password,
      });
      form.reset();

      toast.success("Successfully toasted!");
      router.push("/auth/sign-in");
      return result.data;
    } catch (error) {
      console.log("🔴 ERROR", error);
      toast.error("This didn't work.");
      const errorMessage =
        error instanceof Error ? error.message : "Internal Server Error";
      return {
        status: 500,
        error: errorMessage,
      };
    }
  };

  return (
    <article className="relative w-full py-9 pr-5 pl-[9.5rem] flex flex-row justify-between h-full">
      <div className="flex flex-col items-center gap-6 pl-[2rem] pt-[5rem]">
        <div className="flex flex-col items-center gap-5">
          <Image
            src="/assets/icons/logo-backup.svg"
            alt="logo"
            className="size-[24px]"
            width={24}
            height={24}
          />
          <div className="flex flex-col items-center gap-2 text-center">
            <h5 className="text-base font-medium">Sign up to Liva</h5>
            <p className="text-sm font-normal text-[#dfdfdf] opacity-[.7] max-w-[320px] w-full">
              Sharing video with realtime features help you connect
              communitications
            </p>
          </div>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-3 w-full"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-white text-black">
              {pending ? <Spinner /> : "Sign up"}
            </Button>
          </form>
        </Form>

        <div className="flex flex-col items-center gap-5 max-w-full w-full">
          <div className="flex flex-row items-center gap-2 max-w-full w-full">
            <div className="w-[10rem] h-[1px] bg-white/50"></div>
            <p className="text-sm font-normal text-[#dfdfdf] opacity-[.7]">
              Or authorize with
            </p>
            <div className="w-[10rem] h-[1px] bg-white/50"></div>
          </div>
          <div className="flex flex-row items-center gap-2 w-full">
            <Button variant="outline" className="w-full flex gap-2">
              <GitHubLogoIcon fontSize={24} />
              <span className="text-sm font-medium">Google</span>
            </Button>
            <Button variant="outline" className="w-full flex gap-2">
              <InstagramLogoIcon fontSize={24} />
              <span className="text-sm font-medium">Apple</span>
            </Button>
          </div>
          <div className="flex flex-col items-center gap-3">
            <strong className="text-sm font-medium">Forgot password?</strong>
            <p className="text-sm font-normal text-[#dfdfdf] opacity-[.7]">
              have an account? Please{" "}
              <Link href="/auth/sign-in" className="font-semibold text-white">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/assets/images/bg-img-hero.webp"
        alt="logo"
        className="object-cover rounded-xl h-full"
        priority={true}
        width={800}
        height={1000}
      />
    </article>
  );
};

export default SignUpPage;
