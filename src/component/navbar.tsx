"use client";
import Link from "next/link";
import { User } from "lucide-react"; // Importing profile icon

export default function Navbar() {
  return (
    <nav className="bg-[#1D1E42] text-white p-4 flex justify-end items-center">
      <div className="flex space-x-12">
        <Link href="/reports" className="hover:text-gray-300">Reports</Link>
        <Link href="/streaming" className="hover:text-gray-300">Streaming</Link>
        <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
        <Link href="/settings" className="hover:text-gray-300">Settings</Link>
        <Link href="/profile" className="hover:text-gray-300">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white transition duration-200 hover:bg-gray-300">
            <User className="w-5 h-5 text-[#1D1E42] transition duration-200 hover:text-[#0F0F2D]" />
          </div>
        </Link>
      </div>
    </nav>
  );
}
