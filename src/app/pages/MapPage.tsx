import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import MemoryForm from "@/features/map/components/MemoryForm";
import { useTranslation } from "react-i18next";

const MapPage = () => {
    const {t} = useTranslation()

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
                <SheetTitle className="text-l lg:text-2xl font-bold mb-6">{t("map_page.form.main_title")}</SheetTitle>
                   <MemoryForm />
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default MapPage;