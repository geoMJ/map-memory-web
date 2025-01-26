import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Interactive3DMap from "@/features/map/components/InteractiveMap";
import MemoryForm from "@/features/map/components/MemoryForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const MapPage = () => {
    const { t } = useTranslation();

    const [formOpened, setFormOpened] = useState(false)

    return (
        <div className="h-screen w-screen relative overflow-hidden">
            {/* The interesting part : Cesium map */}
            <Interactive3DMap onUserAddedPoint={setFormOpened} />

            {/* Side menu */}
            <Sheet open={formOpened} onOpenChange={setFormOpened}>
                <SheetTrigger asChild className="absolute top-4 left-4 z-10">
                    <Button>Open Menu</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetTitle className="text-l lg:text-2xl font-bold mb-6">
                        {t("map_page.form.main_title")}
                    </SheetTitle>
                    <MemoryForm />
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MapPage;
