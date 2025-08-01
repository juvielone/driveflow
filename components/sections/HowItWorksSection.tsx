export default function HowItWorksSection() {
  return (
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
  );
} 