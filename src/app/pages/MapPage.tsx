import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import Interactive3DMap from "@/features/map/components/InteractiveMap";
import MemoryForm from "@/features/map/components/MemoryForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const MapPage = () => {
    const { t } = useTranslation();

    const [userAddingPoint, setUserAddingPoint] = useState(false);
    const [formOpened, setFormOpened] = useState(false);

    const toggleInteration = () => setUserAddingPoint((prev: boolean) => !prev);

    return (
        <div className="h-screen w-screen relative overflow-hidden">
            {/* The interesting part : Cesium map */}
            <Interactive3DMap
                userAddingPoint={userAddingPoint}
                onUserAddedPoint={setFormOpened}
            />

            <Button
                onClick={toggleInteration}
                className={`absolute top-4 left-4 z-10 ${
                    userAddingPoint ? "bg-orange-600" : ""
                }`}
            >
                {t("map_page.add_memory_trigger")}
            </Button>

            {/* Side menu with form to submit a memory */}
            <Sheet open={formOpened} onOpenChange={setFormOpened}>
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
