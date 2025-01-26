import axios from "axios";
import { useState } from "react";

const useGeocoder = () => {
    const [error, setError] = useState<string | null>(null);

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
                const lon = parseFloat(placeData.lon);
                const lat = parseFloat(placeData.lat);

                return { lon, lat };
            }
        } catch (error) {
            setError(
                "A problem occurred while trying to get coordinates from Nominatim."
            );
        }
        return null;
    };

    return { coordsFromPlaceName, error };
};

export default useGeocoder;
