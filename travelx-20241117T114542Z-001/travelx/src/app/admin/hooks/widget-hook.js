import { useQueries } from "@tanstack/react-query";
import { getMostReservedListings } from "../modals/create-modal/service"
import {
    getAllFlights,
    getAllItineraries,
    getAllListings,
    getAllReservations,
    getAllRevenue,
    getAllUsers
} from "../services/service"

export const useWidgetHook = () => {
    const [
        usersQuery,
        listingsQuery,
        reservationsQuery,
        revenueQuery,
        flightQuery,
        itineraryQuery,
        mostReservedQuery
    ] = useQueries({
        queries: [
            {
                queryFn: getAllUsers,
                queryKey: ["admin", "users"]
            },
            {
                queryFn: getAllListings,
                queryKey: ["admin", "listings"]
            },
            {
                queryFn: getAllReservations,
                queryKey: ["admin", "reservations"]
            },
            {
                queryFn: getAllRevenue,
                queryKey: ["admin", "revenue"]
            },
            {
                queryFn: getAllFlights,
                queryKey: ["admin", "flights"]
            },
            {
                queryFn: getAllItineraries,
                queryKey: ["admin", "itineraries"]
            },
            {
                queryFn: getMostReservedListings,
                queryKey: ["admin", "most-reserved-listing"]
            },
        ]
    })

    return [
        usersQuery,
        listingsQuery,
        reservationsQuery,
        revenueQuery,
        flightQuery,
        itineraryQuery,
        mostReservedQuery
    ]
}