import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Calendar,
  Clock,
  Users,
  CheckCircle,
  Car,
  MenuIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DrivingInstructorLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Car className="h-8 w-8 text-orange-600" />
          <span className="ml-2 text-xl font-bold">DriveFlow</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden ml-auto lg:flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/login"
          >
            Login
          </Link>
          <Button
            asChild
            size="sm"
            className="bg-orange-600 hover:bg-orange-700"
          >
            <Link href="/register">Get Started</Link>
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-28 xl:py-14 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container px-4 md:px-6 m-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    For Driving Instructors
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your Driving Lessons with Smart Scheduling
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Manage your availability, handle bookings, and reduce
                    cancellations with our all-in-one platform designed
                    specifically for driving instructors and their students.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    Start Free Trial
                  </Button>
                  <Button variant="outline" size="lg">
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>No setup fees</span>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center group pt-10">
                <Image
                  alt="Driving instructor dashboard"
                  className="mx-auto my-auto translate-x-20 -translate-y-8 lg:translate-x-16 lg:-translate-y-20 w-40
                  inset-0 scale-90 z-0 lg:absolute lg:transition-all duration-300 lg:w-1/2 lg:group-hover:translate-x-0 lg:group-hover:-translate-y-0"
                  height="300"
                  src="/learner-plate.png"
                  width="300"
                />

                <Image
                  alt="Driving instructor dashboard"
                  className="mx-auto my-auto -translate-x-10 lg:-translate-x-1 lg:-translate-y-1 w-40
                  inset-0 z-10 lg:transition-all duration-300 lg:w-1/2 lg:absolute lg:group-hover:-translate-x-0 lg:group-hover:-translate-y-0"
                  height="300"
                  src="/learner-plate.png"
                  width="300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 m-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need to Manage Your Driving School
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Powerful features designed to save you time and help you focus
                  on what matters most - teaching safe driving.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Calendar className="h-10 w-10 text-orange-600" />
                  <CardTitle>Smart Scheduling</CardTitle>
                  <CardDescription>
                    Automated booking system that syncs with your calendar and
                    prevents double bookings.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Real-time availability updates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Recurring lesson scheduling
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Calendar integration
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-orange-600" />
                  <CardTitle>Cancellation Management</CardTitle>
                  <CardDescription>
                    Handle cancellations and rescheduling with automated
                    notifications and policies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Automated cancellation policies
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Instant notifications
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Easy rescheduling
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-orange-600" />
                  <CardTitle>Student Management</CardTitle>
                  <CardDescription>
                    Keep track of student progress, lesson history, and
                    important notes in one place.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Progress tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Lesson notes & feedback
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Payment tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container m-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <Badge variant="secondary">For Instructors</Badge>
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Save Time, Reduce No-Shows, Increase Revenue
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Automated Reminders:</strong> Reduce no-shows by
                      up to 70% with SMS and email reminders
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Flexible Scheduling:</strong> Set your
                      availability once and let students book automatically
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Payment Integration:</strong> Collect payments
                      online and track outstanding balances
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <Badge variant="secondary">For Students</Badge>
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Book Lessons Anytime, Anywhere
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>24/7 Booking:</strong> Schedule lessons online at
                      your convenience
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Easy Rescheduling:</strong> Change or cancel
                      lessons with just a few clicks
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Progress Tracking:</strong> View your lesson
                      history and track your progress
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container m-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get Started in Minutes
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simple setup process to get your driving school online and
                  accepting bookings.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Set Your Availability</h3>
                <p className="text-muted-foreground">
                  Configure your working hours, break times, and lesson
                  durations in just a few clicks.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Share Your Booking Link</h3>
                <p className="text-muted-foreground">
                  Send your personalized booking link to students or embed it on
                  your website.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Start Teaching</h3>
                <p className="text-muted-foreground">
                  Students book lessons automatically, and you receive instant
                  notifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-600 text-white">
          <div className="container m-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Driving School?
                </h2>
                <p className="mx-auto max-w-[600px] text-orange-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join hundreds of driving instructors who have streamlined
                  their business with DriveSchedule.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    className="max-w-lg flex-1 bg-white text-black"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    className="bg-white text-orange-600 hover:bg-gray-100"
                  >
                    Start Free Trial
                  </Button>
                </form>
                <p className="text-xs text-orange-100">
                  14-day free trial. No credit card required.{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex items-center gap-2">
          <Car className="h-6 w-6 text-orange-600" />
          <span className="text-sm font-medium">DriveSchedule</span>
        </div>
        <p className="text-xs text-muted-foreground sm:ml-4">
          © 2024 DriveSchedule. All rights reserved.
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
    </div>
  );
}
