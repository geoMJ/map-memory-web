import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CircleCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const ConfirmDialog = ({
    open,
    handleConfirm,
}: React.ComponentProps<typeof AlertDialog> & { handleConfirm: () => void }) => {
    const { t } = useTranslation();
    const dialogText = t("map_page.form.confirm_dialog", { returnObjects: true }) as {
        thanks: string;
        wainting_for_review: string;
        ok: string;
    };

    return (
        <AlertDialog open={open}>
            <AlertDialogContent>
                <AlertDialogHeader className="px-6 py-4 text-center">
                    <CircleCheck size={52} className="mx-auto text-green-600" />
                    <AlertDialogTitle>{dialogText.thanks}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {dialogText.wainting_for_review}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="!justify-center">
                    <AlertDialogAction className="text-center" onClick={handleConfirm}>
                        {dialogText.ok}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default ConfirmDialog;
