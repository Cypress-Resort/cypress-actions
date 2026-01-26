"use client"
import React from 'react';
import Image from "next/image";

export default function Home() {
   const repoUrl = 'https://github.com/Cypress-Resort/cypress-actions';

   const handleOpenReadme = () => {
    window.open(`${repoUrl}/blob/main/README.md`, '_blank'); // Opens README.md in a new tab
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/logo.jpg"
          alt="Cypress logo"
          width={100}
          height={100}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Cypress Resort Action Log
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Consolidated set of actions for Cypress partners and employees
           
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
           <button
              onClick={handleOpenReadme}
              className="bg-emerald-500 text-white font-bold py-2 px-4 rounded hover:bg-emerald-600 animate-pulse"
            >
              Actions
            </button>
        </div>
      </main>
    </div>
  );
}
