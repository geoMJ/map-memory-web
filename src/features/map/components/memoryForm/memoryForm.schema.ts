import { z } from "zod";

// The error messages use the i18next translation keys

export const memoryFormSchema = z.object({
    title: z
        .string()
        .min(3, "map_page.form.fields.validation.title_min")
        .max(50, "map_page.form.fields.validation.title_max"),
    description: z
        .string()
        .min(10, "map_page.form.fields.validation.description_min")
        .max(255, "map_page.form.fields.validation.description_max"),
    photo: z.custom<FileList>(
        (val) => val instanceof FileList && val.length > 0,
        {
            message: "map_page.form.fields.validation.photo",
        }
    ),
    year: z.string({required_error: "map_page.form.fields.validation.year"}),
    month: z.string().optional(),
    name: z.string().optional().default("Anonymous")
});

export type memoryFormInputs = z.infer<typeof memoryFormSchema>;
