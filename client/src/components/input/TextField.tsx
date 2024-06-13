import { Field, Input } from "@headlessui/react";
import { HTMLInputTypeAttribute, ReactNode } from "react";

type TextFieldProps = {
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  icon?: ReactNode;
};

export function TextField(props: TextFieldProps) {
  const { placeholder, type, icon } = props;

  return (
    <Field className="relative rounded-md shadow-sm">
      {icon && (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {icon}
        </div>
      )}
      <Input
        placeholder={placeholder}
        type={type}
        className={`block w-full rounded-md px-4 py-2.5 shadow-sm ${icon && "pl-9"} text-black outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-200 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6`}
      />
    </Field>
  );
}
