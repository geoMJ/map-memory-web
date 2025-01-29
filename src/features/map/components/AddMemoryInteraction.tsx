import {
    Cartesian2,
    Cartesian3,
    ScreenSpaceEventHandler as CesiumEventHandler,
    ScreenSpaceEventType,
} from "cesium";
import { useEffect, useState } from "react";
import { Entity, PointGraphics, useCesium } from "resium";
import { cartesian3ToWKT } from "../utils/wktConvert";
import { getRandomCesiumColor } from "../utils/randomColor";

// User gets to add colorful points !
const entityColor = getRandomCesiumColor()

interface AddMemoryInteractionProps {
    onPointAdded: (wktPoint:string) => void;
}

const AddMemoryInteraction = ({ onPointAdded }: AddMemoryInteractionProps) => {
    const { viewer } = useCesium();

    const [userPoint, setUserPoint] = useState<Cartesian3 | null>(null);

    // Handler that gets the click position and adds an Entity to the map
    const handleAdd = (e: CesiumEventHandler.PositionedEvent) => {
        const pos = e.position as Cartesian2;
        const ellipsoid = viewer?.scene.globe.ellipsoid;
        const cartesian3 = viewer?.camera.pickEllipsoid(pos, ellipsoid);
        if (cartesian3) {
            setUserPoint(cartesian3);
            const wkt = cartesian3ToWKT(cartesian3);
            // This will open the form in our case
            onPointAdded(wkt);
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
            <PointGraphics pixelSize={16} color={entityColor} />
        </Entity>
    ) : null;
};

export default AddMemoryInteraction;
