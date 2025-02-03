import { useTranslation } from "react-i18next";

// TODO shared memory props
export interface MemoryCardProps {
    title: string;
    description: string;
    photo: string;
    year: string;
    month: string | null;
    added_by: string;
}

const MemoryCard = ({ title, description, photo, year, month, added_by }: MemoryCardProps) => {
    const { t } = useTranslation();
    const months = t("map_page.form.fields.all_months", {
        returnObjects: true,
    }) as string[];

    return (
        <div className="bg-card w-64 rounded-2xl shadow-md mb-8 text-card-foreground">
            {/* Header img */}
            <img
                className="w-full max-h-72 object-cover bg-gray-500 rounded-t-2xl"
                src={photo}
                alt=""
            />
            {/* Content */}
            <div className="p-5">
                <div className="mb-3">
                    <div className="mb-2">
                        <h5 className="text-lg font-bold mb-0.5">{title}</h5>
                        <p className="text-xs opacity-80">
                            {month && months[parseInt(month) - 1] + " "}
                            {year}
                        </p>
                    </div>
                    <p className="">{description}</p>
                </div>
                <div className="text-sm">
                    <p className="">
                        {t("map_page.memory_card.added_by")} <span className="text-indigo-400">{added_by}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MemoryCard;
