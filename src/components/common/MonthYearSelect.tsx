import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

// We start with the current year (eg. 2025) and go back 100 years from there
// TODO Maybe more years would be best

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

interface MonthYearSelectProps {
    onSelectChange: (year: string, month?: string) => void
}

const MonthYearSelect = ({ onSelectChange }:MonthYearSelectProps) => {

    // I tried using refs, one for each select but it wasn't very clean since I can't directly access the input element from the Select component.
    // It had to be used with the SelectValue but it is a Span so the value was accessed via the textContent
    // Not sure which approach is best
    const [selectedYear, setSelectedYear] = useState("")
    const [selectedMonth, setSelectedMonth] = useState<string|undefined>()

    useEffect(() => {
        onSelectChange(selectedYear, selectedMonth)
    }, [selectedMonth, selectedYear])

    return (
        <div className="flex space-x-2">
            <div className="w-1/2">
                <Label htmlFor="year">Year</Label>
                <Select onValueChange={setSelectedYear}>
                    <SelectTrigger id="year">
                        <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                        {years.map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                                {year}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="w-1/2">
                <Label htmlFor="month">Month</Label>
                <Select onValueChange={setSelectedMonth}>
                    <SelectTrigger id="month">
                        <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent>
                        {months.map((month, index) => (
                            <SelectItem
                                key={index}
                                value={month}
                            >
                                {month}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default MonthYearSelect;
