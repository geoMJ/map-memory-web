import { translation } from "./translation.type";

const en: translation = {
    navigation: {
        features: "Features",
        how_it_works: "How It Works",
        faq: "FAQ",
        faq_verbose: "Frequently Asked Questions",
        map: "Map",
    },
    footer: {
        made_with: "Made with",
        love: "love",
        and_a_keyboard: "and a keyboard",
        graphics_from: "Graphics from",
        and: "and",
    },
    home: {
        title: "Home",
        description:
            "A cool platform to share your pictures with the world and see them on an interactive globe!",
        hero_section: {
            heading: "Explore the World Through Time",
            description:
                "MapMemory is a free platform with no sign-up required, where anyone can pin a location on an interactive map, upload a photo, add a date, and share it with the world!",
            explore_map_CTA: "Explore the Map",
            learn_more_CTA: "Learn More",
        },
        features_section: [
            {
                title: "A Three-Dimensional World",
                description: "An interactive globe with colorful pins for more fun!",
                imgSrc: "https://lottie.host/9d154133-add7-4fd3-b7ad-5741d4b97c13/5qRzRexdQS.lottie",
                imgAlt: "animation of a globe with pins",
                lottie: true,
            },
            {
                title: "Time Filter",
                description:
                    "Choose a time period and display matching photos, or view them all at once!",
                imgSrc: "/assets/images/timemachine.webp",
                imgAlt: "illustration of a time machine",
            },
            {
                title: "Tell Us More",
                description: "Describe your photo and share fun or interesting facts with others.",
                imgSrc: "https://lottie.host/90f75128-bb65-40e9-bd34-4927373b6928/riQE3c3ngt.lottie",
                imgAlt: "animation of a pencil",
                lottie: true,
            },
            {
                title: "Your Story Visible to Everyone, Instantly",
                description:
                    "No need to pay or fill out endless forms. Start having fun right away!",
                imgSrc: "/assets/images/pictures.webp",
                imgAlt: "vector illustration of photos",
            },
        ],
        how_it_works_section: [
            {
                step: "Choose a Location",
                description: "Click exactly where you want your pin to appear.",
            },
            {
                step: "Upload a Photo",
                description: "Add your chosen photo, along with a title and relevant information.",
            },
            {
                step: "Have Fun!",
                description:
                    "Once your contribution is added to the map, share it with friends and keep exploring!",
            },
        ],
        faq_section: [
            {
                question: "Do I need to create an account?",
                answer: "No, MapMemory is a free platform that doesn't require registration. Start adding photos and exploring the interactive map right away!",
            },
            {
                question: "Can I upload multiple photos for one location?",
                answer: "Currently, you can add one photo per pin. However, you can add multiple pins at the same location for different years.",
            },
            {
                question: "How do I sort photos by year?",
                answer: "On the map page, you'll find a filter option that allows you to sort pins by year. You can select a single year or a range of years to see user contributions.",
            },
            {
                question: "Is my personal data safe ?",
                answer: "In addition to not requiring registration, this website does not collect any personal data (via systems such as cookies). Additionally, only a copy of the pictures you add is kept. This copy does not retrieve any EXIF data, and therefore does not expose any information about you.",
            },
        ],
    },
    map_page: {
        title: "Carte",
        description: "Interact with the map to see other people's pictures and add your own.",
        add_memory_trigger: "Add",
        add_memory_trigger_stop: "Cancel",
        back_home: "Back to Home",
        memory_card: {
            added_by: "Added by",
        },
        decades_filter: {
            tooltip: "Filter by period",
            dropdown_title: "Select periods",
            time_periods: {
                prefix: null,
                suffix: "s",
            },
            all: "All",
        },
        search_bar_placeholder: "Search for a location...",
        help_message: "Click anywhere you want to add a point.",
        form: {
            main_title: "Add a Memory",
            main_description: "Fill out this form to share your photo.",
            fields: {
                title: "Title",
                title_placeholder: "Choose a title",
                description: "Description",
                description_placeholder: "Describe the photo",
                picture: "Photo",
                year: "Year",
                select_year: "Select a year",
                month: "Month (optional)",
                select_month: "Select a month",
                all_months: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                ],
                name: "Your name (optional)",
                name_placeholder: "Anonymous",
                validation: {
                    title_min: "The title must be at least 3 characters long.",
                    title_max: "The title cannot exceed 50 characters.",
                    description_min: "The description must be at least 10 characters long.",
                    description_max: "The description cannot exceed 255 characters.",
                    photo: "A photo is required!", // Really??
                    year: "Please provide a year.",
                },
            },
            submit: "Submit!",
            confirm_dialog: {
                thanks: "Thank you!",
                oops: "Oops!",
                wainting_for_review:
                    "Your contribution will be reviewed and published as soon as possible if everything is okay.",
                error_has_occured:
                    "An error has occured while submitting your picture, please try again later.",
                ok: "Okay!",
            },
        },
    },
};

export default en;
