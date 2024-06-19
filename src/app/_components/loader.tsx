import { cn } from "~/lib/utils";

export default function Loader({ isList = false }: { isList?: boolean }) {
  return (
    <div
      className={cn(
        "absolute left-0 top-0 flex w-full items-center justify-center text-white",
        isList ? "h-[calc(100vh-5rem)]" : "h-full",
      )}
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className="spinner_LWk7"
          x="1.5"
          y="1.5"
          rx="1"
          width="9"
          height="9"
        />
        <rect
          className="spinner_yOMU"
          x="13.5"
          y="1.5"
          rx="1"
          width="9"
          height="9"
        />
        <rect
          className="spinner_KS4S"
          x="13.5"
          y="13.5"
          rx="1"
          width="9"
          height="9"
        />
        <rect
          className="spinner_zVee"
          x="1.5"
          y="13.5"
          rx="1"
          width="9"
          height="9"
        />
      </svg>
    </div>
  );
}
