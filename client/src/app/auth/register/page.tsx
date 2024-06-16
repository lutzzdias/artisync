"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeftIcon,
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Checkbox, Field, Label } from "@headlessui/react";
import { TextField } from "@/components/input/TextField";
import { FilledButton } from "@/components/buttons/FilledButton";
import { useApi } from "@/hooks";

export default function Login() {
  const api = useApi("/auth");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = async () => {
    // TODO: save tokens (jwt and refresh) and integrate them with axios
    await api.post({ username, email, password }, "/register");
  };

  return (
    <div className="flex h-full flex-1 items-center justify-center gap-8">
      <div className="flex w-full max-w-[420px] flex-col gap-6 rounded-lg px-6 py-8 shadow-2xl">
        <h3 className="text-3xl font-semibold text-gray-500">
          Create an account
        </h3>

        <div className="flex flex-col gap-3">
          <TextField
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            placeholder="Username"
            icon={<UserIcon width={16} height={16} />}
          />
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
          <Field className="flex items-center gap-2">
            <Checkbox
              checked={checked}
              onChange={setChecked}
              className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
            >
              <svg
                className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3 8L6 11L11 3.5"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Checkbox>
            <Label className="text-xs text-gray-300">
              Agree to the{" "}
              <Link href="" className="font-semibold text-purple-500">
                terms of service
              </Link>{" "}
              and{" "}
              <Link href="" className="font-semibold text-purple-500">
                privacy agreement
              </Link>
            </Label>
          </Field>
        </div>

        <FilledButton onClick={handleSubmit}>Register</FilledButton>
      </div>

      <div className="flex max-w-2xl flex-col gap-6">
        <div className="relative h-24 w-full rounded-lg">
          <Image
            src="https://media.istockphoto.com/id/1205354589/vector/scientists-women-or-laboratory-employees-flat-vector-illustration-isolated.jpg?s=612x612&w=0&k=20&c=9U9f4z_SK5wW80z8pmnbFPXu_e-26PCalcXMbTa7gU0%3D"
            alt="scientists doing research"
            className="object-fill"
            sizes="100%"
            fill
          />
        </div>
        <h1 className="text-left text-5xl font-semibold">
          Supercharge your research experience with cutting-edge article
          management technology.
        </h1>

        <Link
          href="/auth/sign-in"
          className="flex gap-1 text-xs font-semibold text-purple-500"
        >
          <ArrowLeftIcon width={16} height={16} />
          Go back to sign in
        </Link>
      </div>
    </div>
  );
}
