import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import useGeocoder from "../hooks/useGeocoder";
import { flyToLocation } from "../utils/mapAnimations";
import { useCesium } from "resium";

const PlaceSearchBar = () => {
    const { coordsFromPlaceName, error } = useGeocoder();
    const { viewer } = useCesium();

    const handleSearchPlace = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userSearch = e.currentTarget.place.value;
        const coords = await coordsFromPlaceName(userSearch);

        // TODO display something in case of error and maybe trycatch instead of if blocks
        if (error) {
            return
        }

        if (coords && viewer) {
            console.log("flying");
            flyToLocation(coords.lon, coords.lat, viewer);
        }
    };

    return (
        <form onSubmit={handleSearchPlace}>
            <div className="flex w-[20dvw] max-w-sm space-x-2">
                <Input type="search" name="place" id="place" />
                <Button type="submit">
                    <Search />
                </Button>
            </div>
        </form>
    );
};

export default PlaceSearchBar;
