import { optionLocations, optionTypesFlight } from "@/data/data";
import { z } from "zod"

const schema = z.object({
    flightNumber: z.string().min(1, { message: "Flight Number is required!" }),
    airline: z.string().min(1, { message: "Airline Name is required!" }),
    duration: z.number(),
    desc: z.string().min(1,{message: "Description required"}),
    type: z.enum(optionTypesFlight.map(({ value }) => value)),
    seats: z.number().min(1, { message: "Beds are required!" }),
    price: z.number().min(15, { message: "Price must be above $15!" }).max(50000, { message: "Price can't be above $50k!" }),
    departure: z.enum(optionLocations.map(({ value }) => value)),
    arrival: z.enum(optionLocations.map(({ value }) => value)),
    departureAt: z.string(),
    arrivalAt: z.string(),
})

export {
    schema
}