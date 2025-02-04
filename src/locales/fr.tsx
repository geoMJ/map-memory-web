//import type { translation } from "./translation.type"

import { translation } from "./translation.type";

const fr: translation = {
    navigation: {
        features: "Fonctionnalités",
        how_it_works: "Comment ça marche",
        faq: "FAQ",
        faq_verbose: "Questions fréquentes",
        map: "Carte",
    },
    footer: {
        made_with: "Codé avec",
        love: "amour",
        and_a_keyboard: "et un clavier",
        graphics_from: "Illustrations de",
        and: "et"
    },
    home: {
        title: "Accueil",
        description: "La plateforme de partage de souvenirs sur un globe terrestre interactif !",
        hero_section: {
            heading: "Explorez le monde à travers le temps",
            description:
                "MapMemory est une plateforme gratuite et sans inscription qui vous permet d'épingler une photo sur une carte interactive et de la partager avec le reste du monde !",
            explore_map_CTA: "Explorer la carte",
            learn_more_CTA: "En savoir plus",
        },
        features_section: [
            {
                title: "Le monde en trois dimensions",
                description: "Un globe interactif avec des épingles aux multiples couleurs pour plus de fun !",
                imgSrc: "https://lottie.host/9d154133-add7-4fd3-b7ad-5741d4b97c13/5qRzRexdQS.lottie",
                imgAlt: "animation de globe terrestre avec épingles",
                lottie: true
            },
            {
                title: "Filtre temporel",
                description: "Choisissez une époque qui vous intéresse et affichez les photos correspondantes, ou visionnez les toutes les photos en même temps !",
                imgSrc: "/assets/images/timemachine.webp",
                imgAlt: "illustration de machine à remonter dans le temps"
            },
            {
                title: "Dites-nous en plus",
                description: "Décrivez votre photo et partagez avec les autres des faits qui vous semblent intéressants ou amusants.",
                imgSrc: "https://lottie.host/90f75128-bb65-40e9-bd34-4927373b6928/riQE3c3ngt.lottie",
                imgAlt: "animation de crayon",
                lottie: true
            },
            {
                title: "Votre histoire visible par tous, tout de suite",
                description: "Pas besoin de payer ou de remplir des formulaires qui n'en finissent pas. Vous pouvez vous amuser directement !",
                imgSrc: "/assets/images/pictures.webp",
                imgAlt: "illustration vectorielle de photos"
            },
        ],

        how_it_works_section: [
            {
                step: "Choisissez un emplacement",
                description:
                    "Cliquez à l'endroit exact où vous souhaitez voir apparaître votre épingle.",
            },
            {
                step: "Chargez une photo",
                description:
                    "Ajoutez la photo de votre choix, puis ajoutez y un titre et les informations qui vous semblent utiles.",
            },
            {
                step: "Amusez-vous !",
                description:
                    "Une fois votre contribution ajoutée à la carte, partagez-la avec vos amis, et continuez à explorer !",
            },
        ],
        faq_section: [
            {
                question: "Dois-je créer un compte ?",
                answer: "Non, MapMemory est une plateforme gratuite qui ne nécessite pas d'inscription. Vous pouvez commencer à ajouter vos photos et à explorer la carte interactive dès à présent !",
            },
            {
                question: "Puis-je télécharger plusieurs photos pour un même lieu ?",
                answer: "Actuellement, vous pouvez ajouter une seule photo par épingle. Cependant, vous pouvez ajouter plusieurs épingles au même endroit pour différentes années.",
            },
            {
                question: "Comment trier les photos par année ?",
                answer: "Sur la page de la carte, vous trouverez une option de filtre qui vous permet de trier les épingles par année. Vous pouvez sélectionner une année une plage d'années et voir ce que les utilisateurs ont ajouté.",
            },
            {
                question: "Mes données personnelles sont elles-protégées ?",
                answer: "En plus de ne pas nécessiter d'inscription, ce site ne collecte aucune donnée personnelle (pas de cookies ou autre système de collecte). De plus, seule une copie des photos que vous ajoutez est conservée. Cette copie ne récupère aucune donnée EXIF, et n'expose donc aucune information sur vous."
            }
        ],
    },
    map_page: {
        title: "Carte",
        description: "Interagissez avec le globe pour découvrir les photos des autres et ajouter la votre.",
        add_memory_trigger: "Ajouter",
        add_memory_trigger_stop: "Annuler",
        back_home: "Retour à l'accueil",
        memory_card: {
            added_by: "Ajouté par"
        },
        decades_filter: {
            tooltip: "Filtrer par période",
            dropdown_title: "Sélectionnez des périodes",
            time_periods: {
                prefix: "Années ",
                suffix: null,
            },
            all: "Toutes",
        },
        search_bar_placeholder: "Rechercher un lieu...",
        help_message: "Cliquez à l'endroit désiré pour ajouter un point.",
        form: {
            main_title: "Ajoutez un souvenir",
            main_description: "Remplissez ce formulaire afin de partager votre photo.",
            fields: {
                title: "Titre",
                title_placeholder: "Choisissez un titre",
                description: "Description",
                description_placeholder: "Décrivez la photo",
                picture: "Photo",
                year: "Année",
                select_year: "Sélectionnez une année",
                month: "Mois (facultatif)",
                select_month: "Sélectionnez un mois",
                all_months: [
                    "Janvier",
                    "Février",
                    "Mars",
                    "Avril",
                    "Mai",
                    "Juin",
                    "Juillet",
                    "Août",
                    "Septembre",
                    "Octobre",
                    "Novembre",
                    "Décembre",
                ],
                name: "Votre nom (optionnel)",
                name_placeholder: "Anonyme",
                validation: {
                    title_min: "Le titre doit contenir au moins 3 caractères.",
                    title_max: "Le titre ne peut contenir plus de 50 caractères.",
                    description_min: "La description doit contenir au moins 10 caractères.",
                    description_max: "La description ne peut contenir plus de 255 caractères.",
                    photo: "Une photo est requise !", // Really ??
                    year: "Merci de renseigner une année.",
                },
            },
            submit: "Envoyer !",
            confirm_dialog: {
                thanks: "Merci !",
                wainting_for_review: "Votre contribution va être vérifiée et si tout est bon, elle sera publiée dans les plus brefs délais.",
                ok: "D'accord !"
            }
        },
    },
};

export default fr;
