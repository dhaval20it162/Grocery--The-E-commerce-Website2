const productsData = [
     {
        id: 1,
        tag: "hero-product",
        tagline: "AASHIRVAAD promises you only the most delightful rotis straight from your kitchen.",
        heroImage: "/images/products/herobanner.png",
        images: [
            "/images/products/herobanner.png",
            "/images/products/herobanner1.jpg",
            "/images/products/herobanner2.jpg",
            "/images/products/herobanner3.jpg",
        ],
        brand: "Aashirvaad",
        title: "Aashirvaad atta",
        info: "Aashirvaad atta",
        category: "Rice and Atta",
        type: "packaged Food",
        connectivity: "Wireless",
        finalPrice: 350,
        originalPrice: 500,
        quantity: 1,
        ratings: 1234,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 2,
        tag: "featured-product",
        images: [
            "/images/products/atta101.png",
            "/images/products/atta2.webp",
            "/images/products/atta3.jpg",
            "/images/products/atta4.jpg"
        ],
        brand: "aashirvaad",
        title: "aashirvaad shudh  atta",
        info: "aashirvaad shudh chakki attad",
        category: "Rice and Atta",
        type: "Packaged",
        connectivity: "Wireless",
        finalPrice: 315,
        originalPrice: 450,
        quantity: 1,
        ratings: 1321,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 3,
        tag: "hero-product",
        tagline: "Featherweight for comfort all-day.",
        heroImage: "/images/products/herobanneroil.jpg",
        images: [
            "/images/products/herobanneroil.jpg",
            "/images/products/oil2.webp",
            "/images/products/oil3.webp",
            "/images/products/oil4.jpg",
        ],
        brand: "Fortune",
        title: "Fortune oils",
        info: "Fortune oils",
        category: "Oils",
        type: "packaged",
        connectivity: "Wireless",
        finalPrice: 1099,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1244,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 4,
        images: [
            "/images/products/patanjalihoney.jpg",
            "/images/products/patanjali honey side view 2.jpg",
            "/images/products/3.webp",
            "/images/products/4.jpg",
        ],
        brand: "patanjali",
        title: "patanjali honey",
        info: "patanjali honey",
        category: "Honey",
        type: "packed",
        connectivity: "Wired",
        finalPrice: 449,
        originalPrice: 999,
        quantity: 1,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 5,
        images: [
            "/images/products/patanjalighee.jpg",
            "/images/products/ghee2.webp",
            "/images/products/ghee3.jpg",
            "/images/products/ghee4.jpg",
        ],
        brand: "patanjali",
        title: "patanjali ghee",
        info: "patanjali ghee",
        category: "Ghee",
        type: "packaged",
        connectivity: "Bluetooth & Wired",
        finalPrice: 499,
        originalPrice: 799,
        quantity: 1,
        ratings: 1563,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 6,
        images: [
            "/images/products/patanjalicombo.jpg",
            "/images/products/combo2.webp",
            "/images/products/combo3.webp",
            "/images/products/combo4.jpg",
        ],
        brand: "patanjali",
        title: "patanjali combo",
        info: "biscuit combo pack",
        category: "Combo",
        type: "packaged",
        connectivity: "Wireless",
        finalPrice: 588,
        originalPrice: 988,
        quantity: 1,
        ratings: 836,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 7,
        tag: "hero-product",
        tagline: "Give your favourite music a boost.",
        heroImage:  "/images/products/bannerheropatanjali.jpg",
        images: [
            "/images/products/bannerheropatanjali.jpg",
            "/images/products/products2.jpg",
            "/images/products/products3.jpg",
            "/images/products/products4.jpg",
        ],
        brand: "patanjali",
        title: "patanjali products",
        info: "patanjali best NO.1 products",
        category: "Combo",
        type: "packaged",
        connectivity: "Wireless",
        finalPrice: 500,
        originalPrice: 1000,
        quantity: 1,
        ratings: 679,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 8,
        tag: "featured-product",
        images: [
            "/images/products/patanjalirasgula.jpg",
            "/images/products/rasgulla2.jpg",
            "/images/products/rasgulla3.jpg",
            "/images/products/rasgulla4.jpg",
        ],
        brand: "patanjali",
        title: "patanjali rasgulla",
        info: "best rasgulla by patanjali",
        category: "Rasgulla",
        type: "packaged",
        connectivity: "Wireless",
        finalPrice: 584,
        originalPrice: 874,
        quantity: 1,
        ratings: 755,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 9,
        tag: "featured-product",
        images: [
            "/images/products/patanjaliwheat.jpg",
            "/images/products/wheat2.webp",
            "/images/products/wheat3.jpg",
            "/images/products/wheat4.jpg",
        ],
        brand: "patanjali",
        title: "patanjali whole wheat flour",
        info: "patanjali whole wheat flour",
        category: "Rice and Atta",
        type: "packaged",
        connectivity: "Wireless",
        finalPrice: 200,
        originalPrice: 500,
        quantity: 1,
        ratings: 1464,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 10,
        images: [
            "/images/products/fortunerice.jpg",
            "/images/products/rice2.jpg",
            "/images/products/rice3.jpg",
            "/images/products/rice4.jpg",
        ],
        brand: "fortune",
        title: "fortune rice",
        info: "fortune rice biryani special,basmati",
        category: "Rice and Atta",
        type: "packaged",
        connectivity: "Wireless",
        finalPrice: 285,
        originalPrice: 350 ,
        quantity: 1,
        ratings: 801,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 11,
        images: [
            "/images/products/fortunesugar.jpg",
            "/images/products/sugar2.jpg",
            "/images/products/sugar3.webp",
            "/images/products/sugar4.jpg",
        ],
        brand: "Fortune ",
        title: "Fortune sugar",
        info: "No.1 sugar",
        category: "Sugar",
        type: "packaged",
        connectivity: "Wireless",
        finalPrice: 40,
        originalPrice: 60,
        quantity: 1,
        ratings: 382,
        rateCount: 3,
        path: "/product-details/",
    },
    {
        id: 12,
        images: [
            "/images/products/fortuneredchilli.jpg",
            "/images/products/fortuneredchilli.jpg",
            "/images/products/fortuneredchilli.jpg",
            "/images/products/fortuneredchilli.jpg",
        ],
        brand: "Fortune",
        title: "Fortune red chilli",
        info: "made for original red chilli",
        category: "Spices",
        type: "spicies",
        connectivity: "Wired",
        finalPrice: 87,
        originalPrice: 110,
        quantity: 1,
        ratings: 1178,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 13,
        tag: "featured-product",
        images: [
            "/images/products/fortuneturmeric.jpg",
            "/images/products/fortuneturmeric.jpg",
            "/images/products/fortuneturmeric.jpg",
            "/images/products/fortuneturmeric.jpg",
        ],
        brand: "Fortune",
        title: "Fortune turmeric",
        info: "Fortune turmeric",
        category: "Spices",
        type: "packaged",
        connectivity: "Wired",
        finalPrice: 79,
        originalPrice: 129,
        quantity: 1,
        ratings: 1144,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 14,
        tag: "featured-product",
        images: [
            "/images/products/aarshirwadsalt.jpg",
            "/images/products/aarshirwadsalt.jpg",
            "/images/products/aarshirwadsalt.jpg",
            "/images/products/aarshirwadsalt.jpg",
        ],
        brand: "Aarshirwad",
        title: "Aarshirwad Salt ",
        info: "iodised salt",
        category: "Spices",
        type: "packaged",
        connectivity: "Wireless",
        finalPrice: 27,
        originalPrice: 40,
        quantity: 1,
        ratings: 1340,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 15,
        images: [
            "/images/products/aarshirwadmultigrain.jpg",
            "/images/products/aarshirwadmultigrain.jpg",
            "/images/products/aarshirwadmultigrain.jpg",
            "/images/products/aarshirwadmultigrain.jpg",
        ],
        brand: "Aarshirwad ",
        title: "Aarshirwad Multi Grain Atta",
        info: "Aarshirwad Multi Grain Atta 5 kg pack",
        category: "Rice and Atta",
        type: "Rice and Atta",
        connectivity: "Wireless",
        finalPrice: 500,
        originalPrice: 780,
        quantity: 1,
        ratings: 853,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 16,
        images: [
            "/images/products/patanjalijavar.jpg",
            "/images/products/patanjalijavar.jpg",
            "/images/products/patanjalijavar.jpg",
            "/images/products/patanjalijavar.jpg",
        ],
        brand: "Patanjali",
        title: "Patanjali javar",
        info: "ultimate javar atta",
        category: "Rice and Atta",
        type: "Rice and Atta",
        connectivity: "Wireless",
        finalPrice: 350,
        originalPrice: 499,
        quantity: 1,
        ratings: 364,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 17,
        images: [
            "/images/products/fortunechanadal.png",
            "/images/products/fortunechanadal.png",
            "/images/products/fortunechanadal.png",
            "/images/products/fortunechanadal.png",
        ],
        brand: "frotune",
        title: "fortune Chana Dal",
        info: "1 KG Chana Dal",
        category: "Dals",
        type: "packaged",
        connectivity: "Wireless",
        finalPrice: 500,
        originalPrice: 590,
        quantity: 1,
        ratings: 1011,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 18,
        images: [
            "/images/products/patanjalisattu.jpg",
            "/images/products/patanjalisattu.jpg",
            "/images/products/patanjalisattu.jpg",
            "/images/products/patanjalisattu.jpg",
        ],
        brand: "Patanjali",
        title: "Patanjali Sattu",
        info: "Sattu made form best chanadal",
        category: "Dals",
        type: "packaged",
        connectivity: "Wired",
        finalPrice: 85,
        originalPrice: 105,
        quantity: 1,
        ratings: 530,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 19,
        images: [
            "/images/products/patanjalimainda.jpg",
            "/images/products/patanjalimainda.jpg",
            "/images/products/patanjalimainda.jpg",
            "/images/products/patanjalimainda.jpg",
        ],
        brand: "PAtanjali",
        title: "Patanjali Mainda",
        info: "1 KG mainda",
        category: "Rice and Atta",
        type: "packaged",
        connectivity: "Wireless",
        finalPrice: 50,
        originalPrice: 58,
        quantity: 1,
        ratings: 474,
        rateCount: 4,
        path: "/product-details/",
    },
];

export default productsData;