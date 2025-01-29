import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MonthSelect, YearSelect } from "@/components/common/MonthYearSelect";
import { useTranslation } from "react-i18next";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { memoryFormInputs, memoryFormSchema } from "./memoryForm.schema";
import { apiClient } from "@/lib/apiClient";

interface MemoryFormProps {
    point: string;
    onSubmitted: () => void;
}

const MemoryForm = ({ point, onSubmitted }: MemoryFormProps) => {
    const { t } = useTranslation();

    // Form logic //

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<memoryFormInputs>({
        resolver: zodResolver(memoryFormSchema),
    });

    const handleMemorySubmit: SubmitHandler<memoryFormInputs> = (data) => {
        const memoryData = { ...data, geom: point, photo: data.photo[0] };
        apiClient.post("memories/", memoryData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        onSubmitted();
    };

    //////////////////////////

    return (
        <form className="space-y-4 [&_label]:mb-3" onSubmit={handleSubmit(handleMemorySubmit)}>
            {/* Title */}
            <div>
                <Label htmlFor="title">{t("map_page.form.fields.title")}</Label>
                <Input
                    id="title"
                    placeholder={t("map_page.form.fields.title_placeholder")}
                    {...register("title")}
                />
                {errors.title && <p className="text-red-700">{t(errors.title.message!)}</p>}
            </div>

            {/* Description */}
            <div>
                <Label htmlFor="description">{t("map_page.form.fields.description")}</Label>
                <Textarea
                    id="description"
                    placeholder={t("map_page.form.fields.description_placeholder")}
                    {...register("description")}
                />
                {errors.description && (
                    <p className="text-red-700">{t(errors.description.message!)}</p>
                )}
            </div>

            {/* Picture */}
            <div>
                <Label htmlFor="picture">{t("map_page.form.fields.picture")}</Label>
                <Input id="picture" type="file" accept="image/*" {...register("photo")} />
                {errors.photo && <p className="text-red-700">{t(errors.photo.message!)}</p>}
            </div>

            {/* Date */}
            <div className="flex space-x-2">
                <div className="w-1/2 whitespace-nowrap">
                    <Label htmlFor="year">{t("map_page.form.fields.year")}</Label>
                    <Controller
                        name="year"
                        control={control}
                        render={({ field }) => (
                            <YearSelect onValueChange={field.onChange} value={field.value} />
                        )}
                    />
                    {errors.year && <p className="text-red-700">{t(errors.year.message!)}</p>}
                </div>
                <div className="w-1/2">
                    <Label htmlFor="month">{t("map_page.form.fields.month")}</Label>
                    <Controller
                        name="month"
                        control={control}
                        render={({ field }) => (
                            <MonthSelect onValueChange={field.onChange} value={field.value} />
                        )}
                    />
                </div>
            </div>

            {/* Name */}
            <div>
                <Label htmlFor="name">{t("map_page.form.fields.name")}</Label>
                <Input
                    id="title"
                    placeholder={t("map_page.form.fields.name_placeholder")}
                    {...register("name")}
                />
                {errors.name && <p className="text-red-700">{t(errors.name.message!)}</p>}
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full">
                {t("map_page.form.submit")}
            </Button>
        </form>
    );
};

export default MemoryForm;
