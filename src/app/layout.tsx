'use client';

import { TbCalculator, TbMoon, TbSun } from 'react-icons/tb';
import Link from 'next/link';

import { useDarkMode } from '../hooks/useDarkMode';

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <html lang="en">
      <head>
        <title>Calculator</title>
        <meta name="description" content="My little calculator" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
        <header className="max-w-4xl m-auto p-4 flex justify-between items-center">
          <Link href="/" className="text-4xl font-bold uppercase">
            calc
          </Link>

          <nav>
            <ul className="text-xl flex items-center gap-6">
              <li>
                <Link
                  href="/calculator"
                  className="flex items-center gap-2 hover:text-green-500 dark:hover:text-pink-500 hover:underline"
                >
                  <TbCalculator />
                  Calculator
                </Link>
              </li>
              <li className="hover:text-green-700 dark:hover:text-pink-500">
                {theme === 'light' ? (
                  <TbMoon onClick={toggleTheme} />
                ) : (
                  <TbSun onClick={toggleTheme} />
                )}
              </li>
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
