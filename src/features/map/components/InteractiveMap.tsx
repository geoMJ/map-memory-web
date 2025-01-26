import { Viewer, Scene } from "resium";
import { ImageryLayer, OpenStreetMapImageryProvider, Color } from "cesium";

const OSMLayer = new ImageryLayer(new OpenStreetMapImageryProvider({}))

interface Interactive3DMapProps {
    onUserAddedPoint: React.Dispatch<React.SetStateAction<boolean>>
}

const Interactive3DMap = ({onUserAddedPoint}: Interactive3DMapProps) => {
    const toggleMemoryForm = () => onUserAddedPoint((prev:boolean) => !prev)
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
            onClick={toggleMemoryForm}
        >
            <Scene backgroundColor={new Color(0.4, 0.5, 0.8)} />                
        </Viewer>
    );
};

export default Interactive3DMap;
