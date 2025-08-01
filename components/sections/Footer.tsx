import Link from "next/link";
import { Car } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <div className="flex items-center gap-2">
        <Car className="h-6 w-6 text-orange-600" />
        <span className="text-sm font-medium">DriveFlow</span>
      </div>
      <p className="text-xs text-muted-foreground sm:ml-4">
        © 2024 DriveFlow. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy Policy
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Support
        </Link>
      </nav>
    </footer>
  );
} 