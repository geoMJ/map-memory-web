import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import MemoryForm from "@/features/map/components/MemoryForm";

const MapPage = () => {

    return (
        <div className="h-screen w-screen relative overflow-hidden">
            {/* Full-screen div for the map */}
            <div id="map"></div>

            {/* Side menu */}
            <Sheet>
                <SheetTrigger asChild className="absolute top-4 left-4 z-10">
                    <Button>Open Menu</Button>
                </SheetTrigger>
                <SheetContent>
                <SheetTitle className="text-l lg:text-2xl font-bold mb-6">Your Memory</SheetTitle>
                   <MemoryForm />
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default MapPage;