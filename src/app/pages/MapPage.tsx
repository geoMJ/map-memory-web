import Head from "@/components/seo/Head";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import Interactive3DMap from "@/features/map/components/InteractiveMap";
import ConfirmDialog from "@/features/map/components/memoryForm/ConfirmDialog";
import MemoryForm from "@/features/map/components/memoryForm/MemoryForm";
import { Home } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

const MapPage = () => {
    const { t } = useTranslation();

    const [userAddingPoint, setUserAddingPoint] = useState(false);
    const [addedPoint, setAddedPoint] = useState<string | null>(null);
    const [formOpened, setFormOpened] = useState(false);
    const [confirmDialogOpened, setConfirmDialogOpened] = useState(false);

    //const showHelp = () => {}

    const toggleInteration = () => setUserAddingPoint((prev: boolean) => !prev);
    const handlePointAdded = (wktPoint: string) => {
        setFormOpened(true);
        setAddedPoint(wktPoint);
    };

    const onFormSubmitted = () => {
        setUserAddingPoint(false);
        setFormOpened(false);
        setConfirmDialogOpened(true);
    };

    return (
        <div className="h-screen w-screen relative overflow-hidden">
            <Head title={t("map_page.title")} description={t("map_page.description")} />
            {/* The interesting part : Cesium map */}
            <div className={userAddingPoint && !formOpened ? "cursor-[url('/assets/icons/lucide-plus.png'),auto]" : ""}>
                <Interactive3DMap
                    userAddingPoint={userAddingPoint}
                    onUserAddedPoint={handlePointAdded}
                />
            </div>

            {/* Button for toggling user interaction */}
            <Button
                onClick={toggleInteration}
                className={`absolute top-4 left-4 z-10 ${
                    userAddingPoint ? "bg-accent text-accent-foreground" : ""
                }`}
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
                    <SheetHeader className="text-left lg:max-w-[80%] mb-6">
                        <SheetTitle className="text-lg lg:text-2xl font-bold">
                            {t("map_page.form.main_title")}
                        </SheetTitle>
                        <SheetDescription>{t("map_page.form.main_description")}</SheetDescription>
                    </SheetHeader>
                    {addedPoint && <MemoryForm onSubmitted={onFormSubmitted} point={addedPoint} />}
                </SheetContent>
            </Sheet>

            {/* Dialog to confirm the form has been sent */}
            <ConfirmDialog
                open={confirmDialogOpened}
                handleConfirm={() => setConfirmDialogOpened(false)}
            />

            {/* Back to home page */}
            <div className="absolute flex gap-2 items-center right-4 bottom-4 text-xl text-gray-500 hover:text-gray-200 transition-colors">
                <Home />
                <NavLink to="/">{t("map_page.back_home")}</NavLink>
            </div>
        </div>
    );
};

export default MapPage;
