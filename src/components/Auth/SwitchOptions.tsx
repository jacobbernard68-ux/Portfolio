import React from "react";

const SwitchOptions = ({
  isPassword,
  setIsPassword,
}: {
  isPassword: boolean;
  setIsPassword: (value: boolean) => void;
}) => {
  return (
    <div className="mx-auto mb-12.5 mt-9 flex flex-col items-center justify-center gap-2.5 rounded-lg border border-[#2f3e5c]/15 bg-[#f7f9fc] p-2 md:flex-row">
      <button
        className={`w-full rounded-lg px-6 py-3 text-base text-[#334155] outline-hidden transition-all duration-300 hover:bg-[#b7c5dd]/50 hover:text-[#111]
        ${!isPassword ? "bg-[#b7c5dd]/60 text-[#111]" : "bg-transparent"}`}
        onClick={() => setIsPassword(false)}
      >
        Magic Link
      </button>
      <button
        className={`w-full rounded-lg px-6 py-3 text-base text-[#334155] outline-hidden transition-all duration-300 hover:bg-[#b7c5dd]/50 hover:text-[#111] ${
          isPassword
            ? "bg-[#b7c5dd]/60 text-[#111]"
            : "bg-transparent"
        }`}
        onClick={() => setIsPassword(true)}
      >
        Password
      </button>
    </div>
  );
};

export default SwitchOptions;
