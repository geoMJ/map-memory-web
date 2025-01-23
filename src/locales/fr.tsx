//import type { translation } from "./translation.type"

const fr = {
    navigation: {
        features: "Fonctionnalités",
        how_it_works: "Comment ça marche",
        faq: "FAQ",
        faq_verbose: "Questions fréquentes",
        map: "Carte intéractive"
    },
    home: {
        hero_section: {
            heading: "Explorez le monde à travers le temps",
            description:
                "MapMemory est une plateforme gratuite et sans inscription où tout un chacun peut ajouter une épingle à une carte interactive, ajouter une photo, et une date, et la partager avec le reste du monde !",
            explore_map_CTA: "Explorer la carte",
            learn_more_CTA: "En savoir plus",
        },
        features_section: {
            feature_memories: {
                pin_memories: "Épinglez Vos Souvenirs", // TODO maybe change this
                add_and_share:
                    "Ajoutez des épingles à la carte et partagez vos photographies du monde.",
            },
        },
        how_it_works_section: [
            {
                step: "Choisissez un emplacement",
                description:
                    "Trouvez n'importe quel endroit du monde sur la carte intéractive.",
            }, {
                step: "Chargez une photo",
                description:
                    "Partagez la photo du lieu que vous avez choisi et renseignez l'année à laquelle elle fut prise.",
            }, {
                step: "Explorez",
                description:
                    "Une fois votre contribution ajoutée à la carte, partagez-la avec vos amis, et continuez à découvrir les photos des autres utilisateurs !",
            },
        ],
        faq_section: [
            {
                question: "Dois-je créer un compte ?",
                answer: "Non, MapMemory est une plateforme gratuite qui ne nécessite pas d'inscription. Vous pouvez commencer à ajouter vos photos et à explorer la carte interactive dès à présent !",
            },
            {
                question:
                    "Puis-je télécharger plusieurs photos pour un même lieu ?",
                answer: "Actuellement, vous pouvez ajouter une seule photo par épingle. Cependant, vous pouvez ajouter plusieurs épingles au même endroit pour différentes années.",
            },
            {
                question: "Comment trier les photos par année ?",
                answer: "Sur la page de la carte, vous trouverez une option de filtre qui vous permet de trier les épingles par année. Vous pouvez sélectionner une année une plage d'années et voir ce que les utilisateurs ont ajouté.",
            },
        ],
    },
    map_page: {
        form: {
            main_title: "Ajoutez un souvenir",
            fields: {
                title: "Titre",
                title_placeholder: "Choisissez un titre",
                description: "Description",
                description_placeholder: "Décrivez la photo",
                picture: "Photo",
                year: "Année",
                select_year: "Séléctionnez une année",
                month: "Mois (facultatif)",
                select_month: "Sélectionnez un mois",
                all_months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
            },
            submit: "Envoyer !"
        }
    }
};

export default fr;
