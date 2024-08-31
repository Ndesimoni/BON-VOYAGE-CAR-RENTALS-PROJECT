import { createClient } from "@supabase/supabase-js";

//go to ur .env file and add these VITE_SUPABASE_URL and VITE_SUPABASE_KEY.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getAllGuestReservations() {
  const { data, error } = await supabase.from("guestReservations").select("*");

  if (error) throw new Error("unable to find user reservations");
  return data;
}
