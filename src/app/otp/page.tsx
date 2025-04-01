"use client";
import CodeInput from "../../component/code";
import VerifyButton from "../../component/verify";

export default function OTPPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm h-auto space-y-4 text-left">
        <h2 className="text-xl font-bold mb-4">OTP Verification</h2>
        <p className="text-sm mt-4 text-gray-500 text-center">
          Enter the OTP sent to sam.cua@icloud.com
        </p>
        <CodeInput />
        <div className="mt-6">
          <VerifyButton />
        </div>
        <p className="text-sm mt-4 text-gray-500">
          Didn't receive code? <span className="text-black font-bold cursor-pointer">Resend OTP</span>
        </p>
      </div>
    </div>
  );
}