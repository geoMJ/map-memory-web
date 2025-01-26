import { Viewer, Cartesian3 } from "cesium";

// This takes lonlat coordinates in degrees and puts the user at that location
export const flyToLocation = (lon: number, lat: number, viewer:Viewer) => {

    // Found the height value used by Cesium by default in their GeocoderViewModel.js
    const zoomHeight = 1000;
    
    viewer.camera.flyTo({
        destination: Cartesian3.fromDegrees(lon, lat, zoomHeight),
        duration: 2.0, // Smooth transition
    });
};