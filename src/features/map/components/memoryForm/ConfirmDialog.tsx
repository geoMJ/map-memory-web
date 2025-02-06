import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CircleCheck, CircleX } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ConfirmDialogProps extends React.ComponentProps<typeof AlertDialog> {
    handleConfirm: (opened?:unknown) => void;
    error: unknown | null;
}

const ConfirmDialog = ({ handleConfirm, error }: ConfirmDialogProps) => {
    const { t } = useTranslation();
    const dialogText = t("map_page.form.confirm_dialog", { returnObjects: true }) as {
        thanks: string;
        oops: string;
        wainting_for_review: string;
        error_has_occured: string;
        ok: string;
    };

    const DialogIcon = error ? CircleX : CircleCheck;

    return (
        <AlertDialog open>
            <AlertDialogContent>
                <AlertDialogHeader className="px-6 py-4 text-center">
                    <DialogIcon
                        size={52}
                        className={`mx-auto ${error ? "text-red-600" : "text-green-600"}`}
                    />
                    <AlertDialogTitle className="text-center">{error ? dialogText.oops : dialogText.thanks}</AlertDialogTitle>
                    <AlertDialogDescription className="text-center text-balance">
                        {error ? dialogText.error_has_occured : dialogText.wainting_for_review}
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
