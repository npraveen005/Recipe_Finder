export {recipes};

//all recipes
const recipes = [
  {
    name: "Chicken Stir-Fry",
    ingredients: ["chicken", "rice", "bell peppers", "onions", "garlic", "olive oil"],
    imageSrc: "./media/chicken_stir_fry.jpg",
    procedure: [
      "Cook rice according to package instructions.",
      "Cut chicken and vegetables into bite-sized pieces.",
      "Heat oil in a wok or large skillet.",
      "Stir-fry chicken until cooked through.",
      "Add vegetables and garlic, stir-fry until tender-crisp.",
      "Season with desired sauces.",
      "Serve over rice."
    ],
    cuisine: "Asian",
    preparationTime: 30,
    dietaryRestrictions: ["gluten-free"],
	reviews: {},
	reviewPoints: 0
  },
  {
    name: "Spaghetti Bolognese",
    ingredients: ["pasta", "ground beef", "tomatoes", "onions", "garlic", "olive oil"],
    imageSrc: "./media/spaghetti_bolognese.jpg",
    procedure: [
      "Cook pasta according to package instructions.",
      "In a large pan, brown ground beef.",
      "Add chopped onions and garlic, sauté until soft.",
      "Add tomatoes and simmer for 20 minutes.",
      "Season with salt, pepper, and herbs.",
      "Serve sauce over cooked pasta."
    ],
    cuisine: "Italian",
    preparationTime: 45,
    dietaryRestrictions: [],
	reviews: {},
	reviewPoints: 0
  },
  {
    name: "Vegetable Omelette",
    ingredients: ["eggs", "bell peppers", "onions", "spinach", "cheese"],
    imageSrc: "./media/vegetable_omelette.jpg",
    procedure: [
      "Chop vegetables finely.",
      "Beat eggs in a bowl.",
      "Heat a non-stick pan and add beaten eggs.",
      "When eggs begin to set, add vegetables and cheese to one half.",
      "Fold the other half over the filling.",
      "Cook until cheese melts and eggs are fully set."
    ],
    cuisine: "International",
    preparationTime: 15,
    dietaryRestrictions: ["vegetarian", "gluten-free"],
	reviews: {},
	reviewPoints: 0
  },
  {
    name: "Loaded Baked Potato",
    ingredients: ["potatoes", "cheese", "onions", "olive oil"],
    imageSrc: "./media/loaded_baked_potato.jpg",
    procedure: [
      "Preheat oven to 425°F (220°C).",
      "Wash and dry potatoes, prick with a fork.",
      "Rub with olive oil and salt.",
      "Bake for 45-60 minutes until tender.",
      "Split potatoes and top with cheese and chopped onions.",
      "Return to oven until cheese melts."
    ],
    cuisine: "American",
    preparationTime: 60,
    dietaryRestrictions: ["vegetarian", "gluten-free"],
	reviews: {},
	reviewPoints: 0
  },
  {
    name: "Grilled Cheese Sandwich",
    ingredients: ["bread", "cheese", "olive oil"],
    imageSrc: "./media/grilled_cheese_sandwich.jpg",
    procedure: [
      "Heat a skillet over medium heat.",
      "Butter one side of each bread slice.",
      "Place one slice butter-side down in the skillet.",
      "Add cheese and top with the other bread slice, butter-side up.",
      "Cook until golden brown, then flip and cook the other side."
    ],
    cuisine: "American",
    preparationTime: 10,
    dietaryRestrictions: ["vegetarian"],
	reviews: {},
	reviewPoints: 0
  },
  {
    name: "Tomato Soup",
    ingredients: ["tomatoes", "onions", "garlic", "olive oil"],
    imageSrc: "./media/tomato_soup.jpg",
    procedure: [
      "Sauté chopped onions and garlic in olive oil.",
      "Add chopped tomatoes and cook until soft.",
      "Add broth and simmer for 15-20 minutes.",
      "Blend the soup until smooth.",
      "Season with salt and pepper.",
      "Reheat if necessary before serving."
    ],
    cuisine: "International",
    preparationTime: 30,
    dietaryRestrictions: ["vegetarian", "vegan", "gluten-free"],
	reviews: {},
	reviewPoints: 0
  },
  {
    name: "Beef and Vegetable Stew",
    ingredients: ["ground beef", "potatoes", "carrots", "onions", "tomatoes"],
    imageSrc: "./media/beef_and_vegetable_stew.jpg",
    procedure: [
      "Brown ground beef in a large pot.",
      "Add chopped onions and sauté.",
      "Add diced potatoes, carrots, and tomatoes.",
      "Pour in broth to cover ingredients.",
      "Simmer for 1-2 hours until vegetables are tender.",
      "Season with salt, pepper, and herbs."
    ],
    cuisine: "International",
    preparationTime: 120,
    dietaryRestrictions: ["gluten-free"],
	reviews: {},
	reviewPoints: 0
  },
  {
    name: "Spinach and Cheese Quesadilla",
    ingredients: ["bread", "spinach", "cheese"],
    imageSrc: "./media/spinach_and_cheese_quesadilla.jpg",
    procedure: [
      "Heat a large skillet over medium heat.",
      "Place a tortilla in the skillet.",
      "Sprinkle cheese over half the tortilla.",
      "Add a layer of spinach leaves.",
      "Fold the tortilla in half.",
      "Cook until cheese melts and tortilla is golden, then flip and cook other side."
    ],
    cuisine: "Mexican",
    preparationTime: 15,
    dietaryRestrictions: ["vegetarian"],
	reviews: {},
	reviewPoints: 0
  },
  {
    name: "Fried Rice",
    ingredients: ["rice", "eggs", "carrots", "onions", "garlic"],
    imageSrc: "./media/fried_rice.jpg",
    procedure: [
      "Cook rice and let it cool.",
      "Scramble eggs in a large wok or skillet.",
      "Remove eggs and set aside.",
      "Stir-fry chopped vegetables in the same pan.",
      "Add cooled rice and stir-fry.",
      "Mix in scrambled eggs.",
      "Season with soy sauce and serve."
    ],
    cuisine: "Asian",
    preparationTime: 30,
    dietaryRestrictions: ["vegetarian"],
	reviews: {},
	reviewPoints: 0
  },
  {
    name: "Pasta Primavera",
    ingredients: ["pasta", "bell peppers", "carrots", "spinach", "garlic", "olive oil"],
    imageSrc: "./media/pasta_primavera.jpg",
    procedure: [
      "Cook pasta according to package instructions.",
      "In a large skillet, sauté garlic in olive oil.",
      "Add chopped bell peppers and carrots, cook until tender-crisp.",
      "Add spinach and cook until wilted.",
      "Toss cooked pasta with the vegetables.",
      "Season with salt, pepper, and grated cheese if desired."
    ],
    cuisine: "Italian",
    preparationTime: 25,
    dietaryRestrictions: ["vegetarian"],
	reviews: {},
	reviewPoints: 0
  },
  {
    name: "Greek Salad",
    ingredients: ["cucumber", "tomatoes", "red onion", "feta cheese", "olives", "olive oil", "lemon juice"],
    imageSrc: "./media/greek_salad.jpg",
    procedure: [
      "Chop cucumber, tomatoes, and red onion into bite-sized pieces.",
      "Crumble feta cheese.",
      "Combine vegetables, cheese, and olives in a bowl.",
      "Whisk olive oil and lemon juice for dressing.",
      "Pour dressing over salad and toss gently.",
      "Season with salt and dried oregano if desired."
    ],
    cuisine: "Greek",
    preparationTime: 15,
    dietaryRestrictions: ["vegetarian", "gluten-free"],
    reviews: {},
    reviewPoints: 0
  },
  {
    name: "Mushroom Risotto",
    ingredients: ["arborio rice", "mushrooms", "onion", "garlic", "white wine", "vegetable broth", "parmesan cheese"],
    imageSrc: "./media/mushroom_risotto.jpg",
    procedure: [
      "Sauté chopped onion and garlic in a pan.",
      "Add sliced mushrooms and cook until softened.",
      "Add arborio rice and stir to coat with oil.",
      "Pour in white wine and simmer until absorbed.",
      "Gradually add hot vegetable broth, stirring constantly.",
      "Cook until rice is creamy and al dente.",
      "Stir in grated parmesan cheese and serve."
    ],
    cuisine: "Italian",
    preparationTime: 40,
    dietaryRestrictions: ["vegetarian"],
    reviews: {},
    reviewPoints: 0
  },
  {
    name: "Fish Tacos",
    ingredients: ["white fish fillets", "tortillas", "cabbage", "lime", "sour cream", "avocado"],
    imageSrc: "./media/fish_tacos.jpg",
    procedure: [
      "Season fish fillets and grill or pan-fry until cooked.",
      "Warm tortillas in a dry skillet.",
      "Shred cabbage and slice avocado.",
      "Flake the cooked fish into bite-sized pieces.",
      "Assemble tacos with fish, cabbage, and avocado.",
      "Top with sour cream and a squeeze of lime juice."
    ],
    cuisine: "Mexican",
    preparationTime: 25,
    dietaryRestrictions: ["gluten-free"],
    reviews: {},
    reviewPoints: 0
  },
  {
    name: "Lentil Soup",
    ingredients: ["lentils", "carrots", "onion", "celery", "garlic", "vegetable broth", "tomatoes"],
    imageSrc: "./media/lentil_soup.jpg",
    procedure: [
      "Chop vegetables into small pieces.",
      "Sauté onion, celery, and garlic in a large pot.",
      "Add lentils, chopped carrots, and diced tomatoes.",
      "Pour in vegetable broth and bring to a boil.",
      "Reduce heat and simmer until lentils are tender.",
      "Season with salt, pepper, and herbs to taste."
    ],
    cuisine: "International",
    preparationTime: 45,
    dietaryRestrictions: ["vegetarian", "vegan", "gluten-free"],
    reviews: {},
    reviewPoints: 0
  },
  {
    name: "Chicken Caesar Salad",
    ingredients: ["chicken breast", "romaine lettuce", "croutons", "parmesan cheese", "caesar dressing"],
    imageSrc: "./media/chicken_caesar_salad.jpg",
    procedure: [
      "Grill or pan-fry seasoned chicken breast until cooked through.",
      "Chop romaine lettuce and place in a large bowl.",
      "Slice cooked chicken into strips.",
      "Add chicken, croutons, and grated parmesan to the lettuce.",
      "Drizzle with caesar dressing and toss to combine.",
      "Garnish with additional parmesan if desired."
    ],
    cuisine: "International",
    preparationTime: 20,
    dietaryRestrictions: [],
    reviews: {},
    reviewPoints: 0
  },
  {
    name: "Butter Chicken",
    ingredients: ["chicken", "yogurt", "butter", "cream", "tomato puree", "onions", "garlic", "ginger", "garam masala"],
    imageSrc: "./media/butter_chicken.jpg",
    procedure: [
      "Marinate chicken in yogurt and spices for 2 hours.",
      "In a pan, sauté onions, garlic, and ginger.",
      "Add tomato puree and cook until oil separates.",
      "Add marinated chicken and cook until done.",
      "Stir in butter and cream, simmer until sauce thickens.",
      "Garnish with fresh cream and serve with naan or rice."
    ],
    cuisine: "Indian",
    preparationTime: 60,
    dietaryRestrictions: [],
    reviews: {},
    reviewPoints: 0
  },
  {
    name: "Vegetable Biryani",
    ingredients: ["basmati rice", "mixed vegetables", "onions", "yogurt", "biryani masala", "saffron", "ghee"],
    imageSrc: "./media/vegetable_biryani.jpg",
    procedure: [
      "Partially cook basmati rice and set aside.",
      "Sauté onions until golden brown.",
      "Add mixed vegetables and biryani masala, cook until tender.",
      "Layer the rice and vegetable mixture in a pot.",
      "Add saffron-infused milk and ghee on top.",
      "Cover and cook on low heat until rice is fully cooked.",
      "Serve hot with raita."
    ],
    cuisine: "Indian",
    preparationTime: 45,
    dietaryRestrictions: ["vegetarian"],
    reviews: {},
    reviewPoints: 0
  },
  {
    name: "Palak Paneer",
    ingredients: ["spinach", "paneer", "onions", "tomatoes", "garlic", "ginger", "cream", "spices"],
    imageSrc: "./media/palak_paneer.jpg",
    procedure: [
      "Blanch spinach and blend into a puree.",
      "Sauté onions, garlic, and ginger in a pan.",
      "Add tomatoes and cook until soft.",
      "Stir in spinach puree and spices, simmer for 10 minutes.",
      "Add paneer cubes and cream, cook for 5 more minutes.",
      "Serve hot with roti or naan."
    ],
    cuisine: "Indian",
    preparationTime: 30,
    dietaryRestrictions: ["vegetarian", "gluten-free"],
    reviews: {},
    reviewPoints: 0
  },
  {
    name: "Chana Masala",
    ingredients: ["chickpeas", "onions", "tomatoes", "garlic", "ginger", "chana masala spice blend", "cilantro"],
    imageSrc: "./media/chana_masala.jpg",
    procedure: [
      "Soak chickpeas overnight, then cook until tender.",
      "In a pan, sauté onions, garlic, and ginger.",
      "Add tomatoes and chana masala spice blend, cook until oil separates.",
      "Stir in cooked chickpeas and simmer for 15 minutes.",
      "Garnish with fresh cilantro.",
      "Serve with rice or naan."
    ],
    cuisine: "Indian",
    preparationTime: 40,
    dietaryRestrictions: ["vegetarian", "vegan", "gluten-free"],
    reviews: {},
    reviewPoints: 0
  },
  {
    name: "Tandoori Chicken",
    ingredients: ["chicken", "yogurt", "lemon juice", "tandoori masala", "ginger", "garlic", "oil"],
    imageSrc: "./media/tandoori_chicken.jpg",
    procedure: [
      "Mix yogurt, lemon juice, tandoori masala, ginger, and garlic.",
      "Marinate chicken in the mixture for 4 hours or overnight.",
      "Preheat oven to 400°F (200°C).",
      "Place marinated chicken on a baking sheet.",
      "Bake for 30-40 minutes, turning once, until fully cooked.",
      "Serve hot with mint chutney and sliced onions."
    ],
    cuisine: "Indian",
    preparationTime: 30,
    dietaryRestrictions: ["gluten-free"],
    reviews: {},
    reviewPoints: 0
  },
  {
    name: "Idli Sambar",
    ingredients: ["rice", "urad dal", "toor dal", "vegetables", "tamarind", "sambar powder", "mustard seeds", "curry leaves"],
    imageSrc: "./media/idli_sambar.jpg",
    procedure: [
      "Soak rice and urad dal separately, then grind to make idli batter.",
      "Ferment the batter overnight.",
      "Steam the batter in idli molds to make idlis.",
      "For sambar, cook toor dal with vegetables and tamarind extract.",
      "Add sambar powder and simmer.",
      "Prepare a tempering with mustard seeds and curry leaves, add to sambar.",
      "Serve hot idlis with sambar."
    ],
    cuisine: "Indian",
    preparationTime: 90,
    dietaryRestrictions: ["vegetarian", "gluten-free"],
    reviews: {},
    reviewPoints: 0
  },
  {
    name: "Chettinad Chicken",
    ingredients: ["chicken", "onions", "tomatoes", "ginger", "garlic", "chettinad spices", "coconut", "curry leaves"],
    imageSrc: "./media/chettinad_chicken.jpg",
    procedure: [
      "Marinate chicken with yogurt and spices for 1 hour.",
      "Sauté onions, ginger, and garlic in oil.",
      "Add tomatoes and cook until soft.",
      "Add marinated chicken and chettinad spices.",
      "Simmer until chicken is cooked and gravy thickens.",
      "Garnish with curry leaves and grated coconut.",
      "Serve hot with rice or parotta."
    ],
    cuisine: "Indian",
    preparationTime: 60,
    dietaryRestrictions: [],
    reviews: {},
    reviewPoints: 0
  },
  {
    name: "Pongal",
    ingredients: ["rice", "moong dal", "ghee", "black pepper", "cumin seeds", "cashews", "curry leaves"],
    imageSrc: "./media/pongal.jpg",
    procedure: [
      "Dry roast rice and moong dal, then wash thoroughly.",
      "Cook rice and dal together in water until soft and mushy.",
      "In a separate pan, heat ghee and fry cashews, cumin seeds, pepper, and curry leaves.",
      "Add this tempering to the cooked rice-dal mixture.",
      "Mix well and add salt to taste.",
      "Serve hot with coconut chutney and sambar."
    ],
    cuisine: "Indian",
    preparationTime: 30,
    dietaryRestrictions: ["vegetarian", "gluten-free"],
    reviews: {},
    reviewPoints: 0
  },
  {
    name: "Rasam",
    ingredients: ["toor dal", "tomatoes", "tamarind", "rasam powder", "garlic", "cumin seeds", "mustard seeds", "curry leaves"],
    imageSrc: "./media/rasam.jpg",
    procedure: [
      "Cook toor dal until soft.",
      "In another pot, cook tomatoes with tamarind extract and rasam powder.",
      "Add cooked dal to the tomato mixture.",
      "Prepare a tempering with ghee, mustard seeds, cumin seeds, garlic, and curry leaves.",
      "Add tempering to rasam and simmer for 5 minutes.",
      "Garnish with cilantro and serve hot with rice."
    ],
    cuisine: "Indian",
    preparationTime: 25,
    dietaryRestrictions: ["vegetarian", "vegan", "gluten-free"],
    reviews: {},
    reviewPoints: 0
  },
  {
    name: "Kootu",
    ingredients: ["mixed vegetables", "chana dal", "coconut", "green chilies", "cumin seeds", "urad dal", "curry leaves"],
    imageSrc: "./media/kootu.jpg",
    procedure: [
      "Cook mixed vegetables and chana dal together until soft.",
      "Grind coconut, green chilies, and cumin seeds into a paste.",
      "Add the ground paste to the cooked vegetables and dal.",
      "Simmer for 5 minutes.",
      "Prepare a tempering with oil, mustard seeds, urad dal, and curry leaves.",
      "Add tempering to the kootu and mix well.",
      "Serve hot with rice or as a side dish."
    ],
    cuisine: "Indian",
    preparationTime: 35,
    dietaryRestrictions: ["vegetarian", "vegan", "gluten-free"],
    reviews: {},
    reviewPoints: 0
  }
];