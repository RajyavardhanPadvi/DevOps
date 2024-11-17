import AXIOS_API from "@/utils/axiosAPI";

export async function getItinerary(values) {
const url = `/itinerary/filter?city=${values.city}&budgetType=${values.budgetType}&daysType=${values.daysType}`;
try {
  const { data } = await AXIOS_API.get(url);
  return { data };
} catch (error) {
  console.error("Error fetching itinerary:", error);
  throw error; // or handle the error accordingly
}
}