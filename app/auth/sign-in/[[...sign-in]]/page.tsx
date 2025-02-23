"use client";

import Image from "next/image";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "@/lib/actions/user/SignInUser";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useUser } from "@/providers/user-provider";

const signInSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const SignInPage = () => {
  const { pending } = useFormStatus();
  const router = useRouter();
  const { refetchUser } = useUser();
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const result = await signIn({
        email: data.email,
        password: data.password,
      });
      form.reset();
      router.push("/");
      refetchUser();
      toast.success("Login Successfully!");
      return result;
    } catch (error) {
      toast.error("Failed to Login");
      console.log(error);
    }
  };

  return (
    <article className="relative w-full py-9 pr-5 pl-[9.5rem] flex flex-row justify-between h-full">
      <div className="flex flex-col items-center gap-6 pl-[2rem] pt-[8rem]">
        <div className="flex flex-col items-center gap-5">
          <Link href="/">
            <Image
              src="/assets/icons/logo-backup.svg"
              alt="logo"
              className="size-[24px]"
              width={24}
              height={24}
            />
          </Link>
          <div className="flex flex-col items-center gap-2 text-center">
            <h5 className="text-base font-medium">Sign in to Liva</h5>
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

            <Button type="submit" className="w-full bg-white text-black">
              {pending ? <Spinner /> : "Login"}
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
            <button className="border border-white/10 rounded-xl px-8 py-3 flex flex-row items-center gap-2 w-full justify-center">
              <GitHubLogoIcon fontSize={24} />
              <span className="text-sm font-medium">Google</span>
            </button>
            <button className="border border-white/10 rounded-xl px-8 py-3 flex flex-row items-center gap-2 w-full justify-center">
              <InstagramLogoIcon fontSize={24} />
              <span className="text-sm font-medium">Apple</span>
            </button>
          </div>
          <div className="flex flex-col items-center gap-3">
            <strong className="text-sm font-medium">Forgot password?</strong>
            <p className="text-sm font-normal text-[#dfdfdf] opacity-[.7]">
              Dont&apos;t have an account?{" "}
              <Link href="/auth/sign-up" className="font-semibold text-white">
                Sign up
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
        width={600}
        height={1000}
      />
    </article>
  );
};

export default SignInPage;
