import React from "react";
import UploadForm from "../components/UploadForm";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Visual Product Matcher</h1>
        <ThemeToggle />
      </div>

      <UploadForm />
    </div>
  );
}
