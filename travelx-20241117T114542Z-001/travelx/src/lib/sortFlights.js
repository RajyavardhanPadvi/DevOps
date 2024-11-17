export function calcAndSortFlights(flights) {

    const sortedFlights = flights.map((flight) => {
        if (flight.reviews.length === 0) return { ...flight, avgRating: 0 }

        const avgRating = flight.reviews.reduce((a, b) => {
            return a + b.stars
        }, 0) / flight.reviews.length

        return { ...flight, avgRating: Number(avgRating.toFixed(2)) }
    }).sort((a, b) => b.avgRating - a.avgRating)

    return sortedFlights
}