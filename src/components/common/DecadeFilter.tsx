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

interface DecadeFilterProps {
    decadesArray: number[];
    chosenDecades: number[];
    handleCheck: (decade: number) => void;
    onCheckAll: () => void;
}

const DecadeFilter = ({
    decadesArray,
    chosenDecades,
    handleCheck,
    onCheckAll,
}: DecadeFilterProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <DropdownMenu>
                    <TooltipTrigger asChild>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-gray-400 hover:bg-gray-700 hover:text-gray-200">
                                <Filter />
                            </Button>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Select Decades</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem
                            checked={chosenDecades.length === decadesArray.length}
                            disabled={chosenDecades.length === decadesArray.length}
                            onCheckedChange={onCheckAll}
                        >
                            <span className="font-semibold">All</span>
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuSeparator className="my-1 bg-muted/50" />
                        {decadesArray.map((decade) => (
                            <DropdownMenuCheckboxItem
                                key={decade}
                                checked={chosenDecades.includes(decade)}
                                onCheckedChange={() => handleCheck(decade)}
                            >
                                {decade}s
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                <TooltipContent className="bg-gray-100">
                    <p>Filter by Decade</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default DecadeFilter;
