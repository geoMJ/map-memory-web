import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { useTranslation } from "react-i18next";

// We start with the current year (eg. 2025) and go back 100 years from there
// TODO Maybe more years would be best

// Also, it took me way to long to understand how to register custom components with RHF
// ComponentProps helps pass props to nested component, in this case Select

const YearSelect = ({ ...props }: React.ComponentProps<typeof Select>) => {
    const { t } = useTranslation();

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

    return (
        <Select {...props}>
            <SelectTrigger id="year">
                <SelectValue
                    placeholder={t("map_page.form.fields.select_year")}
                />
            </SelectTrigger>
            <SelectContent>
                {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                        <span>{year}</span>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

const MonthSelect = ({ ...props }: React.ComponentProps<typeof Select>) => {
    const { t } = useTranslation();

    const months = t("map_page.form.fields.all_months", {
        returnObjects: true,
    }) as string[];

    return (
        <Select {...props}>
            <SelectTrigger id="month">
                <SelectValue
                    placeholder={t("map_page.form.fields.select_month")}
                />
            </SelectTrigger>
            <SelectContent>
                {months.map((month, index) => (
                    <SelectItem key={index} value={(index+1).toString()}>
                        <span>{month}</span>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export { YearSelect, MonthSelect };
