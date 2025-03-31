"use client";
import { ShieldCheck } from "lucide-react"; // Importing the shield icon
import ProceedButton from "../../component/proceed";

export default function Verified() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm h-auto text-center">
        {/* Shield Icon */}
        <div className="flex justify-center mb-4">
          <ShieldCheck className="w-20 h-20 text-red-500 relative" />
          <div className="absolute mt-12 ml-12 bg-green-400 rounded-full p-1">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Verification Message */}
        <h2 className="text-xl font-bold">Verified!</h2>
        <p className="text-sm text-gray-600 mt-2">
          Your account has been verified successfully!
        </p>

        {/* Proceed Button */}
        <div className="mt-6">
          <ProceedButton />
        </div>
      </div>
    </div>
  );
}
