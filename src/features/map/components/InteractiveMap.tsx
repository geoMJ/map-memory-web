import { Viewer, Scene, GeoJsonDataSource, GeoJsonDataSourceProps } from "resium";
import { ImageryLayer, OpenStreetMapImageryProvider, Color } from "cesium";
import AddMemoryInteraction from "./AddMemoryInteraction";
import PlaceSearchBar from "./PlaceSearchBar";
import { useCallback, useEffect, useState } from "react";
import { apiClient } from "@/lib/apiClient";
import { getRandomCesiumColor } from "../utils/randomColor";

const OSMLayer = new ImageryLayer(new OpenStreetMapImageryProvider({}));

interface Interactive3DMapProps {
    userAddingPoint: boolean;
    onUserAddedPoint: (wktPoint: string) => void;
}

const Interactive3DMap = ({
    userAddingPoint,
    onUserAddedPoint,
}: Interactive3DMapProps) => {
    const [memories, setMemories] = useState<{} | null>(null);
    const [mouseOnMemory, setMouseOnMemory] = useState(false)

    const togglePointer = () => {
        setMouseOnMemory((prev) => !prev)
    }

    // Get memories !
    useEffect(() => {
        // TODO make a useFetch hook !
        const getMemories = async () => {
            try {
                const memoriesResponse = await apiClient.get("memories/");
                setMemories(memoriesResponse.data);
            } catch (error) {
                console.log(error);
            }
        };
        getMemories();
    }, []);

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
            <Scene backgroundColor={new Color(0.4, 0.5, 0.8)} />

            {/* My beloved custom geocoder search bar */}
            <div className="absolute top-4 right-4 z-10">
                <PlaceSearchBar />
            </div>

            {/* Existing memories */}
            {memories && (
                <GeoJsonDataSource
                    data={memories}
                    markerSize={24}
                    markerColor={getRandomCesiumColor()}
                    onMouseEnter={togglePointer}
                    onMouseLeave={togglePointer}
                />
            )}

            {/* User adds a new memory */}
            {userAddingPoint ? (
                <AddMemoryInteraction onPointAdded={onUserAddedPoint} />
            ) : null}
        </Viewer>
    );
};

export default Interactive3DMap;
