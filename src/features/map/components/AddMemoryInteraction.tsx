import {
    Cartesian2,
    Cartesian3,
    Color,
    ScreenSpaceEventHandler as CesiumEventHandler,
    ScreenSpaceEventType,
} from "cesium";
import { useEffect, useState } from "react";
import { Entity, PointGraphics, useCesium } from "resium";

interface AddMemoryInteractionProps {
    onPointAdded: () => void;
}

const AddMemoryInteraction = ({ onPointAdded }: AddMemoryInteractionProps) => {
    const { viewer } = useCesium();

    const [userPoint, setUserPoint] = useState<Cartesian3 | null>(null);

    // Handler that gets the click position and adds an Entity to the map
    const handleAdd = (e: CesiumEventHandler.PositionedEvent) => {
        const pos = e.position as Cartesian2;
        const ellipsoid = viewer?.scene.globe.ellipsoid;
        const cartesian = viewer?.camera.pickEllipsoid(pos, ellipsoid);
        if (cartesian) {
            setUserPoint(cartesian);

            // This will open the form in our case
            onPointAdded();
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

        // CLeanup callback
        // TODO study this feature in more depth
        // From what I understood after reading the docs, it removes unnecessary stuff when the component unmounts
        // Here, we added an interaction so we can remove it when not needed
        return () => {
            if (viewer) {
                viewer.screenSpaceEventHandler.removeInputAction(
                    ScreenSpaceEventType.LEFT_CLICK
                );
            }
        };
    }, [viewer]);

    // If the user clicked somewhere, the point appears
    return userPoint ? (
        <Entity position={userPoint}>
            <PointGraphics pixelSize={20} color={new Color(1, 0, 0)} />
        </Entity>
    ) : null;
};

export default AddMemoryInteraction;
