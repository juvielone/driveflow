import Link from "next/link";
import { Car } from "lucide-react";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b">
      <Link className="flex items-center justify-center" href="/">
        <Car className="h-8 w-8 text-orange-600" />
        <span className="ml-2 text-xl font-bold">DriveFlow</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/register"
        >
          Register
        </Link>
      </nav>
    </header>
  );
} 