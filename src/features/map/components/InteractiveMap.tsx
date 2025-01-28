import { Viewer, Scene } from "resium";
import { ImageryLayer, OpenStreetMapImageryProvider, Color } from "cesium";
import AddMemoryInteraction from "./AddMemoryInteraction";
import PlaceSearchBar from "./PlaceSearchBar";

const OSMLayer = new ImageryLayer(new OpenStreetMapImageryProvider({}));

interface Interactive3DMapProps {
    userAddingPoint: boolean;
    onUserAddedPoint: (wktPoint:string) => void;
}

const Interactive3DMap = ({ userAddingPoint, onUserAddedPoint }: Interactive3DMapProps) => {

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

            {/* My beloved custom geocoder search bar */}
            <div className="absolute top-4 right-4 z-10">
                <PlaceSearchBar />
            </div>


            {/* Entities */}
            {userAddingPoint ? <AddMemoryInteraction onPointAdded={onUserAddedPoint} /> : null }

        </Viewer>
    );
};

export default Interactive3DMap;
