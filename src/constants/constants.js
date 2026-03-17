const NAV_LINKS = [
    {
        title: "à propos",
        id: "about"
    },
    {
        id: "art",
        title: "L'art",
    },
    {
        id: "contact",
        title: "Contact",
    },
]


const COCKTAILS_LIST = [
    {
        name: "Chapel Hill Shiraz",
        country: "AU",
        detail: "Bouteille",
        price: "10 €",
    },
    {
        name: "Caten Malbee",
        country: "AU",
        detail: "Bouteille",
        price: "49 €",
    },
    {
        name: "Rhino Pale Ale",
        country: "CA",
        detail: "750 ml",
        price: "20 €",
    },
    {
        name: "Guinness Irlandaise",
        country: "IE",
        detail: "600 ml",
        price: "29 €",
    },
];

const MOCKTAILS_LIST = [
    {
        name: "Floraison Tropicale",
        country: "US",
        detail: "Bouteille",
        price: "10 €",
    },
    {
        name: "Menthe Fruit de la Passion",
        country: "US",
        detail: "Bouteille",
        price: "49 €",
    },
    {
        name: "Éclat d'Agrumes",
        country: "CA",
        detail: "750 ml",
        price: "20 €",
    },
    {
        name: "Fizz à la Lavande",
        country: "IE",
        detail: "600 ml",
        price: "29 €",
    },
];


const FEATURE_LIST = [
    "Assemblages parfaitement équilibrés",
    "Garnitures réalisées à la perfection",
    "Toujours bien frais",
    "Shakés et mélangés avec expertise",
];

const GOOD_LIST = [
    "Ingrédients soigneusement sélectionnés",
    "Techniques signature",
    "L’art du bartending en action",
    "Saveurs fraîchement pilées",
];

const STORE_INFO = {
    heading: "Où nous trouver",
    subheading: "Visiter notre bar",
    contactHeading: "Nous contacter",
    address: "7 rue Charles de Gaulle, 66000 Perpignan",
    contact: {
        phone: "+337 68 15 29 77",
        email: "contact@digitalis-studio.fr",
    },
};

const OPENING_HOURS = [
    { day: "Lun–Jeu", time: "11h00 – 00h00" },
    { day: "Ven", time: "11h00 – 02h00" },
    { day: "Sam", time: "09h00 – 02h00" },
    { day: "Dim", time: "09h00 – 01h00" },
];

const SOCIALS = [
    {
        name: "Instagram",
        icon: "/images/insta.png",
        url: "#",
    },
    {
        name: "X (Twitter)",
        icon: "/images/x.png",
        url: "#",
    },
    {
        name: "Facebook",
        icon: "/images/fb.png",
        url: "#",
    },
];

const COCKTAILS_SLIDER_LIST = [
    {
        id: 1,
        name: "Mojito Classique",
        image: "/images/drink1.png",
        title: "Fraîcheur intense et équilibre parfait",
        description:
            "Le Mojito classique associe rhum blanc, citron vert, menthe fraîche et eau pétillante. Un cocktail rafraîchissant et parfaitement équilibré, idéal pour les journées ensoleillées.",
    },
    {
        id: 2,
        name: "Mojito Framboise",
        image: "/images/drink2.png",
        title: "Une touche fruitée irrésistible",
        description:
            "Le Mojito framboise revisite le classique avec des framboises fraîches pour une note sucrée et acidulée. Léger, fruité et ultra rafraîchissant.",
    },
    {
        id: 3,
        name: "Brise Violette",
        image: "/images/drink3.png",
        title: "Délicat, floral et envoûtant",
        description:
            "La Brise Violette mêle des notes florales subtiles à une base fraîche et légère. Un cocktail élégant, parfait pour une expérience douce et raffinée.",
    },
    {
        id: 4,
        name: "Mojito Curaçao",
        image: "/images/drink4.png",
        title: "Exotique et vibrant",
        description:
            "Le Mojito Curaçao apporte une touche tropicale avec sa liqueur bleue aux notes d’agrumes. Une version colorée et originale du grand classique.",
    },
];

export {
    NAV_LINKS,
    COCKTAILS_LIST,
    MOCKTAILS_LIST,
    FEATURE_LIST,
    GOOD_LIST,
    OPENING_HOURS,
    STORE_INFO,
    SOCIALS,
    COCKTAILS_SLIDER_LIST,
};
