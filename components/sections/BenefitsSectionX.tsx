import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container m-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <Badge variant="outline" className="w-fit bg-white text-black">
              For Instructors
            </Badge>
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
            <Badge variant="outline" className="w-fit bg-white text-black">
              For Students
            </Badge>
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
  );
} 