"use client"
import React from 'react';
import Image from "next/image";

export default function Home() {
  const repoUrl = 'https://github.com/Cypress-Resort/cypress-actions';

  const items = [
    {
      name: 'ChangeLog for Website',
      description: 'the set of actions and assignments for managing the commercial site',
      path: 'blob/main/CHANGELOG_SITE.md',
    },
    {
      name: 'Build Plan - CMS',
      description: 'the set of actions for building out quest services and administration function for our guests.',
      path: 'blob/main/DEVELOPMENT_PLAN_CMS.md',
    },
    {
      name: 'ChangeLog for CMS',
      description: 'realtime actions and status for building and testing the CMS',
      path: 'blob/main/CHANGELOG_CMS.md',
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-16 px-4 bg-white dark:bg-black sm:items-start sm:py-32 sm:px-16">
        <Image
          className="dark:invert"
          src="/logo.jpg"
          alt="Cypress logo"
          width={100}
          height={100}
          priority
        />
        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Cypress Resort Action Log
          </h1>
          <p className="max-w-md text-base leading-8 text-zinc-600 dark:text-zinc-400">
            Consolidated set of actions for Cypress partners and employees
          </p>
        </div>
        <div className="w-full mt-8">
          {/* Mobile view: Stacked cards */}
          <div className="flex flex-col gap-4 sm:hidden">
            {items.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                <h3 className="text-sm font-medium text-gray-900 dark:text-zinc-50 truncate">{item.name}</h3>
                <p className="mt-2 text-xs text-gray-500 dark:text-zinc-400 truncate">{item.description}</p>
                <button
                  onClick={() => window.open(`${repoUrl}/${item.path}`, '_blank')}
                  className="mt-4 bg-emerald-500 text-white font-bold py-1 px-3 rounded hover:bg-emerald-600 shadow-md shadow-emerald-500/50 animate-pulse transition-all duration-300 text-xs w-full"
                >
                  View
                </button>
              </div>
            ))}
          </div>

          {/* Desktop view: Table */}
          <table className="hidden sm:table min-w-full divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-black rounded-lg shadow-md table-fixed">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Name</th>
                <th className="w-1/2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Description</th>
                <th className="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {items.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900 dark:text-zinc-50 truncate">{item.name}</td>
                  <td className="px-6 py-4 text-xs text-gray-500 dark:text-zinc-400">{item.description}</td>
                  <td className="px-6 py-4 text-xs">
                    <button
                      onClick={() => window.open(`${repoUrl}/${item.path}`, '_blank')}
                      className="bg-emerald-500 text-white font-bold py-2 px-4 rounded hover:bg-emerald-600 shadow-md shadow-emerald-500/50 animate-pulse transition-all duration-300"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}