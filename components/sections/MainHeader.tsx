import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Car, MenuIcon } from "lucide-react";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b">
      <Link className="flex items-center justify-center" href="#">
        <Car className="h-8 w-8 text-orange-600" />
        <span className="ml-2 text-xl font-bold">DriveFlow</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden ml-auto  lg:flex gap-4 sm:gap-6">
        <Link
          className="text-sm my-auto font-medium hover:underline underline-offset-4"
          href="#features"
        >
          Features
        </Link>
      
        <Link
          className="text-sm my-auto font-medium hover:underline underline-offset-4"
          href="#pricing"
        >
          Pricing
        </Link>
        <Link
          className="text-sm my-auto font-medium hover:underline underline-offset-4"
          href="#contact"
        >
          Contact
        </Link>

        <Button
          asChild
          size="sm"
          className="outline outline-1 outline-orange-600
          bg-transparent text-orange-600 hover:bg-orange-600 hover:text-white"
        >
          <Link href="/login">Login</Link>
        </Button>
        <Button
          asChild
          size="sm"
          className="bg-orange-600 hover:bg-orange-700"
        >
          <Link href="/register">Try Free</Link>
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <div className="ml-auto lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle>
              <div className="flex items-center mb-6">
                <Car className="h-6 w-6 text-orange-600" />
                <span className="ml-2 text-lg font-bold">DriveFlow</span>
              </div>
            </SheetTitle>
            <div className="grid gap-4 py-6">
              <Link
                href="#features"
                className="flex w-full items-center py-2 text-lg font-semibold hover:text-orange-600 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="flex w-full items-center py-2 text-lg font-semibold hover:text-orange-600 transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="flex w-full items-center py-2 text-lg font-semibold hover:text-orange-600 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="flex w-full items-center py-2 text-lg font-semibold hover:text-orange-600 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="flex w-full items-center py-2 text-lg font-semibold hover:text-orange-600 transition-colors"
              >
                Login
              </Link>
              <Button
                asChild
                className="bg-orange-600 hover:bg-orange-700 mt-4"
              >
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
} 