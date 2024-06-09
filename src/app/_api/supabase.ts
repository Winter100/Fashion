import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sdyfujwfykmydszxtqvv.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
