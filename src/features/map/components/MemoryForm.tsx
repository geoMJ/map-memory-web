import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import MonthYearSelect from "@/components/common/MonthYearSelect";
import { useTranslation } from "react-i18next";

const MemoryForm = () => {

    const {t} = useTranslation()

    const logvals = (y:string, m?:string) => {
        console.log(y+m)
    };

    return (
        <form className="space-y-4">
            <div>
                <Label htmlFor="title">{t("map_page.form.fields.title")}</Label>
                <Input id="title" placeholder={t("map_page.form.fields.title_placeholder")} />
            </div>
            <div>
                <Label htmlFor="description">{t("map_page.form.fields.description")}</Label>
                <Textarea id="description" placeholder={t("map_page.form.fields.description_placeholder")} />
            </div>
            <div>
                <Label htmlFor="picture">{t("map_page.form.fields.picture")}</Label>
                <Input id="picture" type="file" accept="image/*" />
            </div>
            <MonthYearSelect onSelectChange={logvals} />
            <Button type="submit" className="w-full">
            {t("map_page.form.submit")}
            </Button>
        </form>
    );
};

export default MemoryForm;
