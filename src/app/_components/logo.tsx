/* eslint-disable @next/next/no-img-element */
'use client';
import Link from "next/link";

export default function Logo() {
    return (
        <Link className="flex items-center space-x-1 select-none" href="/">
            <img src="/logo.png" alt="logo" className="h-8" />
            <span className="text-sm font-bold">hitrostnotipkanje</span>
        </Link>
    );
};