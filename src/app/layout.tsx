import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-blue-800">

        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg p-6">
          <h2 className="text-xl font-bold mb-8 text-blue-600">
            Intelli-ClassHub
          </h2>

          <nav className="flex flex-col gap-4">
            <Link href="/" className="hover:text-blue-600">
              Dashboard
            </Link>

            <Link href="/ask" className="hover:text-blue-600">
              Ask AI
            </Link>

            <Link href="/profile" className="hover:text-blue-600">
              Profile
            </Link>
          </nav>
        </div>

        {/* Page Content */}
        <div className="flex-1 p-10">
          {children}
        </div>

      </body>
    </html>
  );
}