import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import useGeocoder from "../hooks/useGeocoder";
import { flyToLocation } from "../utils/mapAnimations";
import { useCesium } from "resium";
import { useTranslation } from "react-i18next";

const PlaceSearchBar = () => {
    const {t} = useTranslation();
    const { coordsFromPlaceName, error } = useGeocoder();
    const { viewer } = useCesium();

    const handleSearchPlace = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userSearch = e.currentTarget.place.value;
        const coords = await coordsFromPlaceName(userSearch);

        // TODO display something in case of error and maybe trycatch instead of if blocks
        if (error) {
            return;
        }

        if (coords && viewer) {
            flyToLocation(coords.lon, coords.lat, viewer);
        }
    };

    return (
        <form onSubmit={handleSearchPlace}>
            <div className="flex w-[min(50rem,_50dvw)] max-w-sm space-x-2">
                <Input type="search" name="place" id="place" placeholder={t("map_page.search_bar_placeholder")} />
                <Button type="submit">
                    <Search />
                </Button>
            </div>
        </form>
    );
};

export default PlaceSearchBar;
