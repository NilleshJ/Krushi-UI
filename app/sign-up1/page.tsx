"use client";

import React from "react";
   

export default function SignUp() {
  return (
    <div className="flex flex-col items-center h-screen justify-between px-4">
      {/* Header Section */}
      <div className="flex items-center justify-between w-full max-w-xs mt-6">
        <div className="text-3xl w-32 h-9 font-bold mt-10">Monitor</div>
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          {/* Placeholder for User Icon */}
          <img
            src="profile.png" 
            alt="User Icon"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>

     

      {/* Footer Navigation */}
      <div className="flex justify-between w-full max-w-xs mt-auto mb-4">
        {/* Monitor Icon */}
        <div className="flex flex-col items-center">
          <img
            src="monitor1.png" 
            alt="Monitor Icon"
            className="w-6 h-6"
          />
          <div className="text-sm text-blue-500">Monitor</div>
        </div>

        {/* Sign Up Icon */}
        <div className="flex flex-col items-center">
          <img
            src="signupp.png" 
            alt="Sign Up Icon"
            className="w-6 h-6"
          />
          <div className="text-sm text-gray-500">SignUp</div>
        </div>
      </div>
    </div>
  );
}
