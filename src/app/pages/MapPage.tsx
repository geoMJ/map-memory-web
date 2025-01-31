import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import Interactive3DMap from "@/features/map/components/InteractiveMap";
import MemoryForm from "@/features/map/components/memoryForm/MemoryForm";
import { Home } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

const MapPage = () => {
    const { t } = useTranslation();

    const [userAddingPoint, setUserAddingPoint] = useState(false);
    const [formOpened, setFormOpened] = useState(false);
    const [addedPoint, setAddedPoint] = useState<string | null>(null);

    const toggleInteration = () => setUserAddingPoint((prev: boolean) => !prev);
    const handlePointAdded = (wktPoint: string) => {
        setFormOpened(true);
        setAddedPoint(wktPoint);
    };

    const onFormSubmitted = () => {
        setUserAddingPoint(false);
        setFormOpened(false);
    }

    return (
        <div className="h-screen w-screen relative overflow-hidden">
            {/* The interesting part : Cesium map */}
            <Interactive3DMap
                userAddingPoint={userAddingPoint}
                onUserAddedPoint={handlePointAdded}
            />

            {/* Button for toggling user interaction */}
            <Button
                onClick={toggleInteration}
                className={`absolute top-4 left-4 z-10 ${userAddingPoint ? "bg-accent" : ""}`}
            >
                {t(
                    userAddingPoint
                        ? "map_page.add_memory_trigger_stop"
                        : "map_page.add_memory_trigger"
                )}
            </Button>

            {/* Side menu with form to submit a memory */}
            <Sheet open={formOpened} onOpenChange={setFormOpened}>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="text-l lg:text-2xl font-bold mb-6">
                            {t("map_page.form.main_title")}
                        </SheetTitle>
                        <SheetDescription>{t("map_page.form.main_description")}</SheetDescription>
                    </SheetHeader>
                    {addedPoint && (
                        <MemoryForm
                            onSubmitted={onFormSubmitted}
                            point={addedPoint}
                        />
                    )}
                </SheetContent>
            </Sheet>

            {/* Back to home page */}
            <div className="absolute flex gap-2 items-center right-4 bottom-4 text-xl text-gray-500 hover:text-gray-200 transition-colors">
                <Home />
                <NavLink to="/">{t("map_page.back_home")}</NavLink>
            </div>
        </div>
    );
};

export default MapPage;
