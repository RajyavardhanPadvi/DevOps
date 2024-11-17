import { itineraryDaysOptions, itineraryOptions, optionLocations } from "@/data/data";
import { z } from "zod"

const schema = z.object({
    city: z.enum(optionLocations.map(({ value }) => value)),
    daysType: z.enum(itineraryDaysOptions.map(({ value }) => value)),
    budgetType: z.enum(itineraryOptions.map(({ value }) => value)),
})

export {
    schema
}