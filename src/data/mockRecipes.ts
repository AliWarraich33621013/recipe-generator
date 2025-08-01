export interface Recipe {
  id: number;
  title: string;
  description: string;
  cookTime: string;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  image: string;
  category: string;
  ingredients: string[];
  instructions: string[];
}

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    title: "Classic Spaghetti Carbonara",
    description: "Creamy Italian pasta dish with eggs, cheese, and pancetta",
    cookTime: "20 mins",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop",
    category: "Dinner",
    ingredients: [
      "400g spaghetti",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Black pepper to taste",
      "Salt for pasta water"
    ],
    instructions: [
      "Bring a large pot of salted water to boil and cook spaghetti according to package directions.",
      "While pasta cooks, fry pancetta in a large skillet until crispy.",
      "In a bowl, whisk together eggs, Pecorino Romano, Parmesan, and black pepper.",
      "Drain pasta, reserving 1 cup of pasta water.",
      "Add hot pasta to the skillet with pancetta.",
      "Remove from heat and quickly stir in egg mixture, adding pasta water as needed.",
      "Serve immediately with extra cheese and black pepper."
    ]
  },
  {
    id: 2,
    title: "Fluffy Pancakes",
    description: "Light and airy breakfast pancakes perfect with maple syrup",
    cookTime: "15 mins",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop",
    category: "Breakfast",
    ingredients: [
      "2 cups all-purpose flour",
      "2 tablespoons sugar",
      "2 teaspoons baking powder",
      "1 teaspoon salt",
      "2 large eggs",
      "1¾ cups milk",
      "4 tablespoons melted butter",
      "1 teaspoon vanilla extract"
    ],
    instructions: [
      "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
      "In another bowl, whisk together eggs, milk, melted butter, and vanilla.",
      "Pour wet ingredients into dry ingredients and stir until just combined.",
      "Heat a griddle or large skillet over medium heat.",
      "Pour ¼ cup batter for each pancake onto the griddle.",
      "Cook until bubbles form on surface, then flip and cook until golden brown.",
      "Serve hot with butter and maple syrup."
    ]
  },
  {
    id: 3,
    title: "Chocolate Lava Cake",
    description: "Decadent individual chocolate cakes with molten centers",
    cookTime: "25 mins",
    servings: 4,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
    category: "Dessert",
    ingredients: [
      "100g dark chocolate, chopped",
      "100g butter",
      "2 large eggs",
      "2 large egg yolks",
      "60g caster sugar",
      "Pinch of salt",
      "2 tablespoons plain flour",
      "Butter for ramekins",
      "Cocoa powder for dusting"
    ],
    instructions: [
      "Preheat oven to 200°C. Butter 4 ramekins and dust with cocoa powder.",
      "Melt chocolate and butter in a double boiler until smooth.",
      "In a bowl, whisk eggs, egg yolks, and sugar until thick and pale.",
      "Fold in the melted chocolate mixture and salt.",
      "Sift in flour and fold gently until just combined.",
      "Divide mixture between ramekins and bake for 12-14 minutes.",
      "Let stand for 1 minute, then run a knife around edges and invert onto plates.",
      "Serve immediately with vanilla ice cream."
    ]
  },
  {
    id: 4,
    title: "Caesar Salad",
    description: "Crisp romaine lettuce with classic Caesar dressing and croutons",
    cookTime: "15 mins",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=300&fit=crop",
    category: "Lunch",
    ingredients: [
      "2 heads romaine lettuce, chopped",
      "½ cup Parmesan cheese, grated",
      "1 cup croutons",
      "2 cloves garlic, minced",
      "2 anchovy fillets, minced",
      "1 egg yolk",
      "1 tablespoon Dijon mustard",
      "¼ cup lemon juice",
      "½ cup olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Wash and chop romaine lettuce, then chill in refrigerator.",
      "In a small bowl, mash garlic and anchovies into a paste.",
      "Whisk in egg yolk, Dijon mustard, and lemon juice.",
      "Slowly drizzle in olive oil while whisking to create emulsion.",
      "Season with salt and pepper to taste.",
      "Toss lettuce with dressing in a large bowl.",
      "Top with Parmesan cheese and croutons before serving."
    ]
  },
  {
    id: 5,
    title: "Thai Green Curry",
    description: "Aromatic coconut curry with vegetables and fragrant herbs",
    cookTime: "30 mins",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop",
    category: "Dinner",
    ingredients: [
      "400ml coconut milk",
      "3 tablespoons green curry paste",
      "500g chicken breast, sliced",
      "1 eggplant, cubed",
      "1 red bell pepper, sliced",
      "100g green beans, trimmed",
      "2 tablespoons fish sauce",
      "1 tablespoon brown sugar",
      "Thai basil leaves",
      "Jasmine rice for serving"
    ],
    instructions: [
      "Heat thick coconut cream in a wok over medium-high heat.",
      "Add curry paste and fry until fragrant, about 2 minutes.",
      "Add chicken and cook until nearly done.",
      "Add remaining coconut milk and bring to a simmer.",
      "Add eggplant, bell pepper, and green beans.",
      "Season with fish sauce and brown sugar.",
      "Simmer until vegetables are tender, about 10 minutes.",
      "Garnish with Thai basil and serve with jasmine rice."
    ]
  },
  {
    id: 6,
    title: "Fresh Fruit Smoothie",
    description: "Refreshing blend of seasonal fruits and yogurt",
    cookTime: "5 mins",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop",
    category: "Beverage",
    ingredients: [
      "1 banana, sliced",
      "1 cup mixed berries",
      "½ cup Greek yogurt",
      "½ cup orange juice",
      "1 tablespoon honey",
      "½ cup ice cubes",
      "Fresh mint for garnish"
    ],
    instructions: [
      "Add all ingredients except ice and mint to a blender.",
      "Blend on high speed until smooth and creamy.",
      "Add ice cubes and blend again until smooth.",
      "Taste and adjust sweetness with more honey if needed.",
      "Pour into glasses and garnish with fresh mint.",
      "Serve immediately while cold and fresh."
    ]
  },
  {
    id: 7,
    title: "Beef Tacos",
    description: "Seasoned ground beef in soft tortillas with fresh toppings",
    cookTime: "25 mins",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop",
    category: "Dinner",
    ingredients: [
      "1 lb ground beef",
      "1 packet taco seasoning",
      "8 soft flour tortillas",
      "1 cup shredded lettuce",
      "1 cup shredded cheddar cheese",
      "2 tomatoes, diced",
      "1 onion, diced",
      "1 cup sour cream",
      "1 lime, cut into wedges",
      "Hot sauce to taste"
    ],
    instructions: [
      "Brown ground beef in a large skillet over medium-high heat.",
      "Drain excess fat and add taco seasoning with water as directed on packet.",
      "Simmer until sauce thickens, about 5 minutes.",
      "Warm tortillas in microwave or on a dry skillet.",
      "Fill each tortilla with seasoned beef.",
      "Top with lettuce, cheese, tomatoes, and onions.",
      "Serve with sour cream, lime wedges, and hot sauce."
    ]
  },
  {
    id: 8,
    title: "Mushroom Risotto",
    description: "Creamy Italian rice dish with wild mushrooms and Parmesan",
    cookTime: "35 mins",
    servings: 4,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop",
    category: "Dinner",
    ingredients: [
      "1½ cups Arborio rice",
      "6 cups warm chicken stock",
      "300g mixed wild mushrooms, sliced",
      "1 medium onion, finely chopped",
      "3 cloves garlic, minced",
      "½ cup dry white wine",
      "½ cup grated Parmesan cheese",
      "3 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley for garnish",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Heat olive oil in a large pan and sauté mushrooms until golden. Set aside.",
      "In the same pan, sauté onion until translucent, add garlic for 1 minute.",
      "Add rice and stir for 2 minutes until grains are coated.",
      "Pour in wine and stir until absorbed.",
      "Add warm stock one ladle at a time, stirring constantly.",
      "Continue until rice is creamy and al dente, about 18-20 minutes.",
      "Stir in mushrooms, butter, and Parmesan.",
      "Season with salt and pepper, garnish with parsley."
    ]
  },
  {
    id: 9,
    title: "Greek Salad",
    description: "Fresh Mediterranean salad with feta cheese and olives",
    cookTime: "10 mins",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
    category: "Lunch",
    ingredients: [
      "4 large tomatoes, cut into wedges",
      "1 cucumber, sliced",
      "1 red onion, thinly sliced",
      "200g feta cheese, cubed",
      "½ cup Kalamata olives",
      "¼ cup extra virgin olive oil",
      "2 tablespoons red wine vinegar",
      "1 teaspoon dried oregano",
      "Salt and pepper to taste",
      "Fresh oregano for garnish"
    ],
    instructions: [
      "Arrange tomato wedges and cucumber slices on a large platter.",
      "Scatter red onion slices over the vegetables.",
      "Add feta cheese cubes and olives on top.",
      "In a small bowl, whisk together olive oil, vinegar, and dried oregano.",
      "Season dressing with salt and pepper.",
      "Drizzle dressing over the salad.",
      "Garnish with fresh oregano and serve immediately."
    ]
  },
  {
    id: 10,
    title: "Banana Bread",
    description: "Moist and sweet quick bread perfect for breakfast or snacks",
    cookTime: "70 mins",
    servings: 8,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=300&fit=crop",
    category: "Dessert",
    ingredients: [
      "3 ripe bananas, mashed",
      "⅓ cup melted butter",
      "¾ cup sugar",
      "1 egg, beaten",
      "1 teaspoon vanilla extract",
      "1 teaspoon baking soda",
      "Pinch of salt",
      "1½ cups all-purpose flour",
      "Optional: ½ cup chopped walnuts"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C) and grease a 9x5 inch loaf pan.",
      "In a large bowl, mix melted butter with mashed bananas.",
      "Stir in sugar, beaten egg, and vanilla extract.",
      "Add baking soda and salt, mix well.",
      "Gradually add flour, stirring until just combined.",
      "Fold in walnuts if using.",
      "Pour batter into prepared loaf pan.",
      "Bake for 60-65 minutes until a toothpick comes out clean.",
      "Cool in pan for 10 minutes before removing to wire rack."
    ]
  }
];