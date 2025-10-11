// types/supabase.ts

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          created_at: string;
          first_name: string;
          last_name: string;
          phone: string;
          driving_school: string;
          license_number: string;
          user_id: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          first_name: string;
          last_name: string;
          phone: string;
          driving_school: string;
          license_number: string;
          user_id: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          first_name?: string;
          last_name?: string;
          phone?: string;
          driving_school?: string;
          license_number?: string;
          user_id?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
};
