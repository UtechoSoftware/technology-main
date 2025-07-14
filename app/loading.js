import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <svg
        className="animate-spin h-10 w-10 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.372 0 0 5.372 0 12h4z"
        />
      </svg>
    </div>
  );
}
