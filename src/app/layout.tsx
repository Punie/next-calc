import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Calculator</title>
        <meta name="description" content="My little calculator" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="min-h-screen bg-gray-900 text-gray-50">{children}</body>
    </html>
  );
}
