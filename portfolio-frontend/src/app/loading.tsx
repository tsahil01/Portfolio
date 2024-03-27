import React from 'react';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
      <div className="ml-4 text-xl font-semibold text-gray-800">Loading...</div>
    </div>
  );
}
