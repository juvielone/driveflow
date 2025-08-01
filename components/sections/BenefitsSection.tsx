import React from 'react'
import { CheckCircle, Users, BookOpen, Clock, CreditCard, Calendar, BarChart3, Smartphone } from "lucide-react";
export default function BenefitsSection() {
    const instructorFeatures = [
        {
          icon: <Smartphone className="w-5 h-5" />,
          title: "Automated Reminders",
          description: "Reduce no-shows by up to 70% with SMS and email reminders"
        },
        {
          icon: <Calendar className="w-5 h-5" />,
          title: "Flexible Scheduling",
          description: "Set your availability once and let students book automatically"
        },
        {
          icon: <CreditCard className="w-5 h-5" />,
          title: "Payment Integration",
          description: "Collect payments online and track outstanding balances"
        }
      ];

      const studentFeatures = [
        {
          icon: <Clock className="w-5 h-5" />,
          title: "24/7 Booking",
          description: "Schedule lessons online at your convenience"
        },
        {
          icon: <BookOpen className="w-5 h-5" />,
          title: "Easy Rescheduling",
          description: "Change or cancel lessons with just a few clicks"
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Progress Tracking",
          description: "View your lesson history and track your progress"
        }
      ];
  return (
    <section className="w-full py-10 md:py-16 lg:py-24">
    <div className="container px-4 m-auto md:px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Instructors Section */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary border border-primary">
              <Users className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">For Instructors</span>
            </div>
            
            <h2 className="sm:h-20 text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Save Time. Teach More. 
              <span className="bg-gradient-to-r from-instructor-primary to-instructor-secondary bg-clip-text text-primary">
                {" "}Increase Revenue
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {instructorFeatures.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Students Section */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary border border-primary/20">
              <BookOpen className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">For Students</span>
            </div>
            
            <h2 className="sm:h-20 text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Book Lessons 
              <span className="bg-primary bg-clip-text text-primary">
                {" "}Anytime, Anywhere
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {studentFeatures.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-student-primary/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
