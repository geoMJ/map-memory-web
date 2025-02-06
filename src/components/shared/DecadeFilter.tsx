import { Filter } from "lucide-react";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { useTranslation } from "react-i18next";

interface DecadeFilterProps {
    decadesArray: number[];
    chosenDecades: number[];
    handleCheck: (decade: number) => void;
    onCheckAll: () => void;
}

interface DecadesFilterTranslation {
    tooltip: string;
    dropdown_title: string;
    time_periods: {
        prefix: string | null;
        suffix: string | null;
    };
    all: string;
}

const DecadeFilter = ({
    decadesArray,
    chosenDecades,
    handleCheck,
    onCheckAll,
}: DecadeFilterProps) => {
    const { t } = useTranslation();
    const decadesFilterTranslation = t("map_page.decades_filter", {
        returnObjects: true,
    }) as DecadesFilterTranslation;

    return (
        <TooltipProvider>
            <Tooltip>
                <DropdownMenu>
                    <TooltipTrigger asChild>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="text-gray-400 hover:bg-gray-700 hover:text-gray-200"
                            >
                                <Filter />
                            </Button>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>{decadesFilterTranslation.dropdown_title}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem
                            checked={chosenDecades.length === decadesArray.length}
                            disabled={chosenDecades.length === decadesArray.length}
                            onCheckedChange={onCheckAll}
                        >
                            <span className="font-semibold">{decadesFilterTranslation.all}</span>
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuSeparator className="my-1 bg-muted/50" />
                        {decadesArray.map((decade) => (
                            <DropdownMenuCheckboxItem
                                key={decade}
                                checked={chosenDecades.includes(decade)}
                                onCheckedChange={() => handleCheck(decade)}
                            >
                                <span>{decadesFilterTranslation.time_periods.prefix}{decade}{decadesFilterTranslation.time_periods.suffix}</span>
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                <TooltipContent className="bg-gray-100">
                    <p>{decadesFilterTranslation.tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default DecadeFilter;
