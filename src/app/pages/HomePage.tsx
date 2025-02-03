import { Button } from "@/components/ui/button";
import { Faq } from "@/features/faq/Faq";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import FeatureCard from "@/components/shared/FeatureCard";
import TwoColsWithImg from "@/components/shared/TwoColsWithImg";
import { ArrowDown, Compass, MapPin, Upload } from "lucide-react";
import Head from "@/components/seo/Head";

const HomePage = () => {
    const { t } = useTranslation();

    const steps = t("home.how_it_works_section", { returnObjects: true }) as {
        step: string;
        description: string;
    }[];
    const stepIcons = [MapPin, Upload, Compass];

    const features = t("home.features_section", { returnObjects: true }) as {
        title: string;
        description: string;
        imgSrc: string;
        imgAlt: string;
        lottie?: boolean;
    }[];

    return (
        <>
        <Head title={t("home.title")} description={t("home.description")} />
            {/* Hero section */}
            <section className="relative w-full py-20 max-sm:pb-32 md:py-24 lg:py-32 xl:py-48">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 justify-center items-center text-center">
                    {/* Main hgroup */}
                    <div className="space-y-8">
                        <hgroup className="mx-auto max-w-[80dvw] lg:max-w-xl space-y-6">
                            <h1 className="text-balance text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                                {t("home.hero_section.heading")}
                            </h1>
                            <p className="text-gray-400/75 md:text-xl dark:text-gray-400">
                                {t("home.hero_section.description")}
                            </p>
                        </hgroup>
                        {/* CTA */}
                        <div className="flex gap-4 justify-center [&>a]:w-32">
                            <Button asChild>
                                <NavLink to="/map">
                                    {t("home.hero_section.explore_map_CTA")}
                                </NavLink>
                            </Button>
                            <Button variant="outline" asChild>
                                <NavLink to="#how-it-works">
                                    {t("home.hero_section.learn_more_CTA")}
                                </NavLink>
                            </Button>
                        </div>
                    </div>
                    {/* <img
                            alt="Hero"
                            className="aspect-video mx-auto rounded-xl object-cover object-center lg:order-last"
                            src={placeholderImg}
                            width="600"
                        /> */}
                </div>
                <div aria-hidden className="hidden lg:block absolute left-1/2 bottom-12 -translate-x-1/2 text-foreground">
                    <ArrowDown size={32} className="animate-bounce" />
                </div>
            </section>

            {/* Features section */}
            <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/80">
                <div className="container">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                        {t("navigation.features")}
                    </h2>
                    <div className="">
                        {features.map((feature, index) => (
                            <TwoColsWithImg
                                key={index + 1}
                                {...feature}
                                inverted={index % 2 !== 0}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works section */}
            <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                        {t("navigation.how_it_works")}
                    </h2>
                    {/* TODO MAybe make this a reusable component */}
                    <div className="flex flex-col lg:flex-row gap-6 pt-8 lg:gap-12 text-center center [&>div]:flex-1">
                        {steps.map((step, index) => {
                            const StepIcon = stepIcons[index];
                            return (
                                <FeatureCard
                                    key={index + 1}
                                    icon={
                                        <StepIcon className="h-12 w-12 text-primary" />
                                    }
                                    title={`${index + 1}. ${step.step}`}
                                    description={step.description}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-primary">
                <div className="container">
                    {" "}
                    {/*TODO maybe remove this wrapper*/}
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                        {t("navigation.faq_verbose")}
                    </h2>
                    <Faq />
                </div>
            </section>

            {/* User reviews / comment section */}
            {/* TODO */}
        </>
    );
};

export default HomePage;
