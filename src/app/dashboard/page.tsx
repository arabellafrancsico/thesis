"use client";
import { useState, useEffect } from "react";
import Navbar from "../../component/navbar";
import { Gauge } from "lucide-react"; // Importing speedometer icon

export default function Dashboard() {
  const [time, setTime] = useState(new Date()); // State to hold the current time

  // Function to update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); // Update time every second
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to format the time in 12-hour format with AM/PM
  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const strSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${hours}:${strMinutes}:${strSeconds} ${ampm}`;
  };

  // Function to format the date as "April 2, 2025"
  const formatDate = (date: Date) => {
    // Define the options for the date format
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-4 gap-2 mt-3">
          {/* Speed Cards Container */}
          <div className="col-span-3 grid grid-cols-3 gap-2">
            {/* First Row - 3 Cards */}
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-md w-60 h-30">
                <Gauge className="w-6 h-6 text-black" />
                <h2 className="text-xl font-bold">75</h2>
                <p className="text-sm">Total Over Speeding</p>
              </div>
            ))}
            {/* Fourth Card - Below First Row */}
            <div className="col-span-1 bg-white p-4 rounded-md shadow-md w-60 h-30">
              <Gauge className="w-6 h-6 text-black" />
              <h2 className="text-xl font-bold">75</h2>
              <p className="text-sm">Total Over Speeding</p>
            </div>
          </div>

          {/* Right-Side Cards (Clock, Date, Empty Placeholder) */}
          <div className="flex flex-col gap-2">
            {/* Clock */}
            <div className="bg-white p-4 rounded-md shadow-md w-60 h-17">
              <h2 className="text-lg font-bold">{formatTime(time)}</h2>
            </div>
            {/* Date */}
            <div className="bg-white p-4 rounded-md shadow-md w-60 h-20">
              <h2 className="text-lg font-bold">{formatDate(time)}</h2>
              <p className="text-sm">{time.toLocaleString("en-US", { weekday: "long" })}</p>
            </div>
            {/* Empty Card Placeholder */}
            <div className="bg-white p-4 rounded-md shadow-md w-60 h-70"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
