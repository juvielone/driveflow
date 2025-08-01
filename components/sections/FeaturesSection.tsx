import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";

export default function FeaturesSectionX() {
  return (
    <section id="features" className="w-full py-10 md:py-16 lg:py-24">
      <div className="container px-4 m-auto md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Less Stress. More Teaching. Happier Students
            </h2>
            <p className="max-w-[900px] mx-auto  text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Powerful features designed to save you time and help you focus
              on what matters most - teaching safe driving.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 pt-14 lg:grid-cols-3 lg:gap-12">
          <Card className="flex flex-col h-full bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">     
            <CardHeader>
              <Calendar className="h-10 w-10 text-orange-600" />
              <CardTitle>Smart Scheduling</CardTitle>
              <CardDescription>
                Automated booking system that syncs with your calendar and
                prevents double bookings.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
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

          <Card className="flex flex-col h-full bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <Clock className="h-10 w-10 text-orange-600" />
              <CardTitle>Cancellation</CardTitle>
              <CardDescription>
                Handle cancellations and rescheduling with automated
                notifications and policies.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
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

          <Card className="flex flex-col h-full bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <Users className="h-10 w-10 text-orange-600" />
              <CardTitle>Student Management</CardTitle>
              <CardDescription>
                Keep track of student progress, lesson history, and
                important notes in one place.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
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
  );
} 