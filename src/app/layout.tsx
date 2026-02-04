import './globals.css';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>

      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

export const metadata = {};
