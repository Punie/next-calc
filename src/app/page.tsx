'use client';

import { TbCalculator } from 'react-icons/tb';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-4xl m-auto p-6">
      <h1 className="text-5xl font-bold mb-8">Calculator app</h1>
      <ul className="uppercase">
        <li className="flex items-center gap-2 hover:text-pink-500 hover:underline">
          <TbCalculator />
          <Link href="/calculator">calculator</Link>
        </li>
      </ul>
    </main>
  );
}
