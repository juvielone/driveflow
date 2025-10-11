import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("🧪 Testing Supabase connection...");

    // Test 1: Check auth connection
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();
    console.log("Auth test result:", { user: !!user, error: authError });

    // Test 2: Check database connection
    const { data: profiles, error: dbError } = await supabase
      .from("profiles")
      .select("count", { count: "exact" })
      .limit(1);

    console.log("Database test result:", { count: profiles, error: dbError });

    return NextResponse.json({
      success: true,
      tests: {
        auth: { connected: !authError, error: authError },
        database: { connected: !dbError, error: dbError, count: profiles },
      },
    });
  } catch (error) {
    console.error("Supabase test failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

