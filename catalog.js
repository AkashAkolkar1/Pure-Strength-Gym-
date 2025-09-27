  // Fields: id, name, brand, price, mrp, tag, off, img, desc, variants:{flavour:[]|null}, rating, stock, group
  // group can be: 'strength' | 'gain' | 'balance' | 'all' to support your BMI filter routing
  window.catalog = [
    {
      id: "p4",
      name: "Raw Whey Protein 100% 908g",
      brand: "Pure Strength",
      price: 1899, mrp: 2699, tag: "protein", off: "30% off",
      img: "./assets/protein img/Pure_Strength_protein(1).png",
      desc: "Fast-absorbing whey concentrate with 24g protein per scoop, no added sugar.",
      variants: { flavour: ["Unflavoured","Chocolate","Vanilla","Chocolate Hazelnut"] },
      rating: 4.4, stock: true, group: "strength"
    },
    {
      id: "p9",
      name: "Pure Strength 100% Whey Protein",
      brand: "Pure Strength",
      price: 2949, mrp: 7000, tag: "protein", off: "58% off",
      img: "./assets/protein img/Pure_Strength_protein(1).png",
      desc: "Fast‑digesting whey concentrate designed for daily muscle recovery and lean mass support after intense training sessions. Each serving delivers high‑quality protein with low sugar. Mixes smoothly without clumps; ideal post‑workout or as a daytime protein top‑up.",
      variants: { flavour: ["Unflavoured","Chocolate","Vanilla","Chocolate Hazelnut"] },
      rating: 4.6, stock: true, group: "strength"
    },
    {
      id: "c1",
      name: "Creatine Monohydrate 250g (Micronized)",
      brand: "Pure Strength",
      price: 899, mrp: 1499, tag: "creatine", off: "40% off",
      img: "assets/Creatine_image.png",
      desc: "Micronized particles dissolve better for a smoother, grit‑free drink. Clinically backed to increase strength, power output, and training volume. Unflavoured and stack‑friendly.",
      variants: { flavour: ["Unflavoured","Fruit Fusion","Citrus Blast","Orange"] },
      rating: 4.7, stock: true, group: "strength"
    },
    {
      id: "p10",
      name: "OptiMax Whey Isolate 90%",
      brand: "Pure Strength",
      price: 3499, mrp: 5999, tag: "protein", off: "42% off",
      img: "./assets/protein img/Pure_Strength_protein(1).png",
      desc: "Ultra‑filtered isolate with minimal carbs/fats for lean phases. Rapid absorption to kick‑start MPS immediately after training.",
      variants: { flavour: ["Unflavoured","Chocolate","Vanilla","Chocolate Hazelnut"] },
      rating: 4.5, stock: true, group: "strength"
    },
    {
      id: "a6",
      name: "Shaker Bottle 700ml",
      brand: "Pure Strength",
      price: 349, mrp: 599, tag: "accessory", off: "42% off",
      img: "assets/Shaker Bottle 700ml.png",
      desc: "Leak‑proof cap and flip spout. Mixer breaks up clumps for smooth shakes. Measurement marks and durable, easy‑clean design.",
      variants: { flavour: null },
      rating: 4.2, stock: true, group: "all"
    },
    {
      id: "p11",
      name: "Grass-Fed Whey Concentrate 80%",
      brand: "Pure Strength",
      price: 2199, mrp: 3999, tag: "protein", off: "45% off",
      img: "./assets/protein img/Pure_Strength_protein(1).png",
      desc: "Balanced amino profile with creamy texture. Steady release suitable post‑workout or between meals. Great cost‑to‑quality.",
      variants: { flavour: ["Unflavoured","Chocolate","Vanilla","Chocolate Hazelnut"] },
      rating: 4.4, stock: true, group: "strength"
    },
    {
      id: "a2",
      name: "Weightlifting Belt (Leather)",
      brand: "Pure Strength",
      price: 1799, mrp: 2999, tag: "accessory", off: "40% off",
      img: "assets/Weightlifting Belt (Leather).png",
      desc: "Thick leather belt provides firm 360° bracing. Single‑prong buckle for precise tightness. Breaks in to mold to the torso.",
      variants: { flavour: null },
      rating: 4.3, stock: true, group: "strength"
    },
    {
      id: "p12",
      name: "Hydro Whey Ultra Fast Absorb",
      brand: "Pure Strength",
      price: 4299, mrp: 7999, tag: "protein", off: "46% off",
      img: "./assets/protein img/Pure_Strength_protein(1).png",
      desc: "Hydrolyzed whey peptides for the quickest absorption; ideal immediately post‑training and high‑volume programs.",
      variants: { flavour: ["Unflavoured","Chocolate","Vanilla","Chocolate Hazelnut"] },
      rating: 4.6, stock: true, group: "strength"
    },
    {
      id: "p13",
      name: "Whey Blend (Isolate + Concentrate)",
      brand: "Pure Strength",
      price: 2599, mrp: 4999, tag: "protein", off: "48% off",
      img: "./assets/protein img/Pure_Strength_protein(1).png",
      desc: "Balanced fast uptake and sustained release for satiety and recovery. Versatile any‑time protein.",
      variants: { flavour: ["Unflavoured","Chocolate","Vanilla","Chocolate Hazelnut"] },
      rating: 4.5, stock: true, group: "strength"
    },
    {
      id: "p14",
      name: "Casein Night Protein 1kg",
      brand: "Pure Strength",
      price: 2899, mrp: 5599, tag: "protein", off: "48% off",
      img: "./assets/protein img/Pure_Strength_protein(1).png",
      desc: "Slow‑release protein for overnight recovery; dessert‑like texture and great satiety.",
      variants: { flavour: ["Unflavoured","Chocolate","Vanilla","Chocolate Hazelnut"] },
      rating: 4.4, stock: true, group: "balance"
    },
    {
      id: "p15",
      name: "Vegan Plant Protein (Pea + Rice)",
      brand: "Pure Strength",
      price: 1999, mrp: 3699, tag: "protein", off: "46% off",
      img: "./assets/protein img/Pure_Strength_protein(1).png",
      desc: "Complete amino profile, dairy‑free digestion. Smooth mouthfeel; great in water or non‑dairy milk.",
      variants: { flavour: ["Unflavoured","Chocolate","Vanilla","Chocolate Hazelnut"] },
      rating: 4.3, stock: true, group: "balance"
    },
    {
      id: "c2",
      name: "Creatine Monohydrate 500g",
      brand: "Pure Strength",
      price: 1499, mrp: 2499, tag: "creatine", off: "40% off",
      img: "assets/Creatine_image.png",
      desc: "Value pack for long progressive blocks. Supports ATP regeneration for repeated efforts. Neutral taste.",
      variants: { flavour: ["Unflavoured","Fruit Fusion","Citrus Blast","Orange"] },
      rating: 4.6, stock: true, group: "strength"
    },
    {
      id: "c3",
      name: "Creatine HCL 150g",
      brand: "Pure Strength",
      price: 1299, mrp: 2199, tag: "creatine", off: "41% off",
      img: "assets/Creatine_image.png",
      desc: "Highly soluble HCL form with small serving size. Mixes instantly and sits light before training.",
      variants: { flavour: ["Unflavoured","Fruit Fusion","Citrus Blast","Orange"] },
      rating: 4.4, stock: true, group: "strength"
    },
    {
      id: "c4",
      name: "Creapure Certified Monohydrate 300g",
      brand: "Pure Strength",
      price: 1899, mrp: 3299, tag: "creatine", off: "42% off",
      img: "assets/Creatine_image.png",
      desc: "Premium monohydrate manufactured to stringent purity standards. Trusted by athletes for consistency.",
      variants: { flavour: ["Unflavoured","Fruit Fusion","Citrus Blast","Orange"] },
      rating: 4.8, stock: true, group: "strength"
    },
    {
      id: "c5",
      name: "Creatine Gummies (60 count)",
      brand: "Pure Strength",
      price: 999, mrp: 1799, tag: "creatine", off: "44% off",
      img: "assets/Creatine_image.png",
      desc: "Convenient pre‑measured servings; travel‑friendly. Great taste without compromising goals.",
      variants: { flavour: ["Unflavoured","Fruit Fusion","Citrus Blast","Orange"] },
      rating: 4.2, stock: true, group: "strength"
    },
    {
      id: "c6",
      name: "Creatine Monohydrate Sachets (30)",
      brand: "Pure Strength",
      price: 699, mrp: 1299, tag: "creatine", off: "46% off",
      img: "assets/Creatine_image.png",
      desc: "Single‑serve sachets for consistent dosing wherever training happens. No mess—tear, mix, go.",
      variants: { flavour: ["Unflavoured","Fruit Fusion","Citrus Blast","Orange"] },
      rating: 4.3, stock: true, group: "strength"
    },
    {
      id: "d1",
      name: "Rubber Hex Dumbbell 2.5 kg (Pair)",
      brand: "Pure Strength",
      price: 1499, mrp: 2199, tag: "dumbbell", off: "32% off",
      img: "assets/Dumble_img.png",
      desc: "Beginner‑friendly weight for rehab and mobility drills. Hex shape prevents rolling; durable rubber coating.",
      variants: { flavour: null },
      rating: 4.1, stock: true, group: "strength"
    },
    {
      id: "d2",
      name: "Rubber Hex Dumbbell 5 kg (Pair)",
      brand: "Pure Strength",
      price: 2699, mrp: 3999, tag: "dumbbell", off: "33% off",
      img: "assets/Dumble_img.png",
      desc: "Versatile weight for upper‑body circuits and home workouts. Resilient rubber heads; balanced design.",
      variants: { flavour: null },
      rating: 4.3, stock: true, group: "strength"
    },
    {
      id: "d3",
      name: "Rubber Hex Dumbbell 7.5 kg (Pair)",
      brand: "Pure Strength",
      price: 3499, mrp: 5199, tag: "dumbbell", off: "33% off",
      img: "assets/Dumble_img.png",
      desc: "Bridge weight for progressive strength. Anti‑roll geometry; textured handle for confident grip.",
      variants: { flavour: null },
      rating: 4.4, stock: true, group: "strength"
    },
    {
      id: "d4",
      name: "Rubber Hex Dumbbell 10 kg (Pair)",
      brand: "Pure Strength",
      price: 4499, mrp: 6499, tag: "dumbbell", off: "31% off",
      img: "assets/Dumble_img.png",
      desc: "Go‑to load for compound dumbbell training. Shock‑absorbing rubber protects equipment & floors.",
      variants: { flavour: null },
      rating: 4.5, stock: true, group: "strength"
    },
    {
      id: "d5",
      name: "Adjustable Dumbbell 24 kg (Single)",
      brand: "Pure Strength",
      price: 8999, mrp: 13999, tag: "dumbbell", off: "36% off",
      img: "assets/Adjustable Dumbbell 24 kg (Single).png",
      desc: "Dial system replaces a rack in one compact unit. Rapid changes; secure locking; great for apartments.",
      variants: { flavour: null },
      rating: 4.6, stock: true, group: "strength"
    },
    {
      id: "d6",
      name: "Neoprene Dumbbell Set (3–8 LB, 6 pcs)",
      brand: "Pure Strength",
      price: 2999, mrp: 4499, tag: "dumbbell", off: "33% off",
      img: "assets/Neoprene Dumbbell Set (3–5 LB, 6 pcs).png",
      desc: "Color‑coded set for HIIT, Pilates, rehab. Soft neoprene finish and compact storage.",
      variants: { flavour: null },
      rating: 4.2, stock: true, group: "balance"
    },
    {
      id: "b1",
      name: "Olympic Barbell 20 kg (7ft)",
      brand: "Pure Strength",
      price: 8999, mrp: 11999, tag: "barbell", off: "25% off",
      img: "assets/barbell_img.png",
      desc: "28 mm shaft with responsive whip. Medium knurl. Rotating sleeves for smooth lifts.",
      variants: { flavour: null },
      rating: 4.5, stock: true, group: "strength"
    },
    {
      id: "b2",
      name: "Olympic Barbell 15 kg (6.5ft)",
      brand: "Pure Strength",
      price: 7999, mrp: 10999, tag: "barbell", off: "27% off",
      img: "assets/barbell_img.png",
      desc: "25 mm shaft for smaller grip diameter. Versatile length for compact spaces.",
      variants: { flavour: null },
      rating: 4.4, stock: true, group: "strength"
    },
    {
      id: "b3",
      name: "EZ Curl Bar (Olympic)",
      brand: "Pure Strength",
      price: 4499, mrp: 6999, tag: "barbell", off: "36% off",
      img: "assets/EZ Curl Bar (Olympic).png",
      desc: "Angled grips reduce wrist strain. Olympic sleeves fit bumper or change plates.",
      variants: { flavour: null },
      rating: 4.3, stock: true, group: "strength"
    },
    {
      id: "b4",
      name: "Bumper Plates Pair 10 kg",
      brand: "Pure Strength",
      price: 4599, mrp: 6999, tag: "barbell", off: "34% off",
      img: "assets/Bumper Plates Pair.png",
      desc: "Dense rubber construction safe for controlled drops. Steel hubs; low bounce.",
      variants: { flavour: null },
      rating: 4.4, stock: true, group: "strength"
    },
    {
      id: "b5",
      name: "Bumper Plates Pair 15 kg",
      brand: "Pure Strength",
      price: 5599, mrp: 8499, tag: "barbell", off: "34% off",
      img: "assets/Bumper_Plates_Pair_15kg.png",
      desc: "Tough training plates for daily lifting. Consistent thickness for bar geometry.",
      variants: { flavour: null },
      rating: 4.5, stock: true, group: "strength"
    },
    {
      id: "b6",
      name: "Change Plates Set (1.25–2.5 kg)",
      brand: "Pure Strength",
      price: 2999, mrp: 4499, tag: "barbell", off: "33% off",
      img: "assets/Change Plates Set (1.25–2.5 kg).png",
      desc: "Micro‑loading to break plateaus. Durable coating; snug fit; precise progression.",
      variants: { flavour: null },
      rating: 4.2, stock: true, group: "strength"
    },
    {
      id: "a1",
      name: "Lifting Straps (Pair)",
      brand: "Pure Strength",
      price: 499, mrp: 899, tag: "accessory", off: "44% off",
      img: "assets/lifting_strapes.png",
      desc: "Reinforced cotton webbing supports grip on heavy pulls. Quick wrap design; compact and durable.",
      variants: { flavour: null },
      rating: 4.4, stock: true, group: "strength"
    },
    {
      id: "a3",
      name: "Knee Sleeves (5mm)",
      brand: "Pure Strength",
      price: 1499, mrp: 2499, tag: "accessory", off: "40% off",
      img: "assets/Knee Sleeves (5mm).png",
      desc: "Neoprene sleeves offer warmth and proprioceptive support. 5 mm balances mobility with stability.",
      variants: { flavour: null },
      rating: 4.3, stock: true, group: "strength"
    },
    {
      id: "a4",
      name: "Wrist Wraps (12in)",
      brand: "Pure Strength",
      price: 399, mrp: 699, tag: "accessory", off: "43% off",
      img: "assets/Wrist Wraps (12in).png",
      desc: "Elastic wraps stabilize wrists in presses and overhead work. Adjustable tension; compact.",
      variants: { flavour: null },
      rating: 4.2, stock: true, group: "strength"
    },
    {
      id: "a5",
      name: "Gym Gloves (Half-Finger)",
      brand: "Pure Strength",
      price: 699, mrp: 1199, tag: "accessory", off: "42% off",
      img: "assets/Gym Gloves (Half-Finger).png",
      desc: "Breathable mesh backs with padded palms. Secure closure; great for beginners and outdoor training.",
      variants: { flavour: null },
      rating: 4.1, stock: true, group: "balance"
    }
  ];

