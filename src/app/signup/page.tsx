"use client";
import Form1 from "../../component/form1";
import Form2 from "../../component/form2";
import SignupButton from "../../component/signup";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md h-auto space-y-4">
        <h2 className="text-xl font-bold">Sign up</h2>

        <div className="space-y-2">
          <label className="block text-sm">Email or mobile number</label>
          <Form1 />
        </div>

        <div className="space-y-2">
          <label className="block text-sm">Your password</label>
          <Form2 />
        </div>
        <p className="text-sm mt-4 text-gray-500">
          Already have an account? <span className="text-black font-bold cursor-pointer">Sign in</span>
        </p>

        <SignupButton />
      </div>
    </div>
  );
}
