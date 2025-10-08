import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
  // Fetch Supabase project info (just a test call)
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    return NextResponse.json({ connected: false, error: error.message });
  }

  return NextResponse.json({
    connected: true,
    message: "Supabase connected successfully!",
  });
}
