//import type { translation } from "./translation.type"

export type translation = {
    navigation: {
        features: string;
        how_it_works: string;
        faq: string;
        faq_verbose: string;
        map: string;
    };
    footer: {
        made_with: string;
        love: string;
        and_a_keyboard: string;
        graphics_from: string;
        and: string;
    };
    home: {
        hero_section: {
            heading: string;
            description: string;
            explore_map_CTA: string;
            learn_more_CTA: string;
        };
        features_section: {
            title: string;
            description: string;
            imgSrc: string;
            imgAlt: string;
            lottie?: boolean | null;
        }[];

        how_it_works_section: {
            step: string;
            description: string;
        }[];
        faq_section: {
            question: string;
            answer: string;
        }[];
    };
    map_page: {
        add_memory_trigger: string;
        add_memory_trigger_stop: string;
        back_home: string;
        memory_card: {
            added_by: string;
        };
        decades_filter: {
            tooltip: string;
            dropdown_title: string;
            time_periods: {
                prefix: string | null;
                suffix: string | null;
            };
            all: string;
        };
        search_bar_placeholder: string;
        form: {
            main_title: string;
            main_description: string;
            fields: {
                title: string;
                title_placeholder: string;
                description: string;
                description_placeholder: string;
                picture: string;
                year: string;
                select_year: string;
                month: string;
                select_month: string;
                all_months: [
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string
                ];
                name: string;
                name_placeholder: string;
                validation: {
                    title_min: string;
                    title_max: string;
                    description_min: string;
                    description_max: string;
                    photo: string;
                    year: string;
                };
            };
            submit: string;
            confirm_dialog: {
                thanks: string;
                wainting_for_review: string;
                ok: string;
            };
        };
    };
};
