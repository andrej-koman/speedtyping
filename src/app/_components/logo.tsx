'use client';
import Image from "next/image";

export default function Logo() {

    function handleClick() {
        window.location.href = "/";
    }

    return (
        <div className="flex items-center cursor-pointer select-none" onClick={handleClick}>
            <div className="drop-shadow-sm shadow-black relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full">
                <Image src="/logo.png" alt="logo" width={40} height={40} />
            </div>
            <span className="bussiness-name font-bold ms-3">hitrostno tipkanje</span>
        </div>
    );
};