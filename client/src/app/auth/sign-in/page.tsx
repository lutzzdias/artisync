"use client";

import googleIcon from "@/assets/google-icon.svg";
import { OutlinedButton } from "@/components/buttons/OutlinedButton";
import { TextButton } from "@/components/buttons/TextButton";
import { TextField } from "@/components/input/TextField";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex flex-col gap-5">
      <TextField
        placeholder="E-mail"
        type="email"
        icon={<EnvelopeIcon className="h-4 w-4" />}
      />
      <TextField
        placeholder="Password"
        type="password"
        icon={<LockClosedIcon className="h-4 w-4" />}
      />
      <OutlinedButton
        onClick={() => {
          console.log("click");
        }}
      >
        <Image src={googleIcon} alt="" width={16} height={16} />
        Create article
      </OutlinedButton>

      <TextButton
        onClick={() => {
          console.log("click");
        }}
      >
        <Image src={googleIcon} alt="" width={16} height={16} />
        Create article
      </TextButton>
    </div>
  );
}
