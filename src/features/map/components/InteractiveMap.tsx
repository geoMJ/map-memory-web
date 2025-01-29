import { Viewer, GeoJsonDataSource } from "resium";
import { ImageryLayer, OpenStreetMapImageryProvider } from "cesium";
import AddMemoryInteraction from "./AddMemoryInteraction";
import PlaceSearchBar from "./PlaceSearchBar";
import { useEffect, useState } from "react";
import { apiClient } from "@/lib/apiClient";
//import { getRandomCesiumColor } from "../utils/randomColor";
import DecadeFilter from "@/components/common/DecadeFilter";

const OSMLayer = new ImageryLayer(new OpenStreetMapImageryProvider({}));

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
                setMemories(memoriesResponse.data);
                setFilteredMemories(memoriesResponse.data);
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

    return (
        // Viewer without all the widgets
        <Viewer
            full
            baseLayer={OSMLayer}
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
                    //markerColor={getRandomCesiumColor()}
                    onMouseEnter={togglePointer}
                    onMouseLeave={togglePointer}
                />
            )}

            <div className="flex gap-2 absolute top-4 right-4 z-10">
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
