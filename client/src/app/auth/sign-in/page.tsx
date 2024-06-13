import { TextField } from "@/components/input/TextField";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

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
    </div>
  );
}
