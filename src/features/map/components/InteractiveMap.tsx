import { Viewer, Scene, CustomDataSource } from "resium";
import { ImageryLayer, OpenStreetMapImageryProvider, Color } from "cesium";
import AddMemoryInteraction from "./AddMemoryInteraction";
import { useState } from "react";

const OSMLayer = new ImageryLayer(new OpenStreetMapImageryProvider({}));

interface Interactive3DMapProps {
    userAddingPoint: boolean;
    onUserAddedPoint: React.Dispatch<React.SetStateAction<boolean>>;
}

const Interactive3DMap = ({ userAddingPoint, onUserAddedPoint }: Interactive3DMapProps) => {

    //const toggleMemoryForm = () => onUserAddedPoint((prev: boolean) => !prev);

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
        >
            <Scene backgroundColor={new Color(0.4, 0.5, 0.8)} />

            {/* Entities */}
            {userAddingPoint ? <AddMemoryInteraction /> : null }

        </Viewer>
    );
};

export default Interactive3DMap;
