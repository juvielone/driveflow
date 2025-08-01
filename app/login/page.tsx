"use client";
import Header from "@/components/sections/Header";
import LoginForm from "@/components/sections/LoginForm";
import Benefits from "@/components/sections/Benefits";
import Footer from "@/components/sections/Footer";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-md space-y-6">
            <LoginForm />
            <Benefits />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 