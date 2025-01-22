import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Faq } from "@/features/faq/Faq";
import { MapPin, Search, Upload } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import placeholderImg from "@/assets/images/placeholder.svg";
import FeatureCard from "@/components/common/FeatureCard";

const HomePage = () => {
    const { t } = useTranslation();

    const steps = t("home.how_it_works_section", { returnObjects: true }) as {
        step: string;
        description: string;
    }[];
    const stepIcons = [MapPin, Upload, Search];

    return (
        <>
            {/* Hero section */}
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-50">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    {t("home.hero_section.heading")}
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    {t("home.hero_section.description")}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <NavLink to="/map">
                                    <Button size="lg">
                                        {t("home.hero_section.explore_map_CTA")}
                                    </Button>
                                </NavLink>
                                <NavLink to="#how-it-works">
                                    <Button variant="outline" size="lg">
                                        {t("home.hero_section.learn_more_CTA")}
                                    </Button>
                                </NavLink>
                            </div>
                        </div>
                        <img
                            alt="Hero"
                            className="aspect-video mx-auto rounded-xl object-cover object-center lg:order-last"
                            src={placeholderImg}
                            width="600"
                        />
                    </div>
                </Container>
            </section>

            {/* Features section */}
            <section
                id="features"
                className="w-full py-12 md:py-24 lg:py-32 bg-white"
            >
                <Container>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                        {t("navigation.features")}
                    </h2>
                    <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                        <FeatureCard
                            icon={
                                <MapPin className="h-10 w-10 text-green-600 mb-2" />
                            }
                            title={t(
                                "home.features_section.feature_memories.pin_memories"
                            )}
                            description={t(
                                "home.features_section.feature_memories.pin_memories"
                            )}
                        />
                    </div>
                </Container>
            </section>

            {/* How It Works section */}
            <section
                id="how-it-works"
                className="w-full py-12 md:py-24 lg:py-32 bg-green-50"
            >
                <Container>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                        {t("navigation.how_it_works")}
                    </h2>
                    {/* TODO MAybe make this a reusable component */}
                    <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                        {steps.map((step, index) => {
                            const StepIcon = stepIcons[index];
                            return (
                                <div key={index+1} className="flex flex-col items-center text-center">
                                    <StepIcon className="h-12 w-12 text-green-600 mb-4" />
                                    <h3 className="text-xl font-bold mb-2">
                                        {`${index + 1}. ${step.step}`}
                                    </h3>
                                    <p>{step.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            {/* FAQ Section */}
            <section
                id="faq"
                className="w-full py-12 md:py-24 lg:py-32 bg-white"
            >
                <div>
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
