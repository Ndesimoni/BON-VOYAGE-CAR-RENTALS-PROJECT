import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

//create user
export async function createUser(userObj) {
  const { data, error } = await supabase
    .from("users")
    .insert([userObj])
    .select();

  if (error) throw new Error("unable to create user");
  return data;
}

// get all reservations for current user
export async function getUserReservations(userId) {
  const { data, error } = await supabase
    .from("signedInReservations")
    .select("*")
    .eq("reservationId", userId);

  if (error) throw new Error("unable to find user reservations");
  return data;
}

//post reservation for signed in users
export async function createReservation(reservationObj) {
  const { data, error } = await supabase
    .from("signedInReservations")
    .insert([reservationObj])
    .select();

  if (error) throw new Error("unable to make reservation");
  return data;
}

//post reservation for guest users
export async function createGuestReservation(reservationObj) {
  const { data, error } = await supabase
    .from("guestReservations")
    .insert([reservationObj])
    .select();

  if (error) throw new Error("unable to make reservation");
  return data;
}
