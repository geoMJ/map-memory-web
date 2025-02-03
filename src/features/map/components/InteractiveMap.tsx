import { Viewer, GeoJsonDataSource, EventTarget } from "resium";
import { ImageryLayer, OpenStreetMapImageryProvider } from "cesium";
import AddMemoryInteraction from "./AddMemoryInteraction";
import PlaceSearchBar from "./PlaceSearchBar";
import { useEffect, useState } from "react";
import { apiClient } from "@/lib/apiClient";
import DecadeFilter from "@/components/shared/DecadeFilter";
import { getRandomHexColor } from "../utils/randomColor";
import MemoryCard, { MemoryCardProps } from "@/components/shared/MemoryCard";
import { X } from "lucide-react";

const mapTiles = new ImageryLayer(new OpenStreetMapImageryProvider({}));
// TODO maybe move this kind of stuff to a dedicaced util file
const currentDecade = Math.floor(new Date().getFullYear() / 10) * 10;
const decades = Array.from({ length: 11 }, (_, i) => currentDecade - i * 10);

// Just for typescript cleanness, will probably reuse in other projects
interface GeoJsonFeature {
    type: string;
    geometry: {
        type: string;
        coordinates: number[];
    };
    bbox?: number[];
    properties?: any;
}

interface GeoJsonFeatureCollection {
    type: string;
    features: GeoJsonFeature[] | [];
}

interface Interactive3DMapProps {
    userAddingPoint: boolean;
    onUserAddedPoint: (wktPoint: string) => void;
}

const Interactive3DMap = ({ userAddingPoint, onUserAddedPoint }: Interactive3DMapProps) => {
    const [memories, setMemories] = useState<GeoJsonFeatureCollection | null>(null);
    const [filteredMemories, setFilteredMemories] = useState<GeoJsonFeatureCollection | null>(null);
    const [chosenTimePeriods, setChosenTimePeriods] = useState<number[]>(decades);
    const [mouseOnMemory, setMouseOnMemory] = useState(false);

    // Memory Card related state
    const [cardProperties, setCardProperties] = useState<MemoryCardProps | null>(null);

    // Just for user experience, cool canvas trick thanks to Cesium's API
    const togglePointer = () => {
        setMouseOnMemory((prev) => !prev);
    };

    // Add or remove chosen decades based on what's checked in the filter dropdown
    const handleDecadeCheck = (decade: number) => {
        console.log(filteredMemories);
        const periods = chosenTimePeriods.includes(decade)
            ? chosenTimePeriods.filter((d) => d !== decade)
            : [...chosenTimePeriods, decade];

        setChosenTimePeriods(periods);
        filterByDecade(periods);
    };

    // Get memories !
    useEffect(() => {
        // TODO make a useFetch hook !
        const getMemories = async () => {
            try {
                const memoriesResponse = await apiClient.get("memories/");
                const memoriesObject = memoriesResponse.data as GeoJsonFeatureCollection;

                // Because we love a colorful map
                // I know I'm mutating the original data but it's done right after fetching and before any state management logic so...
                // Might change it later though
                memoriesObject.features.forEach((feature) => {
                    feature.properties["marker-color"] = getRandomHexColor();
                });

                // I won't mutate anymore after this
                setMemories(memoriesObject);
                setFilteredMemories(memoriesObject);
            } catch (error) {
                console.log(error);
            }
        };
        getMemories();
    }, []);

    // The memories filtered by decade
    // I'm using a parameter instead of the chosenTimePeriods directly because I need the values before the state has finished updating
    const filterByDecade = (timePeriods: number[]) => {
        if (!memories) return;

        const filtered = memories.features.filter((feature) =>
            timePeriods.includes(Math.floor(feature.properties.year / 10) * 10)
        );

        setFilteredMemories({ ...memories, features: filtered });
    };

    const resetFilter = () => {
        if (chosenTimePeriods.length !== 11) {
            setFilteredMemories(memories);
            setChosenTimePeriods(decades);
        }
    };

    // Finally, the cards !
    const showMemoryCard = (target: EventTarget) => {
        const memory = target.id.properties?.getValue() as MemoryCardProps;
        console.log("showing")
        setCardProperties(memory);
    };

    return (
        // Viewer without all the widgets
        <Viewer
            full
            baseLayer={mapTiles}
            navigationHelpButton={false}
            timeline={false}
            animation={false}
            baseLayerPicker={false}
            geocoder={false}
            homeButton={false}
            sceneModePicker={false}
            infoBox={false}
            selectionIndicator={false}
            fullscreenButton={false}
            className={mouseOnMemory ? "cursor-pointer" : ""}
        >

            {/* Existing memories... */}
            {memories && (
                <GeoJsonDataSource
                    data={filteredMemories}
                    markerSize={24}
                    onMouseEnter={togglePointer}
                    onMouseLeave={togglePointer}
                    onClick={(_, target) => {
                        showMemoryCard(target);
                    }}
                />
            )}

            {/* Showing what the user added */}
            {cardProperties && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-in zoom-in-50 slide-in-from-top-1/2 slide-in-from-left-1/2">
                    <button className="absolute top-2 right-2 p-2 rounded-full bg-gray-700 text-gray-50 opacity-50 hover:opacity-90 transition-opacity" aria-label="close" onClick={() => setCardProperties(null)}><X size={16} /></button>
                    <MemoryCard {...cardProperties} />
                </div>
            )}

            <div className="flex gap-2 absolute top-4 right-4 z-10 transition-all">
                {/* ...Which can be filtered */}
                <DecadeFilter
                    decadesArray={decades}
                    chosenDecades={chosenTimePeriods}
                    handleCheck={handleDecadeCheck}
                    onCheckAll={resetFilter}
                />
                {/* My beloved custom geocoder search bar */}
                <PlaceSearchBar />
            </div>

            {/* User adds a new memory */}
            {userAddingPoint ? <AddMemoryInteraction onPointAdded={onUserAddedPoint} /> : null}
        </Viewer>
    );
};

export default Interactive3DMap;
