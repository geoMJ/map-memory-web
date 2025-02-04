import { Info } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./dialog";
import { useTranslation } from "react-i18next";

const InfoMessage = ({ message, ...props }: {message:string;} & React.ComponentProps<typeof Dialog>) => {
    const {t} = useTranslation();
    return (
        <div className="">
            <Dialog open={props.open} modal={false} onOpenChange={props.onOpenChange}>
                <DialogContent className="flex items-center top-[80%] w-4/5 md:w-2/5 gap-4 opacity-70 hover:opacity-100 data-[state=open]:slide-in-from-bottom-8 data-[state=closed]:slide-out-to-bottom-0">
                    <DialogTitle className="sr-only">Information</DialogTitle>
                    <Info size={24} className="text-primary" />
                    <DialogDescription className="text-foreground">
                        {t(message)}
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default InfoMessage;
