/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";

export default function Logo() {
  return (
    <Link className="flex select-none items-center space-x-1" href="/">
      <img src="/logo.png" alt="logo" className="h-8" />
    </Link>
  );
}
