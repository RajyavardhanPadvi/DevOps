import AXIOS_API from "@/utils/axiosAPI";

export async function getBestFlights() {
    const { data } = await AXIOS_API.get('/flight/best-flights')

    if (data) {
        const blurredImages = await Promise.all(
            data.map((listing) => AXIOS_API.get(`/base64?url=${listing.imageUrls[0]}`))
        )

        const bestFlights = blurredImages.map((img, idx) => {
            const blurredImage = img.data
            const currentFlight = data[idx]

            return { ...currentFlight, blurredImage }
        })

        return bestFlights
    }
}