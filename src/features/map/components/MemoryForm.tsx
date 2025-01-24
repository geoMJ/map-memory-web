import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MonthSelect, YearSelect } from "@/components/common/MonthYearSelect";
import { useTranslation } from "react-i18next";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

interface MemoryFormFields {
    title: string;
    description: string;
    photo: FileList;
    year: string;
    month?: string | undefined;
}

const MemoryForm = () => {
    const { t } = useTranslation();

    // Form logic //

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<MemoryFormFields>();

    const handleMemorySubmit: SubmitHandler<MemoryFormFields> = (data) => {
        console.log(data);
    };
    //////////////////////////

    return (
        <form className="space-y-4" onSubmit={handleSubmit(handleMemorySubmit)}>
            <div>
                <Label htmlFor="title">{t("map_page.form.fields.title")}</Label>
                <Input
                    id="title"
                    placeholder={t("map_page.form.fields.title_placeholder")}
                    {...register("title")}
                />
            </div>
            <div>
                <Label htmlFor="description">
                    {t("map_page.form.fields.description")}
                </Label>
                <Textarea
                    id="description"
                    placeholder={t(
                        "map_page.form.fields.description_placeholder"
                    )}
                    {...register("description")}
                />
            </div>
            <div>
                <Label htmlFor="picture">
                    {t("map_page.form.fields.picture")}
                </Label>
                <Input
                    id="picture"
                    type="file"
                    accept="image/*"
                    {...register("photo")}
                />
            </div>
            <div className="flex space-x-2">
                <div className="w-1/2">
                    <Label htmlFor="year">
                        {t("map_page.form.fields.year")}
                    </Label>
                    <Controller
                        name="year"
                        control={control}
                        render={({ field }) => (
                            <YearSelect
                                onValueChange={field.onChange}
                                value={field.value}
                            />
                        )}
                    />
                </div>
                <div className="w-1/2">
                    <Label htmlFor="month">
                        {t("map_page.form.fields.month")}
                    </Label>
                    <Controller
                        name="month"
                        control={control}
                        render={({ field }) => (
                            <MonthSelect
                                onValueChange={field.onChange}
                                value={field.value}
                            />
                        )}
                    />
                </div>
            </div>
            <Button type="submit" className="w-full">
                {t("map_page.form.submit")}
            </Button>
        </form>
    );
};

export default MemoryForm;
