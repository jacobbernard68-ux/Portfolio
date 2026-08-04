"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialSignup from "../SocialSignup";
import SwitchOptions from "../SwitchOptions";
import MagicLink from "../MagicLink";
import Loader from "@/components/Common/Loader";
import { integrations, messages } from "../../../../integrations.config";
import z from "zod";

const SigninSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .refine((val) => /[A-Z]/.test(val), {
      message: "Password must contain at least one uppercase letter.",
    })
    .refine((val) => /[a-z]/.test(val), {
      message: "Password must contain at least one lowercase letter.",
    })
    .refine((val) => /\d/.test(val), {
      message: "Password must contain at least one number.",
    })
    .refine((val) => /[@$!%*?&]/.test(val), {
      message: "Password must contain at least one special character.",
    }),
});

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loader, setLoader] = useState(false);
  const [remember, setRemember] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const loginUser = async (e: any) => {
    e.preventDefault();

    if (!integrations?.isAuthEnabled) {
      toast.error(messages.auth);
      return;
    }

    const result = SigninSchema.safeParse({ ...data });
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setLoader(true);
    toast.error("Authentication is disabled.");
    setLoader(false);
    return;
  };

  return (
    <>
      <section className="pb-17.5 pt-17.5 lg:pb-22.5 xl:pb-27.5">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="wow fadeInUp rounded-3xl bg-white/[0.05]">
            <div className="flex">
              <div className="hidden w-full lg:block lg:w-1/2">
                <div className="relative py-20 pl-17.5 pr-22">
                  <div className="absolute right-0 top-0 h-full w-[1px] bg-linear-to-b from-white/0 via-white/20 to-white/0"></div>
                  <h2 className="mb-10 max-w-[292px] text-heading-4 font-bold text-white">
                    Unlock the Power of Writing Tool
                  </h2>
                  <div className="relative aspect-61/50 w-full max-w-[427px]">
                    <Image src="/images/signin/sigin.svg" alt="signin" fill />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="py-8 pl-8 pr-8 sm:py-20 sm:pl-21 sm:pr-20">
                  <div>
                    <SocialSignup />
                    <span className="relative my-7.5 block text-center text-sm font-medium">
                      <span className="absolute left-0 top-1/2 block h-[1px] w-22.5 bg-white/[0.12]"></span>
                      <span className="absolute right-0 top-1/2 block h-[1px] w-22.5 bg-white/[0.12]"></span>
                      Or sign in with email
                    </span>
                    <SwitchOptions isPassword={isPassword} setIsPassword={setIsPassword} />
                    {!isPassword ? (
                      <MagicLink />
                    ) : (
                      <form onSubmit={loginUser}>
                        <div className="relative mb-4">
                          <span className="absolute left-6 top-1/2 -translate-y-1/2">
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.9998 0.399994H1.9998C1.1498 0.399994 0.424805 1.09999 0.424805 1.97499V10.075C0.424805 10.925 1.1248 11.65 1.9998 11.65H13.9998C14.8498 11.65 15.5748 10.95 15.5748 10.075V1.94999C15.5748 1.09999 14.8498 0.399994 13.9998 0.399994ZM13.9998 1.52499C14.0248 1.52499 14.0498 1.52499 14.0748 1.52499L7.9998 5.42499L1.9248 1.52499C1.9498 1.52499 1.9748 1.52499 1.9998 1.52499H13.9998ZM13.9998 10.475H1.9998C1.7498 10.475 1.5498 10.275 1.5498 10.025V2.62499L7.3998 6.37499C7.5748 6.49999 7.7748 6.54999 7.9748 6.54999C8.1748 6.54999 8.3748 6.49999 8.5498 6.37499L14.3998 2.62499V10.05C14.4498 10.3 14.2498 10.475 13.9998 10.475Z" fill="#918EA0" />
                            </svg>
                          </span>
                          <input
                            type="email"
                            placeholder="Enter your email"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            className="w-full rounded-lg border border-white/[0.12] bg-transparent py-3.5 pl-14.5 pr-4 font-medium text-white outline-hidden focus:border-purple focus-visible:shadow-none"
                          />
                        </div>
                        <div className="relative mb-4">
                          <input
                            type="password"
                            placeholder="Enter your password"
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            className="w-full rounded-lg border border-white/[0.12] bg-transparent py-3.5 px-4 font-medium text-white outline-hidden focus:border-purple focus-visible:shadow-none"
                          />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <label className="flex items-center gap-2 text-sm text-white">
                            <input
                              type="checkbox"
                              checked={remember}
                              onChange={() => setRemember(!remember)}
                              className="h-4 w-4 rounded border-white/[0.12] bg-transparent text-purple focus:ring-purple"
                            />
                            Remember me
                          </label>
                        </div>
                        <button type="submit" className="hero-button-gradient flex w-full items-center justify-center rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80">
                          Sign In {loader && <Loader />}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;

