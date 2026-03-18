"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-full w-full focus:outline-none focus:shadow-outline"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}
