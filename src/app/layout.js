"use client"; // Needed for interactivity

import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true); // Sidebar state

  return (
    <html lang="en">
      <body className="flex h-screen">
        {/* Sidebar (Hidden on small screens, shown on desktop) */}
        <div className={`fixed h-full transition-all ${isOpen ? "w-80" : "w-0"} md:w-80`}>
          <Navbar />
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="absolute top-4 left-4 md:hidden bg-gray-800 text-white p-2 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        {/* Main Content Area */}
        <div className={`flex-1 transition-all ${isOpen ? "ml-80" : "ml-0"} md:ml-80`}>
          {children}
        </div>
      </body>
    </html>
  );
}
