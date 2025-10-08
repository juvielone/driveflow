import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full h-fit py-12 md:py-24 lg:py-28 xl:py-14 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container px-4 md:px-6 m-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-1 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge variant="outline" className="w-fit bg-white text-black">
                For Driving Instructors
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                Streamline Your Driving Lessons with Smart Scheduling
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Manage your availability, handle bookings, and reduce
                cancellations with our all-in-one platform designed specifically
                for driving instructors and their students.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
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
  );
}
