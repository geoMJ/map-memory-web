import axios from "axios";

const useGeocoder = () => {
    const coordsFromPlaceName = async (place: string) => {
        try {
            const response = await axios({
                baseURL: "https://nominatim.openstreetmap.org/search",
                method: "GET",
                params: {
                    q: place,
                    format: "json",
                    limit: 1,
                },
            });
            if (response.data) {
                const placeData = response.data[0];
                return { lon: placeData.lon, lat: placeData.lat };
            }
        } catch (error) {
            throw error;
        }
    };

    return { coordsFromPlaceName };
};

export default useGeocoder;
