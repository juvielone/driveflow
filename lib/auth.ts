import { supabase } from "./supabaseClient";
import type { Database } from "@/types/supabase";

export type AuthUser = {
  id: string;
  email: string;
  profile?: Database["public"]["Tables"]["profiles"]["Row"];
};

export class AuthService {
  static async getCurrentUser(): Promise<{
    user: AuthUser | null;
    error: any;
  }> {
    try {
      const {
        data: { user: authUser },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !authUser) {
        return { user: null, error: authError };
      }

      // Get user profile
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", authUser.id)
        .single();

      const user: AuthUser = {
        id: authUser.id,
        email: authUser.email!,
        profile: profile || undefined,
      };

      return { user, error: profileError };
    } catch (error) {
      return { user: null, error };
    }
  }

  static async login({ email, password }: { email: string; password: string }) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error || !data.user) {
        return { user: null, error };
      }

      // Get user profile
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", data.user.id)
        .single();

      const user: AuthUser = {
        id: data.user.id,
        email: data.user.email!,
        profile: profile || undefined,
      };

      return { user, error: profileError };
    } catch (error) {
      return { user: null, error };
    }
  }

  static async register(data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    drivingSchool: string;
    licenseNumber: string;
  }) {
    console.log("🚀 Starting registration process...");
    console.log("📧 Email:", data.email);
    console.log("👤 Name:", data.firstName, data.lastName);

    try {
      console.log("⏳ Step 1: Creating auth user...");
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (authError || !authData.user) {
        console.error("❌ Auth signup failed:", authError);
        return { user: null, error: authError };
      }

      console.log("✅ Auth user created successfully:", authData.user.id);
      console.log("📧 User email confirmed:", authData.user.email_confirmed_at);

      // Wait a moment to ensure auth is fully processed
      console.log("⏳ Waiting 1 second for auth to settle...");
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Create user profile with proper typing
      const profileData = {
        user_id: authData.user.id,
        first_name: data.firstName,
        last_name: data.lastName,
        phone: data.phone,
        driving_school: data.drivingSchool,
        license_number: data.licenseNumber,
      };

      console.log("⏳ Step 2: Creating profile with data:", profileData);
      console.log("🔍 Current auth session:", await supabase.auth.getSession());

      const profileStartTime = Date.now();
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .insert(profileData as any)
        .select()
        .single();

      const profileEndTime = Date.now();
      console.log(
        `⏱️ Profile creation took: ${profileEndTime - profileStartTime}ms`
      );

      if (profileError) {
        console.error("❌ Profile creation failed:", profileError);
        console.error("🔍 Error details:", {
          message: profileError.message,
          details: profileError.details,
          hint: profileError.hint,
          code: profileError.code,
        });
        return { user: null, error: profileError };
      }

      console.log("✅ Profile created successfully:", profile);

      const user: AuthUser = {
        id: authData.user.id,
        email: authData.user.email!,
        profile,
      };

      console.log("🎉 Registration completed successfully!");
      return { user, error: null };
    } catch (error) {
      console.error("💥 Registration catch block error:", error);
      return { user: null, error };
    }
  }

  static async logout() {
    try {
      const { error } = await supabase.auth.signOut();
      return { error };
    } catch (error) {
      return { error };
    }
  }

  static onAuthStateChange(callback: (user: AuthUser | null) => void) {
    return supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        // Get user profile
        const { data: profile } = await supabase
          .from("profiles")
          .select("*")
          .eq("user_id", session.user.id)
          .single();

        const user: AuthUser = {
          id: session.user.id,
          email: session.user.email!,
          profile: profile || undefined,
        };

        callback(user);
      } else {
        callback(null);
      }
    });
  }
}
