import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTranslation } from "react-i18next";

interface TwoColsWithImgProps {
    title: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
    inverted?: boolean;
    lottie?: boolean;
}

const TwoColsWithImg = ({
    title,
    description,
    imgSrc,
    imgAlt,
    inverted,
    lottie,
}: TwoColsWithImgProps) => {
    const { t } = useTranslation();
    return (
        <div
            className={`flex flex-col justify-around items-center max-lg:gap-12 mb-6 ${
                inverted ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
        >
            <hgroup className="lg:max-w-md space-y-4 lg:space-y-10">
                <h2 className="text-2xl font-bold sm:text-4xl">{t(title)}</h2>
                <p>{t(description)}</p>
            </hgroup>
            <div className="max-lg:w-56 w-80 aspect-square content-center">
                {lottie ? (
                    <DotLottieReact
                        src={imgSrc}
                        autoplay
                        loop
                        speed={0.5}
                        layout={{ fit: "cover", align: [0.5, 0.5] }}
                    />
                ) : (
                    <img
                        src={imgSrc}
                        alt={t(imgAlt)}
                        width={250}
                        height={250}
                        className="mx-auto"
                    />
                )}
            </div>
        </div>
    );
};

export default TwoColsWithImg;
