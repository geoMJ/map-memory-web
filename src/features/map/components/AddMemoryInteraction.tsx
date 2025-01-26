import {
    Cartesian2,
    Cartesian3,
    Color,
    ScreenSpaceEventHandler as CesiumEventHandler,
    ScreenSpaceEventType,
} from "cesium";
import { useEffect, useState } from "react";
import { Entity, PointGraphics, useCesium } from "resium";

const AddMemoryInteraction = () => {
    const { viewer } = useCesium();

    const [userPoint, setUserPoint] = useState<Cartesian3 | null>(null);

    // Handler that gets the click position and adds an Entity to the map
    const handleAdd = (e: CesiumEventHandler.PositionedEvent) => {
        const pos = e.position as Cartesian2;
        const ellipsoid = viewer?.scene.globe.ellipsoid;
        const cartesian = viewer?.camera.pickEllipsoid(pos, ellipsoid);
        if (cartesian) {
            setUserPoint(cartesian);
        }
    };

    // Setting the actual interaction
    useEffect(() => {
        if (viewer) {
            viewer.screenSpaceEventHandler.setInputAction(
                handleAdd,
                ScreenSpaceEventType.LEFT_CLICK
            );
        }
    }, []);

    // If the user clicked somewhere, the point appears
    return userPoint ? (
        <Entity position={userPoint}>
            <PointGraphics pixelSize={20} color={new Color(1, 0, 0)} />
        </Entity>
    ) : null;
};

export default AddMemoryInteraction;
