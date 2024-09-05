import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

//USER//////////////
//create user
export async function createUser(userObj) {
  const { data, error } = await supabase
    .from("users")
    .insert([userObj])
    .select();

  if (error) throw new Error("unable to create user");
  return data;
}

//get single user
export async function getUser(email) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email);

  if (error) throw new Error("unable to find user ");
  return data;
}

// get all reservations for current user
export async function getUserReservations(userId) {
  const { data, error } = await supabase
    .from("userReservations")
    .select("*")
    .eq("reservationId", userId);

  if (error) throw new Error("unable to find user reservations");
  return data;
}

function createReservationObj(obj) {
  const {
    dropOffDate,
    name: carType,
    reservationId,
    pickUpDate,
    price,
    pickUpLocation,
    dropOffLocation,
    stateOfOperation,
  } = obj;

  //converting dates to the format supported by our database
  const pick = new Date(pickUpDate).toDateString();
  const drop = new Date(dropOffDate).toDateString();

  return {
    dropOffDate: drop,
    carType,
    reservationId: +reservationId || null,
    pickUpDate: pick,
    price: Number(price),
    pickUpLocation,
    dropOffLocation,
    stateOfOperation,
  };
}

//post reservation for signed in users
export async function createReservation(reservationObj) {
  //refactoring the reservationObj to createReservationObj to keep our code clean
  const dataObj = createReservationObj(reservationObj);

  const { data, error } = await supabase
    .from("userReservations")
    .insert([dataObj])
    .select("*");

  if (error) throw new Error("unable to make reservation");
  return data;
}
