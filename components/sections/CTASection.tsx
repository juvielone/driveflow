import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function CTASection() {
  return (
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
  );
} 