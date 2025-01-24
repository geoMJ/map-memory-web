import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Map } from "ol";
import useGeocoder from "../hooks/useGeocoder";

const PlaceSearchBar = ({ targetMap }: { targetMap: Map }) => {
    const { coordsFromPlaceName } = useGeocoder();

    const handleSearchPlace = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userSearch = e.currentTarget.place.value;
        const coords = await coordsFromPlaceName(userSearch);

        if (coords) {
            const mapView = targetMap.getView();
            mapView.setCenter([coords.lon, coords.lat]);
            mapView.setZoom(12);
        }
    };

    return (
        <form onSubmit={handleSearchPlace}>
            <div className="flex w-full max-w-sm space-x-2">
                <Input type="search" name="place" id="place" />
                <Button type="submit">
                    <Search />
                </Button>
            </div>
        </form>
    );
};

export default PlaceSearchBar;
