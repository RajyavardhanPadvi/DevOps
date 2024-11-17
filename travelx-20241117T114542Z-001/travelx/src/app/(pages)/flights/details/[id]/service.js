import AXIOS_API from "@/utils/axiosAPI";

export async function getFlightById(id) {
    try {
        const { data } = await AXIOS_API.get(`/flight/details/${id}`);

        if (data) {
            try {
                const { data: base64 } = await AXIOS_API.get(`/base64?url=${data.imageUrls[0]}`);
                data.blurredImage = base64;
            } catch (error) {
                console.warn('Failed to fetch blurred image:', error);
                data.blurredImage = data.imageUrls[0]; // Fallback to original image
            }
        }

        return data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'Failed to fetch flight details');
    }
}
export async function postReview(id, body) {
    const { data } = await AXIOS_API.post(`/review?id=${id}`, body)

    return data
}

export async function getReviewsByFlight(id) {
    const { data } = await AXIOS_API.get(`/review/${id}`)

    return data
}