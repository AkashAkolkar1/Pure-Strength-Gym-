  // Fields: id, name, brand, price, mrp, tag, off, img, desc, variants:{flavour:[]|null}, rating, stock, group
  // group can be: 'strength' | 'gain' | 'balance' | 'all' to support your BMI filter routing
  window.catalog = [
    {
      id: "p4",
      name: "Raw Whey Protein 100% 908g",
      brand: "HealthyU",
      price: 1899, mrp: 2699, tag: "protein", off: "30% off",
      img: "assets/protein_powder.png",
      desc: "Fast-absorbing whey concentrate with 24g protein per scoop, no added sugar.",
      variants: { flavour: ["Unflavoured","Chocolate","Vanilla","Chocolate Hazelnut"] },
      rating: 4.4, stock: true, group: "strength"
    },
    {
      id: "p9",
      name: "HealthyU 100% Whey Protein",
      brand: "HealthyU",
      price: 2949, mrp: 7000, tag: "protein", off: "58% off",
      img: "assets/protein_powder.png",
      desc: "Fast‑digesting whey concentrate designed for daily muscle recovery and lean mass support after intense training sessions. Each serving delivers high‑quality protein with low sugar. Mixes smoothly without clumps; ideal post‑workout or as a daytime protein top‑up.",
      variants: { flavour: ["Unflavoured","Chocolate","Vanilla","Chocolate Hazelnut"] },
      rating: 4.6, stock: true, group: "strength"
    },
    {
      id: "c1",
      name: "Creatine Monohydrate 250g (Micronized)",
      brand: "HealthyU",
      price: 899, mrp: 1499, tag: "creatine", off: "40% off",
      img: "assets/Creatine_image.png",
      desc: "Micronized particles dissolve better for a smoother, grit‑free drink. Clinically backed to increase strength, power output, and training volume. Unflavoured and stack‑friendly.",
      variants: { flavour: ["Unflavoured","Fruit Fusion","Citrus Blast","Orange"] },
      rating: 4.7, stock: true, group: "strength"
    },
    {
      id: "p10",
      name: "OptiMax Whey Isolate 90%",
      brand: "HealthyU",
      price: 3499, mrp: 5999, tag: "protein", off: "42% off",
      img: "assets/protein_powder.png",
      desc: "Ultra‑filtered isolate with minimal carbs/fats for lean phases. Rapid absorption to kick‑start MPS immediately after training.",
      variants: { flavour: ["Unflavoured","Chocolate","Vanilla","Chocolate Hazelnut"] },
      rating: 4.5, stock: true, group: "strength"
    },
    {
      id: "a6",
      name: "Shaker Bottle 700ml",
      brand: "HealthyU",
      price: 349, mrp: 599, tag: "accessory", off: "42% off",
      img: "assets/Shaker Bottle 700ml.png",
      desc: "Leak‑proof cap and flip spout. Mixer breaks up clumps for smooth shakes. Measurement marks and durable, easy‑clean design.",
      variants: { flavour: null },
      rating: 4.2, stock: true, group: "all"
    },
    {
      id: "p11",
      name: "Grass-Fed Whey Concentrate 80%",
      brand: "HealthyU",
      price: 2199, mrp: 3999, tag: "protein", off: "45% off",
      img: "assets/protein_powder.png",
      desc: "Balanced amino profile with creamy texture. Steady release suitable post‑workout or between meals. Great cost‑to‑quality.",
      variants: { flavour: ["Unflavoured","Chocolate","Vanilla","Chocolate Hazelnut"] },
      rating: 4.4, stock: true, group: "strength"
    },
    {
      id: "a2",
      name: "Weightlifting Belt (Leather)",
      brand: "HealthyU",
      price: 1799, mrp: 2999, tag: "accessory", off: "40% off",
      img: "assets/Weightlifting Belt (Leather).png",
      desc: "Thick leather belt provides firm 360° bracing. Single‑prong buckle for precise tightness. Breaks in to mold to the torso.",
      variants: { flavour: null },
      rating: 4.3, stock: true, group: "strength"
    },
    {
      id: "p12",
      name: "Hydro Whey Ultra Fast Absorb",
      brand: "HealthyU",
      price: 4299, mrp: 7999, tag: "protein", off: "46% off",
      img: "assets/protein_powder.png",
      desc: "Hydrolyzed whey peptides for the quickest absorption; ideal immediately post‑training and high‑volume programs.",
      variants: { flavour: ["Unflavoured","Chocolate","Vanilla","Chocolate Hazelnut"] },
      rating: 4.6, stock: true, group: "strength"
    },
    {
      id: "p13",
      name: "Whey Blend (Isolate + Concentrate)",
      brand: "HealthyU",
      price: 2599, mrp: 4999, tag: "protein", off: "48% off",
      img: "assets/protein_powder.png",
      desc: "Balanced fast uptake and sustained release for satiety and recovery. Versatile any‑time protein.",
      variants: { flavour: ["Unflavoured","Chocolate","Vanilla","Chocolate Hazelnut"] },
      rating: 4.5, stock: true, group: "strength"
    },
    {
      id: "p14",
      name: "Casein Night Protein 1kg",
      brand: "HealthyU",
      price: 2899, mrp: 5599, tag: "protein", off: "48% off",
      img: "assets/protein_powder.png",
      desc: "Slow‑release protein for overnight recovery; dessert‑like texture and great satiety.",
      variants: { flavour: ["Unflavoured","Chocolate","Vanilla","Chocolate Hazelnut"] },
      rating: 4.4, stock: true, group: "balance"
    },
    {
      id: "p15",
      name: "Vegan Plant Protein (Pea + Rice)",
      brand: "HealthyU",
      price: 1999, mrp: 3699, tag: "protein", off: "46% off",
      img: "assets/protein_powder.png",
      desc: "Complete amino profile, dairy‑free digestion. Smooth mouthfeel; great in water or non‑dairy milk.",
      variants: { flavour: ["Unflavoured","Chocolate","Vanilla","Chocolate Hazelnut"] },
      rating: 4.3, stock: true, group: "balance"
    },
    {
      id: "c2",
      name: "Creatine Monohydrate 500g",
      brand: "HealthyU",
      price: 1499, mrp: 2499, tag: "creatine", off: "40% off",
      img: "assets/Creatine_image.png",
      desc: "Value pack for long progressive blocks. Supports ATP regeneration for repeated efforts. Neutral taste.",
      variants: { flavour: ["Unflavoured","Fruit Fusion","Citrus Blast","Orange"] },
      rating: 4.6, stock: true, group: "strength"
    },
    {
      id: "c3",
      name: "Creatine HCL 150g",
      brand: "HealthyU",
      price: 1299, mrp: 2199, tag: "creatine", off: "41% off",
      img: "assets/Creatine_image.png",
      desc: "Highly soluble HCL form with small serving size. Mixes instantly and sits light before training.",
      variants: { flavour: ["Unflavoured","Fruit Fusion","Citrus Blast","Orange"] },
      rating: 4.4, stock: true, group: "strength"
    },
    {
      id: "c4",
      name: "Creapure Certified Monohydrate 300g",
      brand: "HealthyU",
      price: 1899, mrp: 3299, tag: "creatine", off: "42% off",
      img: "assets/Creatine_image.png",
      desc: "Premium monohydrate manufactured to stringent purity standards. Trusted by athletes for consistency.",
      variants: { flavour: ["Unflavoured","Fruit Fusion","Citrus Blast","Orange"] },
      rating: 4.8, stock: true, group: "strength"
    },
    {
      id: "c5",
      name: "Creatine Gummies (60 count)",
      brand: "HealthyU",
      price: 999, mrp: 1799, tag: "creatine", off: "44% off",
      img: "assets/Creatine_image.png",
      desc: "Convenient pre‑measured servings; travel‑friendly. Great taste without compromising goals.",
      variants: { flavour: ["Unflavoured","Fruit Fusion","Citrus Blast","Orange"] },
      rating: 4.2, stock: true, group: "strength"
    },
    {
      id: "c6",
      name: "Creatine Monohydrate Sachets (30)",
      brand: "HealthyU",
      price: 699, mrp: 1299, tag: "creatine", off: "46% off",
      img: "assets/Creatine_image.png",
      desc: "Single‑serve sachets for consistent dosing wherever training happens. No mess—tear, mix, go.",
      variants: { flavour: ["Unflavoured","Fruit Fusion","Citrus Blast","Orange"] },
      rating: 4.3, stock: true, group: "strength"
    },
    {
      id: "d1",
      name: "Rubber Hex Dumbbell 2.5 kg (Pair)",
      brand: "HealthyU",
      price: 1499, mrp: 2199, tag: "dumbbell", off: "32% off",
      img: "assets/Rubber Hex Dumbbell 2.5 kg (Pair).png",
      desc: "Beginner‑friendly weight for rehab and mobility drills. Hex shape prevents rolling; durable rubber coating.",
      variants: { flavour: null },
      rating: 4.1, stock: true, group: "strength"
    },
    {
      id: "d2",
      name: "Rubber Hex Dumbbell 5 kg (Pair)",
      brand: "HealthyU",
      price: 2699, mrp: 3999, tag: "dumbbell", off: "33% off",
      img: "assets/Rubber Hex Dumbbell 5 kg (Pair).png",
      desc: "Versatile weight for upper‑body circuits and home workouts. Resilient rubber heads; balanced design.",
      variants: { flavour: null },
      rating: 4.3, stock: true, group: "strength"
    },
    {
      id: "d3",
      name: "Rubber Hex Dumbbell 7.5 kg (Pair)",
      brand: "HealthyU",
      price: 3499, mrp: 5199, tag: "dumbbell", off: "33% off",
      img: "assets/Rubber Hex Dumbbell 7.5 kg (Pair).png",
      desc: "Bridge weight for progressive strength. Anti‑roll geometry; textured handle for confident grip.",
      variants: { flavour: null },
      rating: 4.4, stock: true, group: "strength"
    },
    {
      id: "d4",
      name: "Rubber Hex Dumbbell 10 kg (Pair)",
      brand: "HealthyU",
      price: 4499, mrp: 6499, tag: "dumbbell", off: "31% off",
      img: "assets/Rubber Hex Dumbbell 10 kg (Pair).png",
      desc: "Go‑to load for compound dumbbell training. Shock‑absorbing rubber protects equipment & floors.",
      variants: { flavour: null },
      rating: 4.5, stock: true, group: "strength"
    },
    {
      id: "d5",
      name: "Adjustable Dumbbell 24 kg (Single)",
      brand: "HealthyU",
      price: 8999, mrp: 13999, tag: "dumbbell", off: "36% off",
      img: "assets/Adjustable Dumbbell 24 kg (Single).png",
      desc: "Dial system replaces a rack in one compact unit. Rapid changes; secure locking; great for apartments.",
      variants: { flavour: null },
      rating: 4.6, stock: true, group: "strength"
    },
    {
      id: "d6",
      name: "Neoprene Dumbbell Set (3–8 LB, 6 pcs)",
      brand: "HealthyU",
      price: 2999, mrp: 4499, tag: "dumbbell", off: "33% off",
      img: "assets/Neoprene Dumbbell Set (3–8 LB, 6 pcs).png",
      desc: "Color‑coded set for HIIT, Pilates, rehab. Soft neoprene finish and compact storage.",
      variants: { flavour: null },
      rating: 4.2, stock: true, group: "balance"
    },
    {
      id: "b1",
      name: "Olympic Barbell 20 kg (7ft)",
      brand: "HealthyU",
      price: 8999, mrp: 11999, tag: "barbell", off: "25% off",
      img: "assets/Olympic Barbell 20 kg (7ft).png",
      desc: "28 mm shaft with responsive whip. Medium knurl. Rotating sleeves for smooth lifts.",
      variants: { flavour: null },
      rating: 4.5, stock: true, group: "strength"
    },
    {
      id: "b2",
      name: "Olympic Barbell 15 kg (6.5ft)",
      brand: "HealthyU",
      price: 7999, mrp: 10999, tag: "barbell", off: "27% off",
      img: "assets/Olympic Barbell 20 kg (7ft).png",
      desc: "25 mm shaft for smaller grip diameter. Versatile length for compact spaces.",
      variants: { flavour: null },
      rating: 4.4, stock: true, group: "strength"
    },
    {
      id: "b3",
      name: "EZ Curl Bar (Olympic)",
      brand: "HealthyU",
      price: 4499, mrp: 6999, tag: "barbell", off: "36% off",
      img: "assets/EZ Curl Bar (Olympic).png",
      desc: "Angled grips reduce wrist strain. Olympic sleeves fit bumper or change plates.",
      variants: { flavour: null },
      rating: 4.3, stock: true, group: "strength"
    },
    {
      id: "b4",
      name: "Bumper Plates Pair 10 kg",
      brand: "HealthyU",
      price: 4599, mrp: 6999, tag: "barbell", off: "34% off",
      img: "assets/Bumper Plates Pair 10 kg.png",
      desc: "Dense rubber construction safe for controlled drops. Steel hubs; low bounce.",
      variants: { flavour: null },
      rating: 4.4, stock: true, group: "strength"
    },
    {
      id: "b5",
      name: "Bumper Plates Pair 15 kg",
      brand: "HealthyU",
      price: 5599, mrp: 8499, tag: "barbell", off: "34% off",
      img: "assets/Bumper Plates Pair 15 kg.png",
      desc: "Tough training plates for daily lifting. Consistent thickness for bar geometry.",
      variants: { flavour: null },
      rating: 4.5, stock: true, group: "strength"
    },
    {
      id: "b6",
      name: "Change Plates Set (2.5–20 kg)",
      brand: "HealthyU",
      price: 2999, mrp: 4499, tag: "barbell", off: "33% off",
      img: "assets/Change Plates Set (1.25–2.5 kg).png",
      desc: "Micro‑loading to break plateaus. Durable coating; snug fit; precise progression.",
      variants: { flavour: null },
      rating: 4.2, stock: true, group: "strength"
    },
    {
      id: "a1",
      name: "Lifting Straps (Pair)",
      brand: "HealthyU",
      price: 499, mrp: 899, tag: "accessory", off: "44% off",
      img: "assets/Lifting Straps (Pair).png",
      desc: "Reinforced cotton webbing supports grip on heavy pulls. Quick wrap design; compact and durable.",
      variants: { flavour: null },
      rating: 4.4, stock: true, group: "strength"
    },
    {
      id: "a3",
      name: "Knee Sleeves (5mm)",
      brand: "HealthyU",
      price: 1499, mrp: 2499, tag: "accessory", off: "40% off",
      img: "assets/Knee Sleeves (5mm).png",
      desc: "Neoprene sleeves offer warmth and proprioceptive support. 5 mm balances mobility with stability.",
      variants: { flavour: null },
      rating: 4.3, stock: true, group: "strength"
    },
    {
      id: "a4",
      name: "Wrist Wraps (12in)",
      brand: "HealthyU",
      price: 399, mrp: 699, tag: "accessory", off: "43% off",
      img: "assets/Wrist Wraps (12in).png",
      desc: "Elastic wraps stabilize wrists in presses and overhead work. Adjustable tension; compact.",
      variants: { flavour: null },
      rating: 4.2, stock: true, group: "strength"
    },
    {
      id: "a5",
      name: "Gym Gloves (Half-Finger)",
      brand: "HealthyU",
      price: 699, mrp: 1199, tag: "accessory", off: "42% off",
      img: "assets/Gym Gloves (Half-Finger).png",
      desc: "Breathable mesh backs with padded palms. Secure closure; great for beginners and outdoor training.",
      variants: { flavour: null },
      rating: 4.1, stock: true, group: "balance"
    },
    {
  id:"g1",
  name:"Mass Gainer 3kg",
  brand:"HealthyU",
  price:2699, mrp:4999, tag:"gainer", off:"46% off",
  img:"assets/Mass_gainer.png",
  desc:"High-calorie blend with balanced carbs and protein to support healthy weight gain and recovery.",
  variants:{ flavour:["Chocolate","Vanilla","Strawberry","Banana"] },
  rating:4.4, stock:true, group:"gain"
},
{
  id:"g2",
  name:"Clean Bulk Gainer 5kg",
  brand:"HealthyU",
  price:4299, mrp:7999, tag:"gainer", off:"46% off",
  img:"assets/Mass_gainer.png",
  desc:"Calorie-dense, maltodextrin-light formula for steady bulking without excessive sugar spikes.",
  variants:{ flavour:["Chocolate","Cookies & Cream","Cafe Mocha"] },
  rating:4.3, stock:true, group:"gain"
},
{
  id:"g3",
  name:"Anabolic Mass Gainer 2.5kg",
  brand:"HealthyU",
  price:2399, mrp:4499, tag:"gainer", off:"47% off",
  img:"assets/Mass_gainer.png",
  desc:"Carb-to-protein ratio tuned for hardgainers; supports strength and size with added vitamins/minerals.",
  variants:{ flavour:["Double Rich Chocolate","Mango","Banana"] },
  rating:4.5, stock:true, group:"gain"
},
{
  id:"g4",
  name:"Serious Bulk 6lb",
  brand:"HealthyU",
  price:3199, mrp:5999, tag:"gainer", off:"47% off",
  img:"assets/Mass_gainer.png",
  desc:"Easy-mixing gainer designed for post-workout or bedtime shakes to drive caloric surplus.",
  variants:{ flavour:["Chocolate","Vanilla Ice Cream"] },
  rating:4.2, stock:true, group:"gain"
},
{
  id:"g5",
  name:"Performance Gainer 3kg",
  brand:"HealthyU",
  price:2899, mrp:5299, tag:"gainer", off:"45% off",
  img:"assets/Mass_gainer.png",
  desc:"Balanced macros with added enzymes for digestion; ideal for beginners aiming steady weight gain.",
  variants:{ flavour:["Chocolate Brownie","Strawberry Milkshake"] },
  rating:4.3, stock:true, group:"gain"
},
{
  id:"g6",
  name:"Elite Mass Gainer 5lb",
  brand:"HealthyU",
  price:2799, mrp:4899, tag:"gainer", off:"43% off",
  img:"assets/Mass_gainer.png",
  desc:"High-calorie formula with complex carbs to sustain energy and support lean mass accrual.",
  variants:{ flavour:["Chocolate","Vanilla","Cookies & Cream"] },
  rating:4.4, stock:true, group:"gain"
},
{
  id:"bd1",
  name:"Multivitamin 60 tabs",
  brand:"HealthyU",
  price:699, mrp:999, tag:"balance", off:"30% off",
  img:"assets/Multivitamin 60 tabs.png",
  desc:"Daily micronutrient support for metabolism, energy, and recovery within a calorie-controlled plan.",
  variants:{ flavour:null },
  rating:4.2, stock:true, group:"balance"
},
{
  id:"bd2",
  name:"Omega-3 Fish Oil 60 caps",
  brand:"HealthyU",
  price:799, mrp:1199, tag:"balance", off:"33% off",
  img:"assets/Omega-3 Fish Oil 60 caps.png",
  desc:"EPA/DHA to support heart health and recovery; complements a balanced calorie deficit diet.",
  variants:{ flavour:null },
  rating:4.4, stock:true, group:"balance"
},
{
  id:"bd3",
  name:"Super Greens Blend 250g",
  brand:"HealthyU",
  price:1199, mrp:1799, tag:"balance", off:"33% off",
  img:"assets/Super Greens Blend 250g.png",
  desc:"Greens, antioxidants, and fiber to support satiety and micronutrient intake during weight management.",
  variants:{ flavour:["Unflavoured","Mint Lemon"] },
  rating:4.1, stock:true, group:"balance"
},
{
  id:"bd4",
  name:"Whole Oats 1kg",
  brand:"HealthyU",
  price:249, mrp:399, tag:"balance", off:"38% off",
  img:"assets/Whole Oats 1kg.png",
  desc:"Low-GI whole grains to stabilize energy and support fullness in calorie-controlled meals.",
  variants:{ flavour:null },
  rating:4.3, stock:true, group:"balance"
},
{
  id:"bd5",
  name:"Natural Peanut Butter 1kg",
  brand:"HealthyU",
  price:399, mrp:699, tag:"balance", off:"43% off",
  img:"assets/Natural Peanut Butter 1kg.png",
  desc:"Protein and healthy fats to improve satiety; no added sugar; great for portion-controlled snacks.",
  variants:{ flavour:["Crunchy","Creamy"] },
  rating:4.2, stock:true, group:"balance"
},
{
  id:"bd6",
  name:"Whey Isolate (Low Carb) 1kg",
  brand:"HealthyU",
  price:3299, mrp:5599, tag:"protein", off:"41% off",
  img:"assets/Whey Isolate (Low Carb) 1kg.png",
  desc:"Low-carb, high-protein isolate to preserve lean mass while targeting fat loss with a balanced diet.",
  variants:{ flavour:["Unflavoured","Chocolate","Vanilla"] },
  rating:4.5, stock:true, group:"balance"
} 
  ];

