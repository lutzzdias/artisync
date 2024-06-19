"use client";

import { OutlinedButton } from "@/components/buttons/OutlinedButton";
import Image from "next/image";
import googleIcon from "@/assets/google-icon.svg";
import { TextField } from "@/components/input/TextField";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FilledButton } from "@/components/buttons/FilledButton";
import { useState } from "react";
import { signin } from "@/actions/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => await signin(email, password);

  return (
    <div className="flex h-full flex-1 items-center justify-center gap-8">
      <div className="flex max-w-2xl flex-col gap-4">
        <h1 className="text-center text-5xl font-semibold">
          Sign in to manage your articles
        </h1>
        <div className="relative h-24 w-full rounded-lg">
          <Image
            src="https://media.istockphoto.com/id/1205354589/vector/scientists-women-or-laboratory-employees-flat-vector-illustration-isolated.jpg?s=612x612&w=0&k=20&c=9U9f4z_SK5wW80z8pmnbFPXu_e-26PCalcXMbTa7gU0%3D"
            alt="scientists doing research"
            sizes="100%"
            fill
          />
        </div>
      </div>

      <div className="flex w-full max-w-[420px] flex-col gap-6 rounded-lg px-6 py-8 shadow-2xl">
        <OutlinedButton onClick={() => {}}>
          <Image src={googleIcon} alt="google logo" width={16} height={16} />{" "}
          Sign in with Google
        </OutlinedButton>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-b border-gray-100/50"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-sm text-gray-300">or</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="E-mail"
            icon={<EnvelopeIcon width={16} height={16} />}
          />
          <TextField
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            icon={<LockClosedIcon width={16} height={16} />}
          />
          <Link
            href="/auth/forgot-password"
            className="text-xs font-semibold text-purple-500"
          >
            Forgot my password
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <FilledButton onClick={handleSubmit}>Sign in</FilledButton>

          <div className="text-xs text-gray-300">
            Don{"'"}t have an account?{" "}
            <Link
              href="/auth/register"
              className="font-semibold text-purple-500"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
