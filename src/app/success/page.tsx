"use client";
import { CheckCircle } from "lucide-react"; // Importing the checkmark icon
import ContinueButton from "../../component/continue";

export default function Verified() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm h-auto text-center">
      <h2 className="text-xl font-bold">Verified!</h2>
        {/* Checkmark Icon */}
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>

        {/* Verification Message */}
        <p className="text-sm text-gray-600 mt-2">
          Your account has been created!
        </p>

        {/* Continue Button */}
        <div className="mt-6">
          <ContinueButton />
        </div>
      </div>
    </div>
  );
}
