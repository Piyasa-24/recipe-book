
const recipeDatabase = {
  "cheeseburger": {
    RECIPE_NAME: "Classic American Cheeseburger",
    RECIPE_NAME_PART1: "Classic",
    RECIPE_NAME_PART2: "American",
    RECIPE_NAME_PART3: "Cheeseburger",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/crispy-chicken-burger_23-2151950828.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "American Food",
    SERVINGS: "4",
    PREP_TIME: "15",
    COOK_TIME: "12",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "Indulge in the ultimate American classic with our juicy Cheeseburger! Featuring a perfectly seasoned beef patty topped with melted cheese, crisp lettuce, ripe tomatoes, and tangy pickles, all nestled between a toasted bun. This iconic burger delivers the perfect balance of flavors and textures that will satisfy any craving for authentic American comfort food.",
    RECIPE_TAGS: `
      <a href="#" class="tag">American Food</a>
      <a href="#" class="tag">Burger</a>
      <a href="#" class="tag">Comfort Food</a>
      <a href="#" class="tag">Ground Beef</a>
      <a href="#" class="tag">Classic Recipe</a>
    `,
    INGREDIENTS_LIST: `
      <li>1 lb ground beef 80/20 blend</li>
      <li>4 hamburger buns</li>
      <li>4 slices American cheese</li>
      <li>4 lettuce leaves</li>
      <li>1 large tomato, sliced</li>
      <li>1/4 cup sliced pickles</li>
      <li>1/4 cup sliced red onion</li>
      <li>2 tbsp mayonnaise</li>
      <li>2 tbsp ketchup</li>
      <li>1 tbsp mustard</li>
      <li>Salt and pepper to taste</li>
      <li>2 tbsp vegetable oil</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item">
        <div class="instruction-number">01</div>
        <div class="instruction-text">Divide ground beef into 4 equal portions and shape into patties. Season both sides with salt and pepper.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">02</div>
        <div class="instruction-text">Heat oil in a large skillet or grill pan over medium-high heat. Cook patties for 4-5 minutes per side.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">03</div>
        <div class="instruction-text">In the last minute of cooking, place cheese slices on patties and cover to melt.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">04</div>
        <div class="instruction-text">Toast burger buns lightly in the same pan until golden brown.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">05</div>
        <div class="instruction-text">Assemble burgers: Spread mayo and mustard on buns, add lettuce, tomato, patty with cheese, pickles, onion, and ketchup. Serve immediately!</div>
      </li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">520</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">28g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">32g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">3g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">6g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">35g</span></div>
    `,
    CHEF_NAME: "Chef Bobby Thompson",
    CHEF_TITLE: "American Cuisine Master",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5342.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "hotdog": {
    RECIPE_NAME: "All-American Hotdog",
    RECIPE_NAME_PART1: "All-American",
    RECIPE_NAME_PART2: "Classic",
    RECIPE_NAME_PART3: "Hotdog",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/hot-dogs-wooden-board-marble-table-with-onions-background_157027-4079.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "American Food",
    SERVINGS: "4",
    PREP_TIME: "5",
    COOK_TIME: "8",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "Experience the quintessential American street food with our All-American Hotdog! Featuring premium beef franks grilled to perfection and nestled in soft, warm buns. Topped with classic condiments and your favorite fixings, this timeless recipe brings the authentic taste of American ballparks and backyard barbecues right to your table.",
    RECIPE_TAGS: `
      <a href="#" class="tag">American Food</a>
      <a href="#" class="tag">Street Food</a>
      <a href="#" class="tag">Quick Meal</a>
      <a href="#" class="tag">Grilled</a>
      <a href="#" class="tag">Classic Recipe</a>
    `,
    INGREDIENTS_LIST: `
      <li>4 beef hot dog franks</li>
      <li>4 hot dog buns</li>
      <li>2 tbsp yellow mustard</li>
      <li>2 tbsp ketchup</li>
      <li>1/4 cup diced white onion</li>
      <li>2 tbsp sweet pickle relish</li>
      <li>1/4 cup shredded cheddar cheese</li>
      <li>2 tbsp butter</li>
      <li>1 tsp garlic powder</li>
      <li>Salt to taste</li>
      <li>Optional: chili, jalapeños</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item">
        <div class="instruction-number">01</div>
        <div class="instruction-text">Preheat grill or large skillet over medium heat. Score hot dogs diagonally for even cooking.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">02</div>
        <div class="instruction-text">Grill hot dogs for 6-8 minutes, turning occasionally until evenly browned and heated through.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">03</div>
        <div class="instruction-text">Butter the inside of hot dog buns and toast them lightly on the grill or in a pan until golden.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">04</div>
        <div class="instruction-text">Place hot dogs in toasted buns and add your choice of condiments: mustard, ketchup, onions, and relish.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">05</div>
        <div class="instruction-text">Top with shredded cheese and any additional toppings. Serve immediately while hot and enjoy your classic American hotdog!</div>
      </li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">350</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">14g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">22g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">2g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">4g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">28g</span></div>
    `,
    CHEF_NAME: "Chef Bobby Thompson",
    CHEF_TITLE: "American Cuisine Master",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5342.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "macandcheese": {
    RECIPE_NAME: "Creamy Mac and Cheese",
    RECIPE_NAME_PART1: "Creamy",
    RECIPE_NAME_PART2: "Mac and",
    RECIPE_NAME_PART3: "Cheese",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/delicious-creamy-melted-cheese_23-2149332826.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "American Food",
    SERVINGS: "6",
    PREP_TIME: "10",
    COOK_TIME: "25",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Dive into the ultimate comfort food with our Creamy Mac and Cheese! This rich and indulgent dish features perfectly cooked elbow macaroni smothered in a velvety cheese sauce made with sharp cheddar and cream. Topped with a golden breadcrumb crust, this homemade version elevates the classic to restaurant-quality perfection that will warm your heart and soul.",
    RECIPE_TAGS: `
      <a href="#" class="tag">American Food</a>
      <a href="#" class="tag">Comfort Food</a>
      <a href="#" class="tag">Pasta</a>
      <a href="#" class="tag">Cheese</a>
      <a href="#" class="tag">Family Favorite</a>
    `,
    INGREDIENTS_LIST: `
      <li>1 lb elbow macaroni pasta</li>
      <li>4 tbsp butter</li>
      <li>1/4 cup all-purpose flour</li>
      <li>2 cups whole milk</li>
      <li>1 cup heavy cream</li>
      <li>3 cups sharp cheddar cheese, shredded</li>
      <li>1 cup mozzarella cheese, shredded</li>
      <li>1/2 cup Parmesan cheese, grated</li>
      <li>1 tsp garlic powder</li>
      <li>1/2 tsp paprika</li>
      <li>Salt and pepper to taste</li>
      <li>1 cup panko breadcrumbs</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item">
        <div class="instruction-number">01</div>
        <div class="instruction-text">Cook macaroni according to package directions until al dente. Drain and set aside. Preheat oven to 375°F.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">02</div>
        <div class="instruction-text">In a large saucepan, melt butter over medium heat. Whisk in flour and cook for 2 minutes to create a roux.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">03</div>
        <div class="instruction-text">Gradually whisk in milk and cream. Cook, stirring constantly, until sauce thickens, about 5-7 minutes.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">04</div>
        <div class="instruction-text">Remove from heat and stir in cheeses, garlic powder, paprika, salt, and pepper until smooth. Mix in cooked macaroni.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">05</div>
        <div class="instruction-text">Transfer to greased baking dish, top with breadcrumbs, and bake for 15-20 minutes until golden and bubbly. Let cool for 5 minutes before serving.</div>
      </li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">480</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">24g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">2g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">8g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">45g</span></div>
    `,
    CHEF_NAME: "Chef Bobby Thompson",
    CHEF_TITLE: "American Cuisine Master",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5342.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "friedchicken": {
    RECIPE_NAME: "Southern Fried Chicken",
    RECIPE_NAME_PART1: "Southern",
    RECIPE_NAME_PART2: "Fried",
    RECIPE_NAME_PART3: "Chicken",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "American Food",
    SERVINGS: "4",
    PREP_TIME: "30",
    COOK_TIME: "20",
    DIFFICULTY: "Advanced Level",
    RECIPE_DESCRIPTION: "Experience the authentic taste of the American South with our crispy, golden Southern Fried Chicken! This time-honored recipe features tender, juicy chicken pieces marinated in buttermilk and coated in a perfectly seasoned flour blend. Fried to crispy perfection, each bite delivers that unmistakable crunch followed by succulent, flavorful meat that defines true Southern comfort food.",
    RECIPE_TAGS: `
      <a href="#" class="tag">American Food</a>
      <a href="#" class="tag">Southern Cuisine</a>
      <a href="#" class="tag">Fried</a>
      <a href="#" class="tag">Comfort Food</a>
      <a href="#" class="tag">Traditional Recipe</a>
    `,
    INGREDIENTS_LIST: `
      <li>1 whole chicken, cut into pieces</li>
      <li>2 cups buttermilk</li>
      <li>2 cups all-purpose flour</li>
      <li>2 tbsp paprika</li>
      <li>1 tbsp garlic powder</li>
      <li>1 tbsp onion powder</li>
      <li>2 tsp cayenne pepper</li>
      <li>2 tsp black pepper</li>
      <li>2 tsp salt</li>
      <li>1 tsp dried thyme</li>
      <li>4 cups vegetable oil for frying</li>
      <li>2 eggs, beaten</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item">
        <div class="instruction-number">01</div>
        <div class="instruction-text">Marinate chicken pieces in buttermilk mixed with beaten eggs for at least 2 hours or overnight in refrigerator.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">02</div>
        <div class="instruction-text">Mix flour with all spices in a large bowl. Heat oil to 350°F in a heavy pot or deep fryer.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">03</div>
        <div class="instruction-text">Remove chicken from buttermilk and dredge each piece thoroughly in seasoned flour mixture.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">04</div>
        <div class="instruction-text">Carefully place chicken in hot oil, a few pieces at a time. Fry for 12-15 minutes, turning once, until golden brown and internal temperature reaches 165°F.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">05</div>
        <div class="instruction-text">Drain on paper towels and let rest for 5 minutes. Serve hot with your favorite sides and enjoy authentic Southern fried chicken!</div>
      </li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">420</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">35g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">22g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">2g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">18g</span></div>
    `,
    CHEF_NAME: "Chef Bobby Thompson",
    CHEF_TITLE: "American Cuisine Master",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5342.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "applepie": {
    RECIPE_NAME: "Classic American Apple Pie",
    RECIPE_NAME_PART1: "Classic",
    RECIPE_NAME_PART2: "American",
    RECIPE_NAME_PART3: "Apple Pie",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/flat-lay-pie-apples_23-2148243491.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "American Food",
    SERVINGS: "8",
    PREP_TIME: "45",
    COOK_TIME: "50",
    DIFFICULTY: "Advanced Level",
    RECIPE_DESCRIPTION: "Embrace the essence of American tradition with our Classic Apple Pie! This iconic dessert features tender, spiced apples nestled in a flaky, buttery crust that's as American as it gets. With the perfect balance of sweet and tart flavors enhanced by warm cinnamon and nutmeg, this homemade apple pie represents the heart of American baking and family gatherings.",
    RECIPE_TAGS: `
      <a href="#" class="tag">American Food</a>
      <a href="#" class="tag">Dessert</a>
      <a href="#" class="tag">Traditional</a>
      <a href="#" class="tag">Pie</a>
      <a href="#" class="tag">Holiday Favorite</a>
    `,
    INGREDIENTS_LIST: `
      <li>2 ready-made pie crusts</li>
      <li>6-7 large Granny Smith apples, peeled and sliced</li>
      <li>3/4 cup granulated sugar</li>
      <li>2 tbsp brown sugar</li>
      <li>2 tbsp all-purpose flour</li>
      <li>1 tbsp cornstarch</li>
      <li>1 tsp ground cinnamon</li>
      <li>1/4 tsp ground nutmeg</li>
      <li>1/4 tsp salt</li>
      <li>2 tbsp butter, cubed</li>
      <li>1 egg, beaten (for egg wash)</li>
      <li>2 tbsp coarse sugar for sprinkling</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item">
        <div class="instruction-number">01</div>
        <div class="instruction-text">Preheat oven to 425°F. Place bottom pie crust in 9-inch pie pan. Mix sugars, flour, cornstarch, and spices in large bowl.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">02</div>
        <div class="instruction-text">Add sliced apples to sugar mixture and toss until evenly coated. Let stand for 10 minutes.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">03</div>
        <div class="instruction-text">Fill pie crust with apple mixture, dot with butter cubes, and cover with top crust. Seal and flute edges.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">04</div>
        <div class="instruction-text">Cut several slits in top crust for steam vents. Brush with egg wash and sprinkle with coarse sugar.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">05</div>
        <div class="instruction-text">Bake for 45-50 minutes until crust is golden brown and filling is bubbling. Cool for at least 2 hours before serving to allow filling to set.</div>
      </li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">380</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">4g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">16g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">4g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">28g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">58g</span></div>
    `,
    CHEF_NAME: "Chef Bobby Thompson",
    CHEF_TITLE: "American Cuisine Master",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5342.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "chickenBiryani": {
    RECIPE_NAME: "Chicken Biryani",
    RECIPE_NAME_PART1: "Mughal",
    RECIPE_NAME_PART2: "Chicken",
    RECIPE_NAME_PART3: "Biriyani",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Indian Food",
    SERVINGS: "6",
    PREP_TIME: "30",
    COOK_TIME: "45",
    DIFFICULTY: "Advanced Level",
    RECIPE_DESCRIPTION: "Experience the aromatic symphony of spices in this traditional Chicken Biryani. Tender marinated chicken layered with fragrant basmati rice, slow-cooked to perfection with saffron, herbs, and a blend of authentic Indian spices. This royal dish brings the essence of Mughal cuisine to your table.",
    RECIPE_TAGS: `
      <a href="#" class="tag">Indian Food</a>
      <a href="#" class="tag">Biryani</a>
      <a href="#" class="tag">Chicken</a>
      <a href="#" class="tag">Spicy</a>
      <a href="#" class="tag">Traditional</a>
    `,
    INGREDIENTS_LIST: `
      <li>2 lbs chicken, cut into pieces</li>
      <li>2 cups basmati rice</li>
      <li>1 cup yogurt</li>
      <li>2 large onions, sliced</li>
      <li>4 cloves garlic, minced</li>
      <li>1 inch ginger, minced</li>
      <li>1 tsp cumin powder</li>
      <li>1 tsp coriander powder</li>
      <li>1/2 tsp turmeric powder</li>
      <li>1 tsp red chili powder</li>
      <li>1/2 cup mint leaves</li>
      <li>1/2 cup cilantro leaves</li>
      <li>Pinch of saffron</li>
      <li>1/4 cup warm milk</li>
      <li>4 tbsp ghee</li>
      <li>Salt to taste</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item">
        <div class="instruction-number">01</div>
        <div class="instruction-text">Marinate chicken with yogurt, half the spices, salt, and let it rest for 30 minutes.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">02</div>
        <div class="instruction-text">Soak basmati rice for 30 minutes, then partially cook with whole spices until 70% done.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">03</div>
        <div class="instruction-text">Fry onions until golden brown and crispy. Reserve half for garnish.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">04</div>
        <div class="instruction-text">Cook marinated chicken until tender. Layer with rice, fried onions, mint, and cilantro.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">05</div>
        <div class="instruction-text">Top with saffron milk and ghee. Cover and cook on dum (slow cooking) for 45 minutes.</div>
      </li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">450</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">35g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">18g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">3g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">5g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">42g</span></div>
    `,
    CHEF_NAME: "Chef Rajveer Singh",
    CHEF_TITLE: "Indian Cuisine Master",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/indian-man-mountains-male-traditional-turban-hinduist-with-special-things-rituals_1157-41086.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "spaghetti": {
    RECIPE_NAME: "Classic Spaghetti",
    RECIPE_NAME_PART1: "Classic",
    RECIPE_NAME_PART2: "Italian",
    RECIPE_NAME_PART3: "Spaghetti",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/tasty-appetizing-classic-italian-spaghetti-pasta-with-tomato-sauce-cheese-parmesan-basil-plate-ingredients-cooking-pasta-white-marble-table_1150-45638.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Italian Food",
    SERVINGS: "4",
    PREP_TIME: "10",
    COOK_TIME: "15",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "Indulge in the creamy, rich flavors of authentic Italian Carbonara. This classic Roman dish combines al dente pasta with crispy pancetta, fresh eggs, and aged Parmesan cheese to create a silky, luxurious sauce without using cream. A true testament to the beauty of simple, quality ingredients.",
    RECIPE_TAGS: `
      <a href="#" class="tag">Italian Food</a>
      <a href="#" class="tag">Pasta</a>
      <a href="#" class="tag">Carbonara</a>
      <a href="#" class="tag">Classic</a>
      <a href="#" class="tag">Quick</a>
    `,
    INGREDIENTS_LIST: `
      <li>400g spaghetti or linguine</li>
      <li>200g pancetta or guanciale, diced</li>
      <li>3 large eggs</li>
      <li>1 cup freshly grated Parmesan cheese</li>
      <li>2 cloves garlic, minced</li>
      <li>Fresh black pepper to taste</li>
      <li>Salt for pasta water</li>
      <li>2 tbsp olive oil</li>
      <li>Fresh parsley for garnish</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item">
        <div class="instruction-number">01</div>
        <div class="instruction-text">Cook pasta in salted boiling water until al dente. Reserve 1 cup pasta cooking water.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">02</div>
        <div class="instruction-text">In a large pan, cook pancetta until crispy. Add garlic and cook for 30 seconds.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">03</div>
        <div class="instruction-text">Whisk eggs with Parmesan cheese and black pepper in a bowl.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">04</div>
        <div class="instruction-text">Add hot pasta to the pan with pancetta. Remove from heat and quickly toss with egg mixture.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">05</div>
        <div class="instruction-text">Add pasta water gradually while tossing to create a creamy sauce. Serve immediately with extra cheese.</div>
      </li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">580</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">28g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">22g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">3g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">3g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">65g</span></div>
    `,
    CHEF_NAME: "Chef Giuseppe Romano",
    CHEF_TITLE: "Italian Cuisine Specialist",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/italian-chef-dressed-uniform-holding-tomatoes-pasta-hands-singing-yellow-background-emotional-man-chef-hat-fooling-around-work_574295-6088.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },
  "margheritaPizza": {
    RECIPE_NAME: "Classic Margherita Pizza",
    RECIPE_NAME_PART1: "Classic",
    RECIPE_NAME_PART2: "Margherita",
    RECIPE_NAME_PART3: "Pizza",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/top-view-delicious-pizza-with-fresh-cheese_23-2150096953.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Italian Food",
    SERVINGS: "4",
    PREP_TIME: "30",
    COOK_TIME: "15",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Delight in the simplicity and authenticity of Classic Margherita Pizza. Featuring a crisp, chewy crust topped with vibrant tomato sauce, fresh mozzarella, and aromatic basil, this pizza is a tribute to traditional Neapolitan flavors and Italian culinary heritage.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Italian Food</a>
    <a href="#" class="tag">Pizza</a>
    <a href="#" class="tag">Vegetarian</a>
    <a href="#" class="tag">Classic</a>
    <a href="#" class="tag">Comfort Food</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 pizza dough ball (12-inch)</li>
    <li>1/2 cup tomato sauce (San Marzano recommended)</li>
    <li>6 oz fresh mozzarella cheese, sliced</li>
    <li>Fresh basil leaves</li>
    <li>2 tbsp extra virgin olive oil</li>
    <li>Salt to taste</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Preheat oven to 500°F (or highest setting). Place a pizza stone or baking sheet inside to heat.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Stretch dough into a 12-inch circle on a floured surface. Transfer to a pizza peel or parchment paper.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Spread tomato sauce evenly, add mozzarella slices, and place fresh basil leaves on top.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Drizzle with olive oil and sprinkle a pinch of salt. Bake for 10–15 minutes until crust is golden and cheese is bubbly.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Slice and serve hot, garnished with additional fresh basil if desired.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">270</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">2g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">32g</span></div>
  `,
    CHEF_NAME: "Chef Giuseppe Romano",
    CHEF_TITLE: "Italian Cuisine Specialist",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/italian-chef-dressed-uniform-holding-tomatoes-pasta-hands-singing-yellow-background-emotional-man-chef-hat-fooling-around-work_574295-6088.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },
  "risotto": {
    RECIPE_NAME: "Creamy Mushroom Risotto",
    RECIPE_NAME_PART1: "Creamy",
    RECIPE_NAME_PART2: "Mushroom",
    RECIPE_NAME_PART3: "Risotto",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/bowl-creamy-risotto-topped-with-parmesan-cheese-parsley_9975-124916.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Italian Food",
    SERVINGS: "4",
    PREP_TIME: "15",
    COOK_TIME: "30",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Savor the luxurious texture of Creamy Mushroom Risotto. Made with arborio rice slowly simmered in broth and enriched with mushrooms, parmesan, and butter, this dish exemplifies Italian comfort and elegance in every bite.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Italian Food</a>
    <a href="#" class="tag">Rice Dish</a>
    <a href="#" class="tag">Vegetarian</a>
    <a href="#" class="tag">Comfort Food</a>
    <a href="#" class="tag">Dinner</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 cup Arborio rice</li>
    <li>2 tbsp olive oil</li>
    <li>1 small onion, finely chopped</li>
    <li>2 cloves garlic, minced</li>
    <li>1/2 cup white wine</li>
    <li>4 cups vegetable broth, warmed</li>
    <li>1 cup mushrooms, sliced</li>
    <li>1/2 cup grated parmesan cheese</li>
    <li>2 tbsp butter</li>
    <li>Salt and pepper to taste</li>
    <li>Chopped parsley for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Heat olive oil in a pan, sauté onions and garlic until translucent.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add mushrooms and cook until soft. Stir in Arborio rice and toast for 1–2 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Deglaze with white wine and stir until absorbed.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Add warm broth gradually, one ladle at a time, stirring constantly until rice is creamy and cooked al dente.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Finish with parmesan cheese, butter, and season with salt and pepper. Garnish with parsley before serving.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">320</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">8g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">2g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">45g</span></div>
  `,
    CHEF_NAME: "Chef Giuseppe Romano",
    CHEF_TITLE: "Italian Cuisine Specialist",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/italian-chef-dressed-uniform-holding-tomatoes-pasta-hands-singing-yellow-background-emotional-man-chef-hat-fooling-around-work_574295-6088.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },
  "tiramisu": {
    RECIPE_NAME: "Authentic Italian Tiramisu",
    RECIPE_NAME_PART1: "Authentic",
    RECIPE_NAME_PART2: "Italian",
    RECIPE_NAME_PART3: "Tiramisu",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/tiramisu-cake-with-cocoa-coffee-isolated-white-background_123827-29264.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Italian Dessert",
    SERVINGS: "6",
    PREP_TIME: "25",
    COOK_TIME: "0",
    DIFFICULTY: "Easy Level",
    RECIPE_DESCRIPTION: "Experience the rich and creamy indulgence of Authentic Italian Tiramisu. This no-bake classic dessert layers espresso-soaked ladyfingers with velvety mascarpone cream, dusted with cocoa powder for a sophisticated finish that melts in your mouth.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Italian Dessert</a>
    <a href="#" class="tag">No Bake</a>
    <a href="#" class="tag">Coffee</a>
    <a href="#" class="tag">Creamy</a>
    <a href="#" class="tag">Classic</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 pack ladyfinger biscuits</li>
    <li>1 cup brewed espresso, cooled</li>
    <li>3 large egg yolks</li>
    <li>1/2 cup granulated sugar</li>
    <li>8 oz mascarpone cheese</li>
    <li>1 cup heavy cream</li>
    <li>2 tbsp cocoa powder</li>
    <li>1 tsp vanilla extract</li>
    <li>Dark chocolate shavings (optional)</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Whisk egg yolks and sugar in a bowl over simmering water until thickened. Cool slightly.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Fold in mascarpone cheese until smooth. In a separate bowl, whip heavy cream to soft peaks and fold into mascarpone mixture.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Dip ladyfingers briefly in espresso and layer them in a dish. Spread half of the mascarpone mixture over them.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Repeat layers, ending with cream. Cover and chill for at least 4 hours or overnight.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Dust with cocoa powder and top with chocolate shavings before serving.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">410</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">6g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">28g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">18g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">32g</span></div>
  `,
    CHEF_NAME: "Chef Giuseppe Romano",
    CHEF_TITLE: "Italian Cuisine Specialist",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/italian-chef-dressed-uniform-holding-tomatoes-pasta-hands-singing-yellow-background-emotional-man-chef-hat-fooling-around-work_574295-6088.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },


  "kebab": {
    RECIPE_NAME: "Spiced Chicken Kebab with Potatoes",
    RECIPE_NAME_PART1: "Spiced",
    RECIPE_NAME_PART2: "Chicken",
    RECIPE_NAME_PART3: "Kebab",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/appetizing-kofta-kebab-meatballs-with-sauce-tortillas-tacos-black-table_2829-7881.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Grilled Food",
    SERVINGS: "4",
    PREP_TIME: "20",
    COOK_TIME: "25",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Savor the bold flavors of these juicy chicken kebabs paired with roasted potatoes. Marinated in aromatic spices and grilled to perfection, these skewers are a favorite for gatherings and weeknight dinners alike. A complete meal that’s hearty and flavorful.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Grilled</a>
    <a href="#" class="tag">Chicken</a>
    <a href="#" class="tag">Kebab</a>
    <a href="#" class="tag">Potato</a>
    <a href="#" class="tag">Spicy</a>
  `,
    INGREDIENTS_LIST: `
    <li>500g boneless chicken, cut into chunks</li>
    <li>3 medium potatoes, cut into wedges</li>
    <li>1 cup plain yogurt</li>
    <li>1 tbsp ginger-garlic paste</li>
    <li>1 tsp paprika</li>
    <li>1 tsp cumin powder</li>
    <li>1 tsp coriander powder</li>
    <li>1/2 tsp turmeric</li>
    <li>Salt and pepper to taste</li>
    <li>2 tbsp lemon juice</li>
    <li>2 tbsp olive oil</li>
    <li>Fresh cilantro for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">In a bowl, mix yogurt, ginger-garlic paste, spices, lemon juice, salt, and oil. Marinate chicken for at least 1 hour.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Parboil the potato wedges in salted water for 5–7 minutes. Drain and pat dry.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Thread chicken and potato pieces alternately on skewers.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Grill or bake at 200°C for 20–25 minutes, turning occasionally, until chicken is cooked through and potatoes are golden.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Garnish with fresh cilantro and serve with mint yogurt dip or salad.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">460</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">32g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">18g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">4g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">35g</span></div>
  `,
    CHEF_NAME: "Chef Aisha Mehra",
    CHEF_TITLE: "Middle Eastern Grill Expert",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/young-confident-caucasian-cook-girl-chef-uniform-crosses-arms-isolated-green-wall-with-copy-space_141793-33153.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "lasagna": {
    RECIPE_NAME: "Layered Mutton Lasagna",
    RECIPE_NAME_PART1: "Layered",
    RECIPE_NAME_PART2: "Mutton",
    RECIPE_NAME_PART3: "Lasagna",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/baked-lasagna-with-gourmet-italian-bolognese-sauce-generated-by-ai_188544-9608.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Italian Food",
    SERVINGS: "6",
    PREP_TIME: "30",
    COOK_TIME: "40",
    DIFFICULTY: "Advanced Level",
    RECIPE_DESCRIPTION: "Experience comfort in every bite with this rich and meaty mutton lasagna. Slow-cooked mutton ragu is layered between sheets of pasta with creamy béchamel and melted cheese, creating a hearty, indulgent dish that’s perfect for special occasions or weekend dinners.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Italian</a>
    <a href="#" class="tag">Lasagna</a>
    <a href="#" class="tag">Mutton</a>
    <a href="#" class="tag">Baked</a>
    <a href="#" class="tag">Hearty</a>
  `,
    INGREDIENTS_LIST: `
    <li>9 lasagna sheets</li>
    <li>500g minced mutton</li>
    <li>1 onion, finely chopped</li>
    <li>2 cloves garlic, minced</li>
    <li>2 cups tomato puree</li>
    <li>1 tsp dried oregano</li>
    <li>1/2 tsp chili flakes</li>
    <li>Salt and pepper to taste</li>
    <li>2 tbsp olive oil</li>
    <li>2 cups béchamel sauce</li>
    <li>2 cups shredded mozzarella cheese</li>
    <li>1/2 cup grated Parmesan cheese</li>
    <li>Fresh basil for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Boil lasagna sheets in salted water until al dente. Drain and keep aside.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Heat oil in a pan. Sauté onions and garlic until translucent. Add minced mutton and cook until browned.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add tomato puree, oregano, chili flakes, salt, and pepper. Simmer for 15–20 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">In a baking dish, layer lasagna sheets, meat sauce, béchamel sauce, and cheese. Repeat layers.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Top with Parmesan. Bake at 180°C for 30–35 minutes until golden and bubbly. Garnish with basil and serve.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">650</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">33g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">28g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">4g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">5g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">50g</span></div>
  `,
    CHEF_NAME: "Chef Luca Marinelli",
    CHEF_TITLE: "Rustic Italian Specialist",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/senior-man-with-red-yellow-peper_1157-44128.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },
  "orange_cheesecake": {
    RECIPE_NAME: "Mighty Super Orange Cheesecake",
    RECIPE_NAME_PART1: "Mighty",
    RECIPE_NAME_PART2: "Super Orange",
    RECIPE_NAME_PART3: "Cheesecake",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/lemon-chessescake-food-photography-recipe-idea_53876-47156.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Dessert",
    SERVINGS: "8",
    PREP_TIME: "25",
    COOK_TIME: "60",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "This vibrant and zesty orange cheesecake is a burst of citrus delight. Featuring a buttery biscuit base and creamy orange-infused filling, it's topped with a glossy orange glaze that makes it both eye-catching and irresistible. Perfect for citrus lovers and festive occasions.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Dessert</a>
    <a href="#" class="tag">Cheesecake</a>
    <a href="#" class="tag">Orange</a>
    <a href="#" class="tag">Citrus</a>
    <a href="#" class="tag">Baked</a>
  `,
    INGREDIENTS_LIST: `
    <li>200g digestive biscuits</li>
    <li>100g unsalted butter, melted</li>
    <li>500g cream cheese, room temperature</li>
    <li>200ml heavy cream</li>
    <li>150g granulated sugar</li>
    <li>Zest of 2 oranges</li>
    <li>Juice of 2 oranges</li>
    <li>3 large eggs</li>
    <li>1 tbsp cornstarch</li>
    <li>1 tsp vanilla extract</li>
    <li>For topping: 1/2 cup orange juice, 2 tbsp sugar, 1 tsp cornstarch</li>
    <li>Fresh orange slices for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Preheat oven to 160°C. Crush biscuits and mix with melted butter. Press into a springform pan. Chill while preparing filling.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">In a large bowl, beat cream cheese, sugar, and orange zest until smooth. Add orange juice, eggs, cream, cornstarch, and vanilla. Mix until well combined.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Pour the filling over the crust. Bake for 55–60 minutes or until center is set but slightly wobbly. Cool completely in oven with door ajar.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">For the topping, heat orange juice and sugar in a pan. Stir in cornstarch slurry and simmer until thickened. Cool slightly and spread over cheesecake.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Refrigerate for at least 4 hours or overnight. Garnish with fresh orange slices before serving.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">480</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">7g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">34g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">25g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">37g</span></div>
  `,
    CHEF_NAME: "Chef Saanvi Rao",
    CHEF_TITLE: "Citrus Dessert Artisan",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/confectioner-uniform-decorates-cake_1157-33243.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },
  "butterChicken": {
    RECIPE_NAME: "Butter Chicken",
    RECIPE_NAME_PART1: "Butter",
    RECIPE_NAME_PART2: "Chicken",
    RECIPE_NAME_PART3: "",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/healthy-homemade-meal-beef-curry-with-naan-generated-by-ai_188544-41071.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Indian Food",
    SERVINGS: "4",
    PREP_TIME: "20",
    COOK_TIME: "30",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Rich, creamy, and full of flavor, Butter Chicken is a North Indian delight. Tender chicken chunks simmered in a luscious tomato-based gravy infused with butter, cream, and aromatic spices create a luxurious dish that pairs beautifully with naan or basmati rice.",
    RECIPE_TAGS: `
      <a href="#" class="tag">Indian Food</a>
      <a href="#" class="tag">Butter Chicken</a>
      <a href="#" class="tag">Rich Gravy</a>
      <a href="#" class="tag">North Indian</a>
      <a href="#" class="tag">Featured Recipe</a>
    `,
    INGREDIENTS_LIST: `
      <li>500g boneless chicken</li>
      <li>2 tbsp butter</li>
      <li>1 cup tomato puree</li>
      <li>1/2 cup cream</li>
      <li>2 tbsp yogurt</li>
      <li>1 tsp garam masala</li>
      <li>1 tsp turmeric</li>
      <li>1 tsp red chili powder</li>
      <li>1 tbsp ginger-garlic paste</li>
      <li>Salt to taste</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item"><div class="instruction-number">01</div><div class="instruction-text">Marinate chicken with yogurt, turmeric, chili powder, and salt for 30 minutes.</div></li>
      <li class="instruction-item"><div class="instruction-number">02</div><div class="instruction-text">Cook marinated chicken in a pan until golden and cooked through.</div></li>
      <li class="instruction-item"><div class="instruction-number">03</div><div class="instruction-text">In a separate pan, melt butter and sauté ginger-garlic paste. Add tomato puree and cook for 10 minutes.</div></li>
      <li class="instruction-item"><div class="instruction-number">04</div><div class="instruction-text">Add cream, garam masala, salt and cooked chicken to the sauce. Simmer for 10 minutes.</div></li>
      <li class="instruction-item"><div class="instruction-number">05</div><div class="instruction-text">Serve hot with naan or rice, garnished with fresh coriander.</div></li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">420</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">30g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">28g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">3g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">5g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">12g</span></div>
    `,
    CHEF_NAME: "Chef Rajveer Singh",
    CHEF_TITLE: "Indian Cuisine Master",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/indian-man-mountains-male-traditional-turban-hinduist-with-special-things-rituals_1157-41086.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },
  "paneerTikka": {
    RECIPE_NAME: "Paneer Tikka",
    RECIPE_NAME_PART1: "Paneer",
    RECIPE_NAME_PART2: "Tikka",
    RECIPE_NAME_PART3: "",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili-top-view_2829-19996.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Indian Food",
    SERVINGS: "3",
    PREP_TIME: "15",
    COOK_TIME: "15",
    DIFFICULTY: "Easy Level",
    RECIPE_DESCRIPTION: "Paneer Tikka is a popular Indian appetizer where chunks of paneer (Indian cottage cheese) are marinated in spiced yogurt, skewered with vegetables, and grilled or roasted until perfectly charred. A delicious vegetarian delight!",
    RECIPE_TAGS: `
      <a href="#" class="tag">Indian Food</a>
      <a href="#" class="tag">Paneer</a>
      <a href="#" class="tag">Grilled</a>
      <a href="#" class="tag">Vegetarian</a>
    `,
    INGREDIENTS_LIST: `
      <li>250g paneer cubes</li>
      <li>1/2 cup thick yogurt</li>
      <li>1 tsp red chili powder</li>
      <li>1/2 tsp turmeric</li>
      <li>1 tsp garam masala</li>
      <li>1 tsp ginger-garlic paste</li>
      <li>Salt to taste</li>
      <li>1 onion, cubed</li>
      <li>1 capsicum, cubed</li>
      <li>1 tbsp lemon juice</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item"><div class="instruction-number">01</div><div class="instruction-text">Mix yogurt with spices, ginger-garlic paste, lemon juice, and salt to create marinade.</div></li>
      <li class="instruction-item"><div class="instruction-number">02</div><div class="instruction-text">Coat paneer and veggies in the marinade and refrigerate for 30 minutes.</div></li>
      <li class="instruction-item"><div class="instruction-number">03</div><div class="instruction-text">Skewer paneer and veggies alternately on sticks.</div></li>
      <li class="instruction-item"><div class="instruction-number">04</div><div class="instruction-text">Grill or bake at 200°C for 12-15 minutes until charred.</div></li>
      <li class="instruction-item"><div class="instruction-number">05</div><div class="instruction-text">Serve hot with green chutney and lemon wedges.</div></li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">280</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">18g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">20g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">2g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">3g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">8g</span></div>
    `,
    CHEF_NAME: "Chef Rajveer Singh",
    CHEF_TITLE: "Indian Cuisine Master",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/indian-man-mountains-male-traditional-turban-hinduist-with-special-things-rituals_1157-41086.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"

  },
  "choleBhature": {
    RECIPE_NAME: "Chole Bhature",
    RECIPE_NAME_PART1: "Chole",
    RECIPE_NAME_PART2: "Bhature",
    RECIPE_NAME_PART3: "",
    HERO_IMAGE_URL: "https://image.shutterstock.com/image-photo/chole-bhature-north-indian-food-260nw-2241211611.jpg",
    CATEGORY: "Indian Food",
    SERVINGS: "4",
    PREP_TIME: "30",
    COOK_TIME: "25",
    DIFFICULTY: "Advanced Level",
    RECIPE_DESCRIPTION: "A North Indian classic, Chole Bhature pairs spicy chickpea curry with soft, fluffy deep-fried bread. The robust flavors and contrasting textures make this dish a crowd favorite for lunch or special brunches.",
    RECIPE_TAGS: `
      <a href="#" class="tag">Indian Food</a>
      <a href="#" class="tag">Street Food</a>
      <a href="#" class="tag">Spicy</a>
      <a href="#" class="tag">North Indian</a>
    `,
    INGREDIENTS_LIST: `
      <li>2 cups chickpeas (chole)</li>
      <li>1 large onion, chopped</li>
      <li>2 tomatoes, pureed</li>
      <li>1 tbsp ginger-garlic paste</li>
      <li>1 tsp chole masala</li>
      <li>1/2 tsp turmeric</li>
      <li>1 tsp red chili powder</li>
      <li>2 cups maida (refined flour)</li>
      <li>1/2 cup yogurt</li>
      <li>Salt to taste</li>
      <li>Oil for frying</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item"><div class="instruction-number">01</div><div class="instruction-text">Soak chickpeas overnight and pressure cook until soft.</div></li>
      <li class="instruction-item"><div class="instruction-number">02</div><div class="instruction-text">Sauté onions, ginger-garlic, spices, and tomato puree. Add cooked chickpeas and simmer.</div></li>
      <li class="instruction-item"><div class="instruction-number">03</div><div class="instruction-text">Make a soft dough with maida, yogurt, and salt. Rest for 1 hour.</div></li>
      <li class="instruction-item"><div class="instruction-number">04</div><div class="instruction-text">Roll dough into discs and deep fry until golden.</div></li>
      <li class="instruction-item"><div class="instruction-number">05</div><div class="instruction-text">Serve hot bhature with spicy chole, onion rings, and pickle.</div></li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">520</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">25g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">8g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">4g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">58g</span></div>
    `,
    CHEF_NAME: "Chef Rajveer Singh",
    CHEF_TITLE: "Indian Cuisine Master",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/indian-man-mountains-male-traditional-turban-hinduist-with-special-things-rituals_1157-41086.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },
  "masalaDosa": {
    RECIPE_NAME: "Masala Dosa",
    RECIPE_NAME_PART1: "Masala",
    RECIPE_NAME_PART2: "Dosa",
    RECIPE_NAME_PART3: "",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/delicious-indian-dosa-composition_23-2149086051.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "South Indian Food",
    SERVINGS: "3",
    PREP_TIME: "10",
    COOK_TIME: "15",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "A crispy South Indian crepe made from fermented rice-lentil batter, filled with a spiced mashed potato filling. Masala Dosa is served with coconut chutney and sambar, offering a wholesome and flavorful meal.",
    RECIPE_TAGS: `
      <a href="#" class="tag">South Indian</a>
      <a href="#" class="tag">Dosa</a>
      <a href="#" class="tag">Vegetarian</a>
      <a href="#" class="tag">Gluten-Free</a>
    `,
    INGREDIENTS_LIST: `
      <li>2 cups dosa batter</li>
      <li>2 boiled potatoes</li>
      <li>1 onion, sliced</li>
      <li>1/2 tsp mustard seeds</li>
      <li>1/2 tsp turmeric</li>
      <li>1 green chili, chopped</li>
      <li>Salt to taste</li>
      <li>1 tbsp oil</li>
      <li>Few curry leaves</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item"><div class="instruction-number">01</div><div class="instruction-text">Prepare filling by sautéing mustard seeds, curry leaves, onions, and mashed potatoes with spices.</div></li>
      <li class="instruction-item"><div class="instruction-number">02</div><div class="instruction-text">Heat a non-stick tawa, pour batter, and spread evenly to form a thin crepe.</div></li>
      <li class="instruction-item"><div class="instruction-number">03</div><div class="instruction-text">Drizzle oil around edges and cook until crispy.</div></li>
      <li class="instruction-item"><div class="instruction-number">04</div><div class="instruction-text">Place the filling in the center and fold the dosa.</div></li>
      <li class="instruction-item"><div class="instruction-number">05</div><div class="instruction-text">Serve with coconut chutney and hot sambar.</div></li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">300</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">10g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">12g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">4g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">38g</span></div>
    `,
    CHEF_NAME: "Chef Rajveer Singh",
    CHEF_TITLE: "Indian Cuisine Master",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/indian-man-mountains-male-traditional-turban-hinduist-with-special-things-rituals_1157-41086.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },
  "sushi": {
    RECIPE_NAME: "Traditional Japanese Sushi",
    RECIPE_NAME_PART1: "Traditional",
    RECIPE_NAME_PART2: "Japanese",
    RECIPE_NAME_PART3: "Sushi",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/highly-detailed-seafood-sushi-dish-with-simple-black-background_23-2151349381.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Japanese Food",
    SERVINGS: "4",
    PREP_TIME: "60",
    COOK_TIME: "20",
    DIFFICULTY: "Advanced Level",
    RECIPE_DESCRIPTION: "Dive into the exquisite world of Japanese cuisine with our Traditional Sushi recipe. Featuring perfectly seasoned rice paired with fresh fish and crisp vegetables, each roll is a bite of harmony. This dish celebrates precision, balance, and the beauty of simplicity that defines Japanese culinary art.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Japanese Food</a>
    <a href="#" class="tag">Seafood</a>
    <a href="#" class="tag">Rice Dish</a>
    <a href="#" class="tag">Healthy</a>
    <a href="#" class="tag">Traditional</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 cups sushi rice</li>
    <li>2.5 cups water</li>
    <li>1/3 cup rice vinegar</li>
    <li>2 tbsp sugar</li>
    <li>1 tsp salt</li>
    <li>Nori (seaweed) sheets</li>
    <li>Fresh raw fish (tuna, salmon, etc.)</li>
    <li>Vegetables (cucumber, avocado)</li>
    <li>Soy sauce, wasabi, and pickled ginger for serving</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Rinse sushi rice under cold water until clear. Cook with water in a rice cooker or pot.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Mix vinegar, sugar, and salt. Gently fold into warm rice. Let cool to room temperature.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Place nori on a bamboo mat. Spread rice evenly and add desired fillings.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Roll tightly, slice with a wet sharp knife, and serve with soy sauce and condiments.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">250</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">4g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">2g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">40g</span></div>
  `,
    CHEF_NAME: "Chef Aiko Tanaka",
    CHEF_TITLE: "Japanese Cuisine Expert",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/medium-shot-professional-chef-posing_23-2151232169.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },
  "ramen": {
    RECIPE_NAME: "Authentic Japanese Ramen",
    RECIPE_NAME_PART1: "Authentic",
    RECIPE_NAME_PART2: "Japanese",
    RECIPE_NAME_PART3: "Ramen",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/delicious-ramen-dark-surface_1150-41971.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Japanese Food",
    SERVINGS: "2",
    PREP_TIME: "30",
    COOK_TIME: "45",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Savor the rich and savory flavors of Authentic Japanese Ramen, a soul-warming noodle soup with a flavorful broth, chewy noodles, and classic toppings like soft-boiled egg, chashu pork, and nori. This comforting bowl brings the essence of Japan right to your table.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Japanese Food</a>
    <a href="#" class="tag">Noodle</a>
    <a href="#" class="tag">Comfort Food</a>
    <a href="#" class="tag">Soup</a>
    <a href="#" class="tag">Authentic</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 packs ramen noodles</li>
    <li>4 cups chicken broth</li>
    <li>2 tbsp soy sauce</li>
    <li>1 tbsp miso paste</li>
    <li>1 tbsp sesame oil</li>
    <li>2 boiled eggs</li>
    <li>Sliced green onions</li>
    <li>Sliced chashu pork or chicken</li>
    <li>Nori sheets</li>
    <li>Corn and bamboo shoots (optional)</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Prepare broth by heating chicken broth, soy sauce, miso paste, and sesame oil in a pot.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Cook ramen noodles separately according to package instructions and drain.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Pour hot broth into bowls, add noodles, and arrange toppings like egg, pork, and nori.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Garnish with green onions and enjoy hot.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">450</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">20g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">18g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">4g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">50g</span></div>
  `,
    CHEF_NAME: "Chef Aiko Tanaka",
    CHEF_TITLE: "Japanese Cuisine Expert",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/medium-shot-professional-chef-posing_23-2151232169.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },
  "tempura": {
    RECIPE_NAME: "Crispy Japanese Tempura",
    RECIPE_NAME_PART1: "Crispy",
    RECIPE_NAME_PART2: "Japanese",
    RECIPE_NAME_PART3: "Tempura",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/side-view-tempura-shrimps-with-sweet-chili-sauce-slice-lemon-black-olive-plate_141793-5136.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Japanese Food",
    SERVINGS: "3",
    PREP_TIME: "20",
    COOK_TIME: "25",
    DIFFICULTY: "Beginner Friendly",
    RECIPE_DESCRIPTION: "Delight in the light and crispy texture of traditional Japanese Tempura. This dish features a medley of shrimp and vegetables dipped in airy batter and fried to golden perfection. A true taste of Japanese street food at its finest!",
    RECIPE_TAGS: `
    <a href="#" class="tag">Japanese Food</a>
    <a href="#" class="tag">Fried</a>
    <a href="#" class="tag">Seafood</a>
    <a href="#" class="tag">Crispy</a>
    <a href="#" class="tag">Appetizer</a>
  `,
    INGREDIENTS_LIST: `
    <li>10 shrimp, peeled and deveined</li>
    <li>1 cup sliced vegetables (carrots, bell pepper, sweet potato)</li>
    <li>1 cup all-purpose flour</li>
    <li>1 egg</li>
    <li>1 cup ice-cold water</li>
    <li>Oil for deep frying</li>
    <li>Tentsuyu sauce (for dipping)</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Heat oil in a deep pan to 350°F (175°C). Pat shrimp and vegetables dry.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Mix egg and ice water, then gently stir in flour to make a lumpy batter.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Dip shrimp and vegetables in batter, then fry in batches until golden and crisp.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Drain on paper towels and serve immediately with dipping sauce.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">310</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">14g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">14g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">2g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">32g</span></div>
  `,
    CHEF_NAME: "Chef Aiko Tanaka",
    CHEF_TITLE: "Japanese Cuisine Expert",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/medium-shot-professional-chef-posing_23-2151232169.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },
  "tonkatsu": {
    RECIPE_NAME: "Japanese Pork Tonkatsu",
    RECIPE_NAME_PART1: "Japanese",
    RECIPE_NAME_PART2: "Pork",
    RECIPE_NAME_PART3: "Tonkatsu",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/japanese-chop-with-cabbage-tonkatsu-sauce_2829-18616.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Japanese Food",
    SERVINGS: "2",
    PREP_TIME: "15",
    COOK_TIME: "20",
    DIFFICULTY: "Beginner Friendly",
    RECIPE_DESCRIPTION: "Satisfy your cravings with Japanese Pork Tonkatsu, a crispy and juicy breaded pork cutlet fried to golden perfection. Served with shredded cabbage and tangy tonkatsu sauce, this dish offers a delicious contrast of textures and flavors.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Japanese Food</a>
    <a href="#" class="tag">Fried</a>
    <a href="#" class="tag">Pork</a>
    <a href="#" class="tag">Comfort Food</a>
    <a href="#" class="tag">Main Course</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 boneless pork chops</li>
    <li>Salt and pepper to taste</li>
    <li>1/2 cup all-purpose flour</li>
    <li>1 egg, beaten</li>
    <li>1 cup panko breadcrumbs</li>
    <li>Oil for frying</li>
    <li>Tonkatsu sauce and shredded cabbage (for serving)</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Pound pork chops to flatten slightly. Season with salt and pepper.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Dredge in flour, dip in egg, then coat with panko.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Fry in hot oil until golden and cooked through, about 3–4 minutes per side.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Drain and slice. Serve with tonkatsu sauce and cabbage.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">420</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">26g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">34g</span></div>
  `,
    CHEF_NAME: "Chef Aiko Tanaka",
    CHEF_TITLE: "Japanese Cuisine Expert",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/medium-shot-professional-chef-posing_23-2151232169.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },
  "onigiri": {
    RECIPE_NAME: "Simple Japanese Onigiri",
    RECIPE_NAME_PART1: "Simple",
    RECIPE_NAME_PART2: "Japanese",
    RECIPE_NAME_PART3: "Onigiri",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/close-up-view-delicious-sushi-concept_23-2148678288.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Japanese Food",
    SERVINGS: "4",
    PREP_TIME: "20",
    COOK_TIME: "10",
    DIFFICULTY: "Easy",
    RECIPE_DESCRIPTION: "Japanese Onigiri, or rice balls, are a delightful grab-and-go snack made with seasoned rice and savory fillings, wrapped in nori. Whether stuffed with tuna mayo or pickled plum, these portable treats are a staple of Japanese lunchboxes.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Japanese Food</a>
    <a href="#" class="tag">Rice Dish</a>
    <a href="#" class="tag">Snack</a>
    <a href="#" class="tag">Lunchbox</a>
    <a href="#" class="tag">Simple</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 cups cooked short-grain rice</li>
    <li>1/2 tsp salt</li>
    <li>1/2 cup tuna mixed with mayo</li>
    <li>Nori seaweed sheets</li>
    <li>Plastic wrap for shaping (optional)</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Let cooked rice cool slightly. Mix in salt.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Wet hands or use plastic wrap to shape rice into triangle or oval shapes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add a spoonful of tuna mayo inside before sealing the rice ball.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Wrap with nori and serve or pack for later.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">210</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">6g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">4g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">36g</span></div>
  `,
    CHEF_NAME: "Chef Aiko Tanaka",
    CHEF_TITLE: "Japanese Cuisine Expert",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/medium-shot-professional-chef-posing_23-2151232169.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },
  "tacos": {
    RECIPE_NAME: "Authentic Mexican Tacos",
    RECIPE_NAME_PART1: "Authentic",
    RECIPE_NAME_PART2: "Mexican",
    RECIPE_NAME_PART3: "Tacos",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/close-up-delicious-tacos_23-2150831119.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Mexican Food",
    SERVINGS: "4",
    PREP_TIME: "25",
    COOK_TIME: "15",
    DIFFICULTY: "Easy Level",
    RECIPE_DESCRIPTION: "Savor the bold and vibrant flavors of Mexico with our Authentic Mexican Tacos! Featuring warm corn tortillas filled with juicy grilled meat, topped with fresh onions, cilantro, and zesty lime—these tacos are a street-food classic perfect for any fiesta.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Mexican Food</a>
    <a href="#" class="tag">Street Food</a>
    <a href="#" class="tag">Easy</a>
    <a href="#" class="tag">Tortilla</a>
    <a href="#" class="tag">Party Favorite</a>
  `,
    INGREDIENTS_LIST: `
    <li>8 small corn tortillas</li>
    <li>500g grilled beef or chicken, chopped</li>
    <li>1/2 cup diced onions</li>
    <li>1/2 cup chopped fresh cilantro</li>
    <li>2 limes, cut into wedges</li>
    <li>Salsa of your choice</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item"><div class="instruction-number">01</div><div class="instruction-text">Warm the tortillas on a skillet until soft and pliable.</div></li>
    <li class="instruction-item"><div class="instruction-number">02</div><div class="instruction-text">Fill each tortilla with grilled meat.</div></li>
    <li class="instruction-item"><div class="instruction-number">03</div><div class="instruction-text">Top with diced onions and chopped cilantro.</div></li>
    <li class="instruction-item"><div class="instruction-number">04</div><div class="instruction-text">Squeeze fresh lime juice over the filling.</div></li>
    <li class="instruction-item"><div class="instruction-number">05</div><div class="instruction-text">Serve warm with salsa on the side.</div></li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">320</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">20g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">2g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">28g</span></div>
  `,
    CHEF_NAME: "Chef Alejandra Morales",
    CHEF_TITLE: "Mexican Cuisine Expert",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/front-view-man-with-delicious-taco_23-2151048010.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "guacamole": {
    RECIPE_NAME: "Fresh Homemade Guacamole",
    RECIPE_NAME_PART1: "Fresh",
    RECIPE_NAME_PART2: "Homemade",
    RECIPE_NAME_PART3: "Guacamole",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/bowl-guacamole-with-tortilla-chips-black-slate-background_9975-124623.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Mexican Food",
    SERVINGS: "6",
    PREP_TIME: "10",
    COOK_TIME: "0",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "Dive into the creamy goodness of our Fresh Homemade Guacamole! Made with ripe avocados, lime juice, tomatoes, and onions, this dip is the ultimate crowd-pleaser that brings freshness and flavor to every bite.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Mexican Food</a>
    <a href="#" class="tag">Dip</a>
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">Appetizer</a>
  `,
    INGREDIENTS_LIST: `
    <li>3 ripe avocados</li>
    <li>1 lime, juiced</li>
    <li>1/2 tsp salt</li>
    <li>1/2 cup diced tomatoes</li>
    <li>1/4 cup finely chopped onions</li>
    <li>2 tbsp chopped cilantro</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item"><div class="instruction-number">01</div><div class="instruction-text">Cut and scoop avocados into a bowl.</div></li>
    <li class="instruction-item"><div class="instruction-number">02</div><div class="instruction-text">Mash with a fork until smooth but chunky.</div></li>
    <li class="instruction-item"><div class="instruction-number">03</div><div class="instruction-text">Add lime juice and salt. Mix well.</div></li>
    <li class="instruction-item"><div class="instruction-number">04</div><div class="instruction-text">Stir in tomatoes, onions, and cilantro.</div></li>
    <li class="instruction-item"><div class="instruction-number">05</div><div class="instruction-text">Serve immediately with tortilla chips.</div></li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">180</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">2g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">15g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">7g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">10g</span></div>
  `,
    CHEF_NAME: "Chef Alejandra Morales",
    CHEF_TITLE: "Mexican Cuisine Expert",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/front-view-man-with-delicious-taco_23-2151048010.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },
  "churros": {
    RECIPE_NAME: "Classic Cinnamon Churros",
    RECIPE_NAME_PART1: "Classic",
    RECIPE_NAME_PART2: "Cinnamon",
    RECIPE_NAME_PART3: "Churros",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/homemade-sweet-fritter-with-sugar-rustic-table-generative-ai_188544-12265.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Mexican Food",
    SERVINGS: "6",
    PREP_TIME: "20",
    COOK_TIME: "20",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Enjoy the crispy, golden delight of Classic Cinnamon Churros! These deep-fried dough sticks, coated in cinnamon sugar, are perfect for dipping in chocolate and make a sweet ending to any Mexican meal.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Mexican Food</a>
    <a href="#" class="tag">Dessert</a>
    <a href="#" class="tag">Sweet Treat</a>
    <a href="#" class="tag">Street Food</a>
    <a href="#" class="tag">Snack</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 cup water</li>
    <li>2 tbsp sugar</li>
    <li>2 tbsp vegetable oil</li>
    <li>1 cup all-purpose flour</li>
    <li>1/2 cup sugar + 1 tsp cinnamon (for coating)</li>
    <li>Oil for frying</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item"><div class="instruction-number">01</div><div class="instruction-text">In a saucepan, boil water, sugar, and oil.</div></li>
    <li class="instruction-item"><div class="instruction-number">02</div><div class="instruction-text">Stir in flour until mixture forms a ball.</div></li>
    <li class="instruction-item"><div class="instruction-number">03</div><div class="instruction-text">Spoon dough into a piping bag with a star tip.</div></li>
    <li class="instruction-item"><div class="instruction-number">04</div><div class="instruction-text">Pipe strips into hot oil and fry until golden brown.</div></li>
    <li class="instruction-item"><div class="instruction-number">05</div><div class="instruction-text">Roll churros in cinnamon sugar and serve.</div></li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">220</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">30g</span></div>
  `,
    CHEF_NAME: "Chef Alejandra Morales",
    CHEF_TITLE: "Mexican Cuisine Expert",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/front-view-man-with-delicious-taco_23-2151048010.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "enchiladas": {
    RECIPE_NAME: "Cheesy Chicken Enchiladas",
    RECIPE_NAME_PART1: "Cheesy",
    RECIPE_NAME_PART2: "Chicken",
    RECIPE_NAME_PART3: "Enchiladas",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/selective-focus-shot-mexican-style-delicious-pork-flautas-white-plate_181624-38905.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Mexican Food",
    SERVINGS: "4",
    PREP_TIME: "30",
    COOK_TIME: "25",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Packed with tender chicken, wrapped in soft tortillas, and smothered in rich enchilada sauce and melted cheese, these Cheesy Chicken Enchiladas are the ultimate comfort food straight from the heart of Mexico.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Mexican Food</a>
    <a href="#" class="tag">Comfort Food</a>
    <a href="#" class="tag">Cheesy</a>
    <a href="#" class="tag">Dinner</a>
    <a href="#" class="tag">Baked</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 cups cooked shredded chicken</li>
    <li>8 flour tortillas</li>
    <li>2 cups enchilada sauce</li>
    <li>2 cups shredded cheddar cheese</li>
    <li>1/2 cup diced onions</li>
    <li>1/2 tsp cumin</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item"><div class="instruction-number">01</div><div class="instruction-text">Preheat oven to 375°F (190°C).</div></li>
    <li class="instruction-item"><div class="instruction-number">02</div><div class="instruction-text">Mix chicken with 1 cup of cheese, onions, and cumin.</div></li>
    <li class="instruction-item"><div class="instruction-number">03</div><div class="instruction-text">Fill tortillas with the mixture and roll up.</div></li>
    <li class="instruction-item"><div class="instruction-number">04</div><div class="instruction-text">Place in baking dish, cover with enchilada sauce and remaining cheese.</div></li>
    <li class="instruction-item"><div class="instruction-number">05</div><div class="instruction-text">Bake for 25 minutes until cheese is bubbly. Serve hot.</div></li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">450</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">28g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">4g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">35g</span></div>
  `,
    CHEF_NAME: "Chef Alejandra Morales",
    CHEF_TITLE: "Mexican Cuisine Expert",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/front-view-man-with-delicious-taco_23-2151048010.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "quesadillas": {
    RECIPE_NAME: "Cheesy Veg Quesadillas",
    RECIPE_NAME_PART1: "Cheesy",
    RECIPE_NAME_PART2: "Veg",
    RECIPE_NAME_PART3: "Quesadillas",
    HERO_IMAGE_URL: "https://img.freepik.com/free-photo/mexican-chicken-quesadillas-with-cheese-peppers-wooden-table_123827-28004.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740",
    CATEGORY: "Mexican Food",
    SERVINGS: "4",
    PREP_TIME: "15",
    COOK_TIME: "10",
    DIFFICULTY: "Easy Level",
    RECIPE_DESCRIPTION: "Crispy on the outside, melty on the inside—our Cheesy Veg Quesadillas are loaded with sautéed veggies and gooey cheese, grilled to perfection. A quick and tasty meal that never disappoints.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Mexican Food</a>
    <a href="#" class="tag">Vegetarian</a>
    <a href="#" class="tag">Quick</a>
    <a href="#" class="tag">Snack</a>
    <a href="#" class="tag">Cheesy</a>
  `,
    INGREDIENTS_LIST: `
    <li>4 large flour tortillas</li>
    <li>1 cup shredded cheddar cheese</li>
    <li>1/2 cup bell peppers, sliced</li>
    <li>1/2 cup onions, sliced</li>
    <li>1/2 cup mushrooms, sliced</li>
    <li>1 tbsp olive oil</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item"><div class="instruction-number">01</div><div class="instruction-text">Heat oil in a pan and sauté vegetables until soft.</div></li>
    <li class="instruction-item"><div class="instruction-number">02</div><div class="instruction-text">Place tortilla on a skillet and sprinkle cheese on half.</div></li>
    <li class="instruction-item"><div class="instruction-number">03</div><div class="instruction-text">Add sautéed veggies and fold the tortilla.</div></li>
    <li class="instruction-item"><div class="instruction-number">04</div><div class="instruction-text">Cook until golden on both sides.</div></li>
    <li class="instruction-item"><div class="instruction-number">05</div><div class="instruction-text">Cut into wedges and serve warm.</div></li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">300</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">14g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">2g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">32g</span></div>
  `,
    CHEF_NAME: "Chef Alejandra Morales",
    CHEF_TITLE: "Mexican Cuisine Expert",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/front-view-man-with-delicious-taco_23-2151048010.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },
  "grilledTandooriChicken": {
    RECIPE_NAME: "Grilled Tandoori Chicken",
    RECIPE_NAME_PART1: "Grilled",
    RECIPE_NAME_PART2: "Tandoori",
    RECIPE_NAME_PART3: "Chicken",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/147452586/photo/tandoori-chicken-on-naan.jpg?s=612x612&w=0&k=20&c=Biv-IjQgjPBIzsrjsjkgaOlGlLNFnlFJdcNFJwQBlSc=",
    CATEGORY: "Indian Cuisine",
    SERVINGS: "4",
    PREP_TIME: "20",
    COOK_TIME: "30",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Experience authentic Indian flavors with this Grilled Tandoori Chicken recipe. Marinated in a blend of yogurt and spices, then grilled to perfection for a smoky, tender, and juicy finish.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Indian Cuisine</a>
    <a href="#" class="tag">Grilled</a>
    <a href="#" class="tag">Chicken</a>
    <a href="#" class="tag">Spicy</a>
    <a href="#" class="tag">High Protein</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 lb chicken thighs, boneless</li>
    <li>1 cup yogurt</li>
    <li>2 tbsp tandoori masala powder</li>
    <li>1 tbsp lemon juice</li>
    <li>1 tsp garlic paste</li>
    <li>1 tsp ginger paste</li>
    <li>1 tsp chili powder</li>
    <li>Salt to taste</li>
    <li>2 tbsp vegetable oil</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Mix yogurt, tandoori masala, lemon juice, garlic, ginger, chili powder, and salt in a bowl.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add chicken thighs to the marinade. Cover and refrigerate for at least 2 hours.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Preheat grill to medium-high heat. Brush chicken with oil and grill for 6-7 minutes per side.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Ensure chicken is cooked through and has a slight char. Serve hot with lemon wedges.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">350</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">45g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">15g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">5g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },
  "moongDalSalad": {
    RECIPE_NAME: "Moong Dal Salad",
    RECIPE_NAME_PART1: "Moong",
    RECIPE_NAME_PART2: "Dal",
    RECIPE_NAME_PART3: "Salad",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/629456726/photo/green-gram-or-moong-dal-usal-or-salad.jpg?s=612x612&w=0&k=20&c=J93_D10JpPTb2Wr37r3Ap5c7578WMSramzv7i1TzC5Y=",
    CATEGORY: "High Protein Salad",
    SERVINGS: "2",
    PREP_TIME: "10",
    COOK_TIME: "0",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A refreshing and protein-packed salad made with soaked moong dal, fresh vegetables, and a zesty lemon dressing. Perfect for a light lunch or as a healthy side dish full of fiber and flavor.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Healthy</a>
    <a href="#" class="tag">High Protein</a>
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Salad</a>
    <a href="#" class="tag">Quick</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 cup moong dal (soaked overnight)</li>
    <li>1/2 cup grated carrots</li>
    <li>1/2 cup chopped cucumber</li>
    <li>1 small tomato, chopped</li>
    <li>2 tbsp chopped coriander leaves</li>
    <li>1 green chili, chopped (optional)</li>
    <li>1 tbsp lemon juice</li>
    <li>Salt and black pepper to taste</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Drain the soaked moong dal and transfer it to a bowl.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add grated carrots, cucumber, tomato, green chili, and coriander leaves.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Drizzle lemon juice and sprinkle salt and pepper. Mix well.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Serve immediately or chill for 10 minutes before serving.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">180</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">7g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">25g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },
  "quinoaBlackBeanBowl": {
    RECIPE_NAME: "Quinoa Black Bean Bowl",
    RECIPE_NAME_PART1: "Quinoa",
    RECIPE_NAME_PART2: "Black",
    RECIPE_NAME_PART3: "Bean Bowl",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1161511310/photo/mexican-black-bean-corn-quinoa-salad-in-clay-bowl-top-view-copy-space.jpg?s=612x612&w=0&k=20&c=RKswBDtsnn_fmOf4lsNU_-uPLDi5bqustIBk02NBwLg=",
    CATEGORY: "High Protein Grain Bowl",
    SERVINGS: "2",
    PREP_TIME: "15",
    COOK_TIME: "15",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A wholesome and colorful bowl packed with quinoa, black beans, corn, and avocado. This nutrient-dense dish offers a balance of protein, fiber, and healthy fats, making it perfect for a post-workout meal or a hearty lunch.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">High Protein</a>
    <a href="#" class="tag">Fiber Rich</a>
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Bowl Meal</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 cup cooked quinoa</li>
    <li>1/2 cup canned black beans, rinsed</li>
    <li>1/4 cup boiled sweet corn</li>
    <li>1/4 cup diced red bell pepper</li>
    <li>1/4 cup chopped cucumber</li>
    <li>1/2 avocado, sliced</li>
    <li>1 tbsp lemon juice</li>
    <li>1/2 tsp cumin powder</li>
    <li>Salt and pepper to taste</li>
    <li>Fresh coriander for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">In a bowl, add cooked quinoa as the base.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Layer black beans, corn, red bell pepper, cucumber, and sliced avocado on top.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Drizzle with lemon juice, sprinkle cumin powder, salt, and pepper.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Garnish with fresh coriander and serve chilled or at room temperature.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">280</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">13g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">9g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">8g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">2g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">35g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },
  "turkeyLettuceWraps": {
    RECIPE_NAME: "Turkey Lettuce Wraps",
    RECIPE_NAME_PART1: "Turkey",
    RECIPE_NAME_PART2: "Lettuce",
    RECIPE_NAME_PART3: "Wraps",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/888366454/photo/chicken-wrap.jpg?s=612x612&w=0&k=20&c=smy2oTsWnDDDEaS_Rkn6Jj-7KXll4FlO_aYR9BoKcu0=",
    CATEGORY: "Low-Carb Wrap",
    SERVINGS: "3",
    PREP_TIME: "10",
    COOK_TIME: "10",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "Light, crisp, and loaded with flavor, these Turkey Lettuce Wraps are perfect for a low-carb lunch. Made with lean ground turkey and Asian-inspired flavors, they’re quick to make and high in protein.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Low Carb</a>
    <a href="#" class="tag">Quick</a>
    <a href="#" class="tag">High Protein</a>
    <a href="#" class="tag">Healthy</a>
    <a href="#" class="tag">Lunch</a>
  `,
    INGREDIENTS_LIST: `
    <li>1/2 lb ground turkey</li>
    <li>1 tbsp soy sauce (low sodium)</li>
    <li>1 tsp sesame oil</li>
    <li>1/2 tsp grated ginger</li>
    <li>1 garlic clove, minced</li>
    <li>1/4 cup chopped spring onions</li>
    <li>6 large lettuce leaves (like iceberg or romaine)</li>
    <li>Salt and pepper to taste</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Heat sesame oil in a pan and sauté garlic and ginger until fragrant.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add ground turkey, soy sauce, and cook until browned. Season with salt and pepper.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Mix in chopped spring onions and remove from heat.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Scoop the turkey mixture into washed lettuce leaves and serve immediately.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },
  "grilledChickenFajitas": {
    RECIPE_NAME: "Grilled Chicken Fajitas",
    RECIPE_NAME_PART1: "Grilled",
    RECIPE_NAME_PART2: "Chicken",
    RECIPE_NAME_PART3: "Fajitas",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/843375336/photo/grilled-chicken-kebab-doner-wrap-with-onion-parsley-and-tomato-on-rustic-white-painted-wood.jpg?s=612x612&w=0&k=20&c=B_LxbfaiWwJ42tTahp9W3gj9WVbU_fhgDWkj2flesPM=",
    CATEGORY: "High Protein Lunch",
    SERVINGS: "3",
    PREP_TIME: "15",
    COOK_TIME: "15",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "These smoky grilled chicken fajitas are bursting with flavor from spiced chicken strips, colorful bell peppers, and onions. Serve them with tortillas and your favorite toppings for a satisfying meal.",
    RECIPE_TAGS: `
    <a href="#" class="tag">High Protein</a>
    <a href="#" class="tag">Mexican</a>
    <a href="#" class="tag">Lunch</a>
    <a href="#" class="tag">Grilled</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 boneless chicken breasts, sliced</li>
    <li>1 red bell pepper, sliced</li>
    <li>1 yellow bell pepper, sliced</li>
    <li>1 red onion, sliced</li>
    <li>2 tbsp olive oil</li>
    <li>1 tsp chili powder</li>
    <li>1 tsp cumin</li>
    <li>1/2 tsp paprika</li>
    <li>1/2 tsp garlic powder</li>
    <li>Salt and pepper to taste</li>
    <li>Juice of 1 lime</li>
    <li>Whole wheat tortillas (for serving)</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">In a bowl, mix olive oil, lime juice, and all spices. Toss chicken, bell peppers, and onion in the marinade and let sit for 10 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Heat a grill pan over medium-high heat. Cook the marinated ingredients until chicken is cooked through and vegetables are slightly charred.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Serve hot in warmed tortillas with salsa, sour cream, or guacamole.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },
  "sweetPotatoChaat": {
    RECIPE_NAME: "Sweet Potato Chaat",
    RECIPE_NAME_PART1: "Sweet",
    RECIPE_NAME_PART2: "Potato",
    RECIPE_NAME_PART3: "Chaat",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1198450549/photo/aloo-chaat-or-alu-chat-is-a-popular-street-food-originating-from-the-indian-subcontinent.jpg?s=612x612&w=0&k=20&c=V-6OyDwnQX_SXccrHG9t24EDYYiaH8SF7b1w_3kC8SM=",
    CATEGORY: "Healthy Carbs Snack",
    SERVINGS: "2",
    PREP_TIME: "10",
    COOK_TIME: "15",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A tangy and spicy street-style chaat made with roasted sweet potatoes, perfect for a healthy yet flavorful snack. Bursting with flavors from spices, chutneys, and fresh herbs.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegetarian</a>
    <a href="#" class="tag">Indian</a>
    <a href="#" class="tag">Snack</a>
    <a href="#" class="tag">Chaat</a>
    <a href="#" class="tag">Carbs</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 medium sweet potatoes, boiled and diced</li>
    <li>1 small red onion, finely chopped</li>
    <li>1 green chili, finely chopped (optional)</li>
    <li>1 tsp chaat masala</li>
    <li>1/2 tsp cumin powder</li>
    <li>Salt to taste</li>
    <li>1 tbsp lemon juice</li>
    <li>2 tbsp chopped coriander</li>
    <li>Tamarind chutney and green chutney (to drizzle)</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Boil or roast sweet potatoes until tender, then peel and dice them.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">In a bowl, mix sweet potatoes with onion, chili, spices, salt, and lemon juice.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Top with chutneys and coriander. Serve immediately for best flavor.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },
  "vegetablePulao": {
    RECIPE_NAME: "Vegetable Pulao",
    RECIPE_NAME_PART1: "Vegetable",
    RECIPE_NAME_PART2: "Pulao",
    RECIPE_NAME_PART3: "",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/980135772/photo/indian-vegetable-pulav-or-biryani-made-using-basmati-rice-served-in-terracotta-bowl-selective.jpg?s=612x612&w=0&k=20&c=Hq9St3mIV-3osMA61wNZRMDUZpzE9HEVP8gSp-ydoRg=",
    CATEGORY: "Wholesome Rice Dish",
    SERVINGS: "3",
    PREP_TIME: "10",
    COOK_TIME: "20",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "Vegetable Pulao is a fragrant rice dish cooked with mixed vegetables, aromatic spices, and herbs. It makes a wholesome and satisfying one-pot meal.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegetarian</a>
    <a href="#" class="tag">Indian</a>
    <a href="#" class="tag">Rice</a>
    <a href="#" class="tag">Lunch</a>
    <a href="#" class="tag">Wholesome</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 cup basmati rice</li>
    <li>1.5 cups mixed vegetables (carrots, peas, beans, etc.)</li>
    <li>1 onion, sliced</li>
    <li>1 tsp cumin seeds</li>
    <li>2 cloves</li>
    <li>1 bay leaf</li>
    <li>1 cinnamon stick</li>
    <li>1 green chili (optional)</li>
    <li>1.5 tbsp oil or ghee</li>
    <li>2 cups water</li>
    <li>Salt to taste</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Wash rice and soak for 15 minutes. Heat oil in a pan and add cumin, cloves, bay leaf, and cinnamon. Sauté briefly.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add onions and green chili, sauté until golden. Then add mixed vegetables and stir-fry for 3–4 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add soaked rice and sauté for a minute. Pour water, add salt, and cook covered on low heat until rice is done.</div>
    </li>
  `
    ,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="

  },
  "rajmaChawal": {
    RECIPE_NAME: "Rajma Chawal",
    RECIPE_NAME_PART1: "Rajma",
    RECIPE_NAME_PART2: "Chawal",
    RECIPE_NAME_PART3: "",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/669635320/photo/kidney-bean-curry-or-rajma-or-rajmah-chawal-and-roti-typical-north-indian-main-course.jpg?s=612x612&w=0&k=20&c=3ir3vZKHa2oPXkpEKHLbWPAPF1yhxRCyr4DIew41pzg=",
    CATEGORY: "Comfort Meal",
    SERVINGS: "3",
    PREP_TIME: "10",
    COOK_TIME: "30",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Rajma Chawal is a classic North Indian comfort food where red kidney beans are slow-cooked in a rich, spiced tomato-onion gravy and served with steamed rice.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegetarian</a>
    <a href="#" class="tag">North Indian</a>
    <a href="#" class="tag">Comfort Food</a>
    <a href="#" class="tag">Protein</a>
    <a href="#" class="tag">Rice</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 cup rajma (red kidney beans), soaked overnight</li>
    <li>1 onion, finely chopped</li>
    <li>2 tomatoes, pureed</li>
    <li>1 tsp ginger-garlic paste</li>
    <li>1/2 tsp cumin seeds</li>
    <li>1 tsp coriander powder</li>
    <li>1/2 tsp turmeric powder</li>
    <li>1 tsp garam masala</li>
    <li>Salt to taste</li>
    <li>2 tbsp oil</li>
    <li>2 cups water (for pressure cooking)</li>
    <li>Cooked rice (for serving)</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Pressure cook soaked rajma with water and salt until soft. Set aside.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">In a pan, heat oil and sauté cumin seeds, then add onion and cook until golden. Add ginger-garlic paste and cook for 1–2 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add tomato puree and spices. Cook until oil separates. Add cooked rajma and simmer for 10–15 minutes. Serve hot with rice.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="

  },
  "oatsBananaSmoothie": {
    RECIPE_NAME: "Oats and Banana Smoothie",
    RECIPE_NAME_PART1: "Oats and",
    RECIPE_NAME_PART2: "Banana",
    RECIPE_NAME_PART3: "Smoothie",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/2150064654/photo/banana-smoothie-with-oat-flakes-and-almond-in-glass.jpg?s=612x612&w=0&k=20&c=pTrWFa0cFCK_zW5Ir03GLmDz6bX3KBdXel424YGcyc8=",
    CATEGORY: "Healthy Beverage",
    SERVINGS: "2",
    PREP_TIME: "5",
    COOK_TIME: "0",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A quick and filling smoothie made with oats, bananas, and milk—perfect for a wholesome breakfast or post-workout snack.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan Option</a>
    <a href="#" class="tag">Healthy</a>
    <a href="#" class="tag">Smoothie</a>
    <a href="#" class="tag">Breakfast</a>
    <a href="#" class="tag">Quick</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 bananas</li>
    <li>1/2 cup rolled oats</li>
    <li>1 cup milk (or almond milk)</li>
    <li>1 tbsp honey or maple syrup</li>
    <li>1/4 tsp cinnamon</li>
    <li>Ice cubes (optional)</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Add bananas, oats, milk, sweetener, and cinnamon to a blender.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Blend until smooth and creamy. Add ice cubes if desired and blend again.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Pour into glasses and serve immediately.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="

  },
  "chiaPuddingBerries": {
    RECIPE_NAME: "Chia Pudding with Berries",
    RECIPE_NAME_PART1: "Chia",
    RECIPE_NAME_PART2: "Pudding",
    RECIPE_NAME_PART3: "with Berries",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1091961300/photo/healthy-dessert-with-chia-seeds-blueberries-strawberries-raspberries-and-granola-horizontal.jpg?s=612x612&w=0&k=20&c=0oRKSD5cttt_LP3jpFbSAvUTO2QLjzxuSQA3qtm-Rho=",
    CATEGORY: "Healthy Dessert",
    SERVINGS: "2",
    PREP_TIME: "10",
    COOK_TIME: "0",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A nutritious and delicious dessert made by soaking chia seeds in milk and topping with fresh berries. Ideal for a make-ahead breakfast or snack.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">No-Cook</a>
    <a href="#" class="tag">Chia</a>
    <a href="#" class="tag">Dessert</a>
  `,
    INGREDIENTS_LIST: `
    <li>1/4 cup chia seeds</li>
    <li>1 cup almond milk (or any milk)</li>
    <li>1 tbsp maple syrup or honey</li>
    <li>1/2 tsp vanilla extract</li>
    <li>1/2 cup mixed berries (strawberries, blueberries, raspberries)</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">In a bowl, mix chia seeds, milk, sweetener, and vanilla extract.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Refrigerate for at least 4 hours or overnight until thick and pudding-like.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Top with fresh berries before serving.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="

  },
  "mixedBeanSalad": {
    RECIPE_NAME: "Mixed Bean Salad",
    RECIPE_NAME_PART1: "Mixed",
    RECIPE_NAME_PART2: "Bean",
    RECIPE_NAME_PART3: "Salad",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1322890125/photo/macro-closeup-with-texture-of-bean-salad-with-cilantro-red-onion-raisins-peppers-and-corn-as.jpg?s=612x612&w=0&k=20&c=O5Wwqejuumr0EkPeyPgiRRsiWatlvREcBOv0lS4RTtk=",
    CATEGORY: "Protein-Rich Salad",
    SERVINGS: "3",
    PREP_TIME: "10",
    COOK_TIME: "0",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "This protein-packed salad features a colorful mix of beans, vegetables, and herbs tossed in a tangy dressing. A great option for a light lunch or dinner.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">High Protein</a>
    <a href="#" class="tag">Salad</a>
    <a href="#" class="tag">Fiber-Rich</a>
    <a href="#" class="tag">Quick</a>
  `,
    INGREDIENTS_LIST: `
    <li>1/2 cup kidney beans, cooked</li>
    <li>1/2 cup black beans, cooked</li>
    <li>1/2 cup chickpeas, cooked</li>
    <li>1/4 cup corn kernels</li>
    <li>1/4 cup red bell pepper, chopped</li>
    <li>2 tbsp chopped cilantro</li>
    <li>1 tbsp olive oil</li>
    <li>1 tbsp lemon juice</li>
    <li>Salt and pepper to taste</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Combine all beans, corn, bell pepper, and cilantro in a large bowl.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Whisk together olive oil, lemon juice, salt, and pepper. Pour over salad and mix well.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Serve immediately or chill for 30 minutes for enhanced flavor.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="

  },
  "wholeWheatVegetableWrap": {
    RECIPE_NAME: "Whole Wheat Vegetable Wrap",
    RECIPE_NAME_PART1: "Whole Wheat",
    RECIPE_NAME_PART2: "Vegetable",
    RECIPE_NAME_PART3: "Wrap",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1050696708/photo/two-sandwiches-with-whole-wheat-wrap-chicken-breast-mushroom-and-seasonal-vegetables-served.jpg?s=612x612&w=0&k=20&c=TUlHrUc9l1zpSnJJNrVkZllWO30tkrY35xGYV2Ckz6k=",
    CATEGORY: "Healthy Wrap",
    SERVINGS: "2",
    PREP_TIME: "10",
    COOK_TIME: "5",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A nutritious whole wheat wrap filled with a variety of fresh and cooked vegetables, making it a perfect on-the-go meal.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegetarian</a>
    <a href="#" class="tag">Wrap</a>
    <a href="#" class="tag">Healthy</a>
    <a href="#" class="tag">Lunch</a>
    <a href="#" class="tag">Fiber</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 whole wheat tortillas</li>
    <li>1/4 cup hummus or yogurt spread</li>
    <li>1/2 cup shredded lettuce</li>
    <li>1/4 cup cucumber slices</li>
    <li>1/4 cup grated carrots</li>
    <li>1/4 cup cooked bell peppers</li>
    <li>Salt and pepper to taste</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Warm tortillas slightly on a pan or microwave.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Spread hummus or yogurt evenly, then layer all veggies on top.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Roll tightly and serve as a snack or meal.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="

  },
  "broccoliStirFry": {
    RECIPE_NAME: "Broccoli Stir Fry",
    RECIPE_NAME_PART1: "Broccoli",
    RECIPE_NAME_PART2: "Stir",
    RECIPE_NAME_PART3: "Fry",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/905223034/photo/stir-fried-vegetables.jpg?s=612x612&w=0&k=20&c=g-EffbNj43sDglcQkA1-yiBPZdBbsr_QS3Cb_pf6Qpk=",
    CATEGORY: "Quick Stir-Fry",
    SERVINGS: "2",
    PREP_TIME: "5",
    COOK_TIME: "10",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A simple and healthy stir-fry featuring fresh broccoli and a savory garlic-soy sauce. A great side or light main dish.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Stir-Fry</a>
    <a href="#" class="tag">Quick</a>
    <a href="#" class="tag">Vegetables</a>
    <a href="#" class="tag">Low Carb</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 cup broccoli florets</li>
    <li>1 tbsp soy sauce</li>
    <li>1 tsp sesame oil</li>
    <li>1 garlic clove, minced</li>
    <li>1 tsp olive oil</li>
    <li>Salt and pepper to taste</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Heat olive oil in a pan. Add garlic and sauté until fragrant.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add broccoli and stir-fry for 5–6 minutes until slightly tender.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add soy sauce, sesame oil, salt, and pepper. Stir well and cook for another minute before serving.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="

  },
  "carrotOrangeJuice": {
    RECIPE_NAME: "Carrot and Orange Juice",
    RECIPE_NAME_PART1: "Carrot",
    RECIPE_NAME_PART2: "and",
    RECIPE_NAME_PART3: "Orange Juice",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1078180564/photo/healthy-vegetable-and-fruit-juice.jpg?s=612x612&w=0&k=20&c=bdxe6GdzwHSf8TLuyGqGZ0qzejW3w8Xqr3r-jY205Vo=",
    CATEGORY: "Healthy Drinks",
    SERVINGS: "2",
    PREP_TIME: "10",
    COOK_TIME: "0",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A refreshing and vitamin-rich juice combining the sweetness of carrots with the tang of fresh oranges.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">Juice</a>
    <a href="#" class="tag">Healthy</a>
    <a href="#" class="tag">Quick</a>
  `,
    INGREDIENTS_LIST: `
    <li>3 large carrots, peeled and chopped</li>
    <li>2 large oranges, peeled</li>
    <li>1 tsp honey (optional)</li>
    <li>Ice cubes (optional)</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Juice the carrots and oranges using a juicer or blender.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">If using a blender, strain the mixture to remove pulp.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add honey and ice cubes if desired. Stir well and serve chilled.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="

  },

  "spinachPaneerCurry": {
    RECIPE_NAME: "Spinach Paneer Curry",
    RECIPE_NAME_PART1: "Spinach",
    RECIPE_NAME_PART2: "Paneer",
    RECIPE_NAME_PART3: "Curry",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1250399521/photo/vegetarian-palak-paneer.jpg?s=612x612&w=0&k=20&c=khML8mcnNouCRYjjCw_MrEuyAs1FgZ9rw9xV3jG8Dbk=",
    CATEGORY: "Indian Curry",
    SERVINGS: "4",
    PREP_TIME: "15",
    COOK_TIME: "25",
    DIFFICULTY: "Intermediate",
    RECIPE_DESCRIPTION: "A classic Indian dish with fresh spinach cooked in a creamy tomato sauce, loaded with cubes of soft paneer cheese.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegetarian</a>
    <a href="#" class="tag">Indian</a>
    <a href="#" class="tag">Curry</a>
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">Comfort Food</a>
  `,
    INGREDIENTS_LIST: `
    <li>250g paneer, cubed</li>
    <li>4 cups fresh spinach, washed</li>
    <li>1 onion, finely chopped</li>
    <li>2 tomatoes, pureed</li>
    <li>1 tbsp ginger-garlic paste</li>
    <li>1 tsp cumin seeds</li>
    <li>1 tsp garam masala</li>
    <li>1 tsp turmeric powder</li>
    <li>2 tbsp oil</li>
    <li>Salt to taste</li>
    <li>1/2 cup cream (optional)</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Blanch spinach in boiling water, then blend into a smooth puree.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Heat oil in a pan, add cumin seeds and chopped onions. Sauté until golden brown.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add ginger-garlic paste and cook until raw smell disappears.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Add tomato puree, turmeric, and garam masala. Cook until oil separates.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Add spinach puree, salt, and cook for 5 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">06</div>
      <div class="instruction-text">Add paneer cubes and cream (if using). Simmer for 5 more minutes.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="

  },

  "mixedVegetableSoup": {
    RECIPE_NAME: "Mixed Vegetable Soup",
    RECIPE_NAME_PART1: "Mixed",
    RECIPE_NAME_PART2: "Vegetable",
    RECIPE_NAME_PART3: "Soup",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1092632852/photo/vegetable-soup.jpg?s=612x612&w=0&k=20&c=TLMWC8lshitbk8pONGpblEsmcsBy1wZVQ9jJC92Cvh4=",
    CATEGORY: "Soups",
    SERVINGS: "4",
    PREP_TIME: "10",
    COOK_TIME: "30",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A warm and comforting soup loaded with a variety of fresh vegetables, perfect for any season.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">Soup</a>
    <a href="#" class="tag">Healthy</a>
    <a href="#" class="tag">Low Calorie</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 carrot, diced</li>
    <li>1 celery stalk, diced</li>
    <li>1 potato, diced</li>
    <li>1 cup green beans, chopped</li>
    <li>1 onion, chopped</li>
    <li>2 garlic cloves, minced</li>
    <li>4 cups vegetable broth</li>
    <li>Salt and pepper to taste</li>
    <li>1 tbsp olive oil</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Heat olive oil in a large pot and sauté onion and garlic until translucent.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add all diced vegetables and cook for 5 minutes, stirring occasionally.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Pour in vegetable broth, bring to a boil, then simmer for 20 minutes until vegetables are tender.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Season with salt and pepper. Serve hot.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="

  },

  "kaleAppleSalad": {
    RECIPE_NAME: "Kale and Apple Salad",
    RECIPE_NAME_PART1: "Kale",
    RECIPE_NAME_PART2: "and",
    RECIPE_NAME_PART3: "Apple Salad",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1214762630/photo/kale-salad-with-apples-cranberry-and-nuts-grey-background-top-view.jpg?s=612x612&w=0&k=20&c=uKTH4CRhGnfDEpSM2x-Xr4nWbO_8V69D7a77bGTB19Y=",
    CATEGORY: "Salads",
    SERVINGS: "2",
    PREP_TIME: "15",
    COOK_TIME: "0",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A crunchy and nutritious salad combining fresh kale leaves with sweet apples, walnuts, and a tangy dressing.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">Salad</a>
    <a href="#" class="tag">Healthy</a>
    <a href="#" class="tag">Quick</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 cups kale, chopped</li>
    <li>1 apple, thinly sliced</li>
    <li>1/4 cup walnuts, chopped</li>
    <li>2 tbsp olive oil</li>
    <li>1 tbsp lemon juice</li>
    <li>Salt and pepper to taste</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Massage kale with olive oil and a pinch of salt until soft.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add apple slices and walnuts to the kale.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Drizzle with lemon juice, season with pepper, toss well and serve.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="

  },

  "bellPepperStirFry": {
    RECIPE_NAME: "Bell Pepper Stir Fry",
    RECIPE_NAME_PART1: "Bell Pepper",
    RECIPE_NAME_PART2: "Stir",
    RECIPE_NAME_PART3: "Fry",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/588595864/photo/steaming-mixed-vegetables-in-the-wok-asian-style-cooking.jpg?s=612x612&w=0&k=20&c=NZWe4QUwFmEqPAwHa3s0u3Zak6JjlRm36gMgmXx8roA=",
    CATEGORY: "Stir Fry",
    SERVINGS: "3",
    PREP_TIME: "10",
    COOK_TIME: "15",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A colorful and quick stir fry loaded with bell peppers and mixed vegetables, perfect for a healthy meal.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">Stir Fry</a>
    <a href="#" class="tag">Quick</a>
    <a href="#" class="tag">Healthy</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 red bell pepper, sliced</li>
    <li>1 yellow bell pepper, sliced</li>
    <li>1 green bell pepper, sliced</li>
    <li>1 cup broccoli florets</li>
    <li>2 garlic cloves, minced</li>
    <li>1 tbsp soy sauce</li>
    <li>1 tbsp olive oil</li>
    <li>Salt and pepper to taste</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Heat olive oil in a wok or pan over medium heat.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add garlic and sauté for 30 seconds until fragrant.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add all vegetables and stir fry for 8-10 minutes until tender-crisp.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Add soy sauce, salt, and pepper. Toss well and serve hot.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="

  },
  "almondDateSmoothie": {
    RECIPE_NAME: "Almond Date Smoothie",
    RECIPE_NAME_PART1: "Almond",
    RECIPE_NAME_PART2: "Date",
    RECIPE_NAME_PART3: "Smoothie",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1002274560/photo/banana-and-date-fruit-smoothie-or-milkshake-in-glass-mason-jar.jpg?s=612x612&w=0&k=20&c=OOXeRFFysgqweoq9mi-OqdEObNKnJYwz03CJyq7_kcY=",
    CATEGORY: "Smoothie",
    SERVINGS: "2",
    PREP_TIME: "5",
    COOK_TIME: "0",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A naturally sweet smoothie with dates and almonds, perfect for a quick breakfast or post-workout energy boost.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">No Cook</a>
    <a href="#" class="tag">Smoothie</a>
    <a href="#" class="tag">Quick</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 cup almond milk</li>
    <li>6 Medjool dates, pitted</li>
    <li>1/4 cup raw almonds</li>
    <li>1 banana</li>
    <li>1/4 tsp cinnamon</li>
    <li>Ice cubes (optional)</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Soak almonds and dates in warm water for 10 minutes if needed for easier blending.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add all ingredients to a blender and blend until smooth.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Serve immediately, chilled.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="

  },

  "spinachMushroomStirFry": {
    RECIPE_NAME: "Spinach and Mushroom Stir Fry",
    RECIPE_NAME_PART1: "Spinach",
    RECIPE_NAME_PART2: "and Mushroom",
    RECIPE_NAME_PART3: "Stir Fry",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1312187690/photo/vegan-saute-with-mushrooms-aubergines-and-spinach.jpg?s=612x612&w=0&k=20&c=3sNvdS1V3ccEbX37HKMtcfHZjr4NFGuOz6lFPgjrgDA=",
    CATEGORY: "Stir Fry",
    SERVINGS: "2",
    PREP_TIME: "10",
    COOK_TIME: "10",
    DIFFICULTY: "Intermediate",
    RECIPE_DESCRIPTION: "A savory stir fry with tender spinach and juicy mushrooms in a light garlic soy glaze.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Low Carb</a>
    <a href="#" class="tag">Quick</a>
    <a href="#" class="tag">Healthy</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 cups fresh spinach</li>
    <li>1 cup mushrooms, sliced</li>
    <li>1 tbsp soy sauce</li>
    <li>2 garlic cloves, minced</li>
    <li>1 tbsp olive oil</li>
    <li>Salt and pepper to taste</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Heat olive oil in a pan over medium heat. Add garlic and sauté for 30 seconds.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add mushrooms and cook for 4–5 minutes until golden.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add spinach and soy sauce. Stir until spinach wilts.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Season with salt and pepper. Serve hot.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="

  },

  "darkChocolateAlmondBites": {
    RECIPE_NAME: "Dark Chocolate Almond Bites",
    RECIPE_NAME_PART1: "Dark Chocolate",
    RECIPE_NAME_PART2: "Almond",
    RECIPE_NAME_PART3: "Bites",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/612408302/photo/vegan-sweet-balls-food-on-table.jpg?s=612x612&w=0&k=20&c=4A1bpM0CfvrzdHyGPao6nAtodbroKC7dp3n3o-3b_Zs=",
    CATEGORY: "Snack",
    SERVINGS: "12 bites",
    PREP_TIME: "10",
    COOK_TIME: "0",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "These no-bake bites combine rich dark chocolate and crunchy almonds for a perfect guilt-free treat.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">No Bake</a>
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">Snack</a>
    <a href="#" class="tag">Sweet</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 cup dates, pitted</li>
    <li>1/2 cup almonds</li>
    <li>1/4 cup dark chocolate chips</li>
    <li>1 tbsp cocoa powder</li>
    <li>1 tbsp coconut oil</li>
    <li>Pinch of salt</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">In a food processor, blend dates and almonds until crumbly.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add cocoa powder, melted chocolate chips, coconut oil, and salt. Blend until sticky.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Form into small balls. Refrigerate for 20 minutes before serving.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="

  },

  "pumpkinSeedGranola": {
    RECIPE_NAME: "Pumpkin Seed Granola",
    RECIPE_NAME_PART1: "Pumpkin Seed",
    RECIPE_NAME_PART2: "Granola",
    RECIPE_NAME_PART3: "",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1219859196/photo/young-woman-with-muesli-bowl-girl-eating-breakfast-cereals-with-nuts-pumpkin-seeds-oats-and.jpg?s=612x612&w=0&k=20&c=GQujQUOvA46Gt0jVRIdV-bfzuDZBKV5KFXBlls3bOKA=",
    CATEGORY: "Breakfast",
    SERVINGS: "6",
    PREP_TIME: "10",
    COOK_TIME: "25",
    DIFFICULTY: "Intermediate",
    RECIPE_DESCRIPTION: "Crunchy, wholesome granola with oats, pumpkin seeds, and a hint of maple—perfect for breakfast or snacking.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">Snack</a>
    <a href="#" class="tag">Healthy</a>
    <a href="#" class="tag">Baked</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 cups rolled oats</li>
    <li>1/2 cup pumpkin seeds</li>
    <li>1/4 cup maple syrup</li>
    <li>2 tbsp coconut oil</li>
    <li>1/2 tsp cinnamon</li>
    <li>Pinch of salt</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Preheat oven to 325°F (160°C). Line a baking sheet with parchment paper.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Mix oats, pumpkin seeds, cinnamon, and salt in a bowl.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add maple syrup and melted coconut oil. Stir to coat.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Spread on baking sheet and bake for 20–25 minutes, stirring halfway.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="

  },

  "seaweedRiceBowl": {
    RECIPE_NAME: "Seaweed Rice Bowl",
    RECIPE_NAME_PART1: "Seaweed",
    RECIPE_NAME_PART2: "Rice",
    RECIPE_NAME_PART3: "Bowl",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1301367123/photo/shuga-konbu-no-tsukudani.jpg?s=612x612&w=0&k=20&c=l9P-oQbNyu5--M0QINbG2rcYynP75ZGyTjqSIEHsOCU=",
    CATEGORY: "Bowl",
    SERVINGS: "2",
    PREP_TIME: "10",
    COOK_TIME: "10",
    DIFFICULTY: "Intermediate",
    RECIPE_DESCRIPTION: "A nourishing rice bowl with seasoned seaweed, vegetables, and soy-lime dressing for a delicious Asian-inspired meal.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Asian</a>
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">Healthy</a>
    <a href="#" class="tag">Quick</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 cup cooked jasmine rice</li>
    <li>1/4 cup dried seaweed (rehydrated)</li>
    <li>1/2 cup shredded carrots</li>
    <li>1/2 cucumber, thinly sliced</li>
    <li>1 tbsp soy sauce</li>
    <li>1 tsp lime juice</li>
    <li>1 tsp sesame oil</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">In a bowl, mix soy sauce, lime juice, and sesame oil to create the dressing.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Layer rice in a bowl. Top with seaweed, carrots, and cucumber.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Drizzle dressing on top and serve immediately.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">200</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">3g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="

  },
  "bhogKhichuri": {
    RECIPE_NAME: "Bengali Bhog Khichuri",
    RECIPE_NAME_PART1: "Bengali",
    RECIPE_NAME_PART2: "Bhog",
    RECIPE_NAME_PART3: "Khichuri",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1202743802/photo/famous-indian-food-khichdi-is-ready-to-serve.jpg?s=612x612&w=0&k=20&c=ysvin6jJMbFZF1q02tryZ0IloO2q81bAaTiHCKTF9Wk=",
    CATEGORY: "Bengali Cuisine",
    SERVINGS: "6",
    PREP_TIME: "20",
    COOK_TIME: "35",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Experience the divine taste of Bengali Bhog Khichuri, a traditional one-pot meal that's both nutritious and soul-satisfying. This aromatic blend of rice, lentils, and vegetables, seasoned with ghee and mild spices, is traditionally offered to deities during festivals and is beloved for its comforting, wholesome qualities.",
    RECIPE_TAGS: `
      <a href="#" class="tag">Bengali Cuisine</a>
      <a href="#" class="tag">Festival Food</a>
      <a href="#" class="tag">One Pot Meal</a>
      <a href="#" class="tag">Vegetarian</a>
      <a href="#" class="tag">Traditional Recipe</a>
    `,
    INGREDIENTS_LIST: `
      <li>1 cup basmati rice</li>
      <li>1/2 cup yellow moong dal</li>
      <li>1 medium potato, cubed</li>
      <li>1/2 cup cauliflower florets</li>
      <li>1/2 cup green beans, chopped</li>
      <li>1/4 cup green peas</li>
      <li>3 tbsp ghee</li>
      <li>1 bay leaf</li>
      <li>1 tsp cumin seeds</li>
      <li>1 tsp ginger paste</li>
      <li>1/2 tsp turmeric powder</li>
      <li>Salt to taste</li>
      <li>4-5 cups water</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item">
        <div class="instruction-number">01</div>
        <div class="instruction-text">Wash rice and moong dal together until water runs clear. Soak for 15 minutes, then drain.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">02</div>
        <div class="instruction-text">Heat ghee in a heavy-bottomed pot. Add bay leaf and cumin seeds. When they splutter, add ginger paste.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">03</div>
        <div class="instruction-text">Add all vegetables and sauté for 3-4 minutes. Add turmeric and salt.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">04</div>
        <div class="instruction-text">Add rice-dal mixture and stir gently. Add water and bring to boil.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">05</div>
        <div class="instruction-text">Reduce heat to low, cover and cook for 25-30 minutes until rice and dal are soft and mushy. Serve hot with ghee on top.</div>
      </li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">285</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">12g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">8g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">5g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">4g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">45g</span></div>
    `,
    CHEF_NAME: "Chef Rina Banerjee",
    CHEF_TITLE: "Bengali Cuisine Specialist",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1415714830/photo/portrait-of-a-bengali-woman-smiling.jpg?s=612x612&w=0&k=20&c=led2bH86vEPB4zRTLieWsTt7GLHbZXqdxUNfoTRShY0="
  },

  "labraSabzi": {
    RECIPE_NAME: "Mixed Vegetable Labra",
    RECIPE_NAME_PART1: "Mixed",
    RECIPE_NAME_PART2: "Vegetable",
    RECIPE_NAME_PART3: "Labra",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1278584350/photo/veg-kolhapuri-in-black-bowl-on-dark-slate-table-top-indian-vegetable-curry-dish-vegetarian.jpg?s=612x612&w=0&k=20&c=J8J66FYYLs9tupC46-_de1qnASgaEsQn-yk3yW86DJ4=",
    CATEGORY: "Bengali Cuisine",
    SERVINGS: "4",
    PREP_TIME: "25",
    COOK_TIME: "20",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "Savor the rustic flavors of traditional Bengali Labra, a delightful medley of seasonal vegetables cooked with minimal spices. This wholesome dish celebrates the natural flavors of vegetables and is a staple in Bengali households, offering both nutrition and comfort in every bite.",
    RECIPE_TAGS: `
      <a href="#" class="tag">Bengali Cuisine</a>
      <a href="#" class="tag">Vegetarian</a>
      <a href="#" class="tag">Healthy</a>
      <a href="#" class="tag">Mixed Vegetables</a>
      <a href="#" class="tag">Home Cooking</a>
    `,
    INGREDIENTS_LIST: `
      <li>1 medium eggplant, cubed</li>
      <li>2 medium potatoes, cubed</li>
      <li>1 cup pumpkin, cubed</li>
      <li>1/2 cup green beans, chopped</li>
      <li>1 medium ridge gourd, sliced</li>
      <li>3 tbsp mustard oil</li>
      <li>1 tsp panch phoron (five spice mix)</li>
      <li>2 dried red chilies</li>
      <li>1 tsp ginger paste</li>
      <li>1/2 tsp turmeric powder</li>
      <li>1 tsp salt</li>
      <li>1/4 cup water</li>
      <li>Fresh coriander leaves for garnish</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item">
        <div class="instruction-number">01</div>
        <div class="instruction-text">Cut all vegetables into uniform pieces and soak eggplant in salted water for 10 minutes.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">02</div>
        <div class="instruction-text">Heat mustard oil in a wide pan. Add panch phoron and dried chilies. Let them splutter.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">03</div>
        <div class="instruction-text">Add ginger paste and fry for 30 seconds. Add all vegetables and mix well.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">04</div>
        <div class="instruction-text">Add turmeric and salt. Cover and cook on medium heat for 15-18 minutes, stirring occasionally.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">05</div>
        <div class="instruction-text">Add water if needed. Cook until vegetables are tender. Garnish with coriander and serve hot with rice.</div>
      </li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">165</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">4g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">10g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">6g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">8g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">18g</span></div>
    `,
    CHEF_NAME: "Chef Rina Banerjee",
    CHEF_TITLE: "Bengali Cuisine Specialist",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1415714830/photo/portrait-of-a-bengali-woman-smiling.jpg?s=612x612&w=0&k=20&c=led2bH86vEPB4zRTLieWsTt7GLHbZXqdxUNfoTRShY0="
  },

  "chanarPayesh": {
    RECIPE_NAME: "Bengali Chanar Payesh",
    RECIPE_NAME_PART1: "Bengali",
    RECIPE_NAME_PART2: "Chanar",
    RECIPE_NAME_PART3: "Payesh",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1225083385/photo/famous-indian-dessert-kheer-or-payasam.jpg?s=612x612&w=0&k=20&c=U8D46ZGTCXE_KcG6KLlABRl1-wwzNuKuTcggbgMyzgs=",
    CATEGORY: "Bengali Desserts",
    SERVINGS: "6",
    PREP_TIME: "30",
    COOK_TIME: "45",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Indulge in the creamy, aromatic delight of Bengali Chanar Payesh, a traditional cottage cheese pudding that melts in your mouth. This rich dessert combines fresh paneer with reduced milk, cardamom, and nuts, creating a heavenly treat that's perfect for festivals and special occasions.",
    RECIPE_TAGS: `
      <a href="#" class="tag">Bengali Desserts</a>
      <a href="#" class="tag">Festival Sweet</a>
      <a href="#" class="tag">Cottage Cheese</a>
      <a href="#" class="tag">Traditional Recipe</a>
      <a href="#" class="tag">Rich Dessert</a>
    `,
    INGREDIENTS_LIST: `
      <li>1 liter full-fat milk</li>
      <li>2 tbsp lemon juice</li>
      <li>1/2 cup sugar</li>
      <li>4-5 green cardamom pods, crushed</li>
      <li>2 tbsp ghee</li>
      <li>10-12 almonds, chopped</li>
      <li>10-12 pistachios, chopped</li>
      <li>1 tbsp raisins</li>
      <li>1/4 tsp cardamom powder</li>
      <li>Pinch of saffron</li>
      <li>2 tbsp milk for saffron</li>
      <li>Silver vark for garnish (optional)</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item">
        <div class="instruction-number">01</div>
        <div class="instruction-text">Boil milk, add lemon juice to curdle. Strain through muslin cloth to get paneer. Rinse with cold water.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">02</div>
        <div class="instruction-text">Knead paneer until smooth. Make small balls and flatten slightly. Heat ghee and lightly fry paneer pieces.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">03</div>
        <div class="instruction-text">In a heavy-bottomed pan, boil 750ml milk with crushed cardamom until reduced to half.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">04</div>
        <div class="instruction-text">Add sugar and fried paneer pieces. Cook for 10-15 minutes until paneer absorbs milk.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">05</div>
        <div class="instruction-text">Add nuts, saffron soaked in milk, and cardamom powder. Cook for 5 more minutes. Serve chilled, garnished with nuts and silver vark.</div>
      </li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">285</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">12g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">15g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">28g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">32g</span></div>
    `,
    CHEF_NAME: "Chef Rina Banerjee",
    CHEF_TITLE: "Bengali Cuisine Specialist",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1415714830/photo/portrait-of-a-bengali-woman-smiling.jpg?s=612x612&w=0&k=20&c=led2bH86vEPB4zRTLieWsTt7GLHbZXqdxUNfoTRShY0="
  },

  "roastChickenHerbs": {
    RECIPE_NAME: "Herb Roasted Chicken",
    RECIPE_NAME_PART1: "Herb",
    RECIPE_NAME_PART2: "Roasted",
    RECIPE_NAME_PART3: "Chicken",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/467639228/photo/homemade-lemon-and-herb-whole-chicken.jpg?s=612x612&w=0&k=20&c=ihEcuGbACcsbA8y3OrTNkMIt7aYyXbr-jeDViWD5Z_w=",
    CATEGORY: "Main Course",
    SERVINGS: "6",
    PREP_TIME: "20",
    COOK_TIME: "75",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Experience the perfect Sunday dinner with our Herb Roasted Chicken, featuring a golden, crispy skin and tender, juicy meat infused with aromatic herbs. This classic comfort food is seasoned with fresh rosemary, thyme, and garlic, creating a meal that brings the whole family together around the dinner table.",
    RECIPE_TAGS: `
      <a href="#" class="tag">Main Course</a>
      <a href="#" class="tag">Roasted Chicken</a>
      <a href="#" class="tag">Herbs</a>
      <a href="#" class="tag">Sunday Dinner</a>
      <a href="#" class="tag">Family Meal</a>
    `,
    INGREDIENTS_LIST: `
      <li>1 whole chicken (3-4 lbs)</li>
      <li>3 tbsp olive oil</li>
      <li>2 tbsp fresh rosemary, chopped</li>
      <li>2 tbsp fresh thyme leaves</li>
      <li>4 garlic cloves, minced</li>
      <li>1 lemon, halved</li>
      <li>2 tsp salt</li>
      <li>1 tsp black pepper</li>
      <li>1 tsp paprika</li>
      <li>2 medium onions, quartered</li>
      <li>3 carrots, chunked</li>
      <li>4 potatoes, quartered</li>
      <li>2 tbsp butter, softened</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item">
        <div class="instruction-number">01</div>
        <div class="instruction-text">Preheat oven to 425°F. Pat chicken dry and season inside and out with salt, pepper, and paprika.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">02</div>
        <div class="instruction-text">Mix olive oil, herbs, and garlic. Rub under and over skin. Stuff cavity with lemon halves.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">03</div>
        <div class="instruction-text">Place vegetables in roasting pan. Set chicken on top, breast side up. Dot with butter.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">04</div>
        <div class="instruction-text">Roast for 60-75 minutes until internal temperature reaches 165°F. Baste every 20 minutes.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">05</div>
        <div class="instruction-text">Rest for 10 minutes before carving. Serve with roasted vegetables and pan juices.</div>
      </li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">485</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">42g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">28g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">4g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">6g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">22g</span></div>
    `,
    CHEF_NAME: "Chef Michael Roberts",
    CHEF_TITLE: "Traditional Cooking Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1136638047/photo/i-love-my-work-cheerful-young-chef-in-apron-keeping-tattooed-arms-crossed-and-smiling-while.jpg?s=612x612&w=0&k=20&c=XDfN4eo_AWH_LM7KLNL8jHCQY9wjkVwRBFMNo-z_4C8="
  },

  "stuffedBellPeppers": {
    RECIPE_NAME: "Classic Stuffed Bell Peppers",
    RECIPE_NAME_PART1: "Classic",
    RECIPE_NAME_PART2: "Stuffed",
    RECIPE_NAME_PART3: "Bell Peppers",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/464583605/photo/stuffed-pepper-with-meat.jpg?s=612x612&w=0&k=20&c=Hjm0jToPV7XGsn7AG6HeFGN5QosYu0lmiOxGf3mYKc4=",
    CATEGORY: "Main Course",
    SERVINGS: "4",
    PREP_TIME: "25",
    COOK_TIME: "35",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Discover the hearty satisfaction of Classic Stuffed Bell Peppers, filled with a savory mixture of ground beef, rice, and aromatic vegetables. These colorful peppers are topped with melted cheese and baked to perfection, creating a complete, nutritious meal that's both visually appealing and deliciously satisfying.",
    RECIPE_TAGS: `
      <a href="#" class="tag">Main Course</a>
      <a href="#" class="tag">Stuffed Peppers</a>
      <a href="#" class="tag">Ground Beef</a>
      <a href="#" class="tag">Rice</a>
      <a href="#" class="tag">Comfort Food</a>
    `,
    INGREDIENTS_LIST: `
      <li>4 large bell peppers (any color)</li>
      <li>1 lb ground beef</li>
      <li>1 cup cooked white rice</li>
      <li>1 medium onion, diced</li>
      <li>2 garlic cloves, minced</li>
      <li>1 can (14.5 oz) diced tomatoes, drained</li>
      <li>1 cup shredded cheddar cheese</li>
      <li>2 tbsp olive oil</li>
      <li>1 tsp Italian seasoning</li>
      <li>1/2 tsp paprika</li>
      <li>Salt and pepper to taste</li>
      <li>1/4 cup beef broth</li>
      <li>2 tbsp fresh parsley, chopped</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item">
        <div class="instruction-number">01</div>
        <div class="instruction-text">Preheat oven to 375°F. Cut tops off peppers and remove seeds and membranes. Trim bottom if needed for stability.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">02</div>
        <div class="instruction-text">Heat oil in a large skillet. Cook onion until soft, add garlic and ground beef. Cook until beef is browned.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">03</div>
        <div class="instruction-text">Add tomatoes, rice, Italian seasoning, paprika, salt, and pepper. Mix well and remove from heat.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">04</div>
        <div class="instruction-text">Stuff peppers with meat mixture, place in baking dish. Add broth to bottom, cover with foil.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">05</div>
        <div class="instruction-text">Bake for 25 minutes. Remove foil, top with cheese, bake 10 more minutes. Garnish with parsley and serve.</div>
      </li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">425</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">28g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">22g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">5g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">12g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">32g</span></div>
    `,
    CHEF_NAME: "Chef Michael Roberts",
    CHEF_TITLE: "Traditional Cooking Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1136638047/photo/i-love-my-work-cheerful-young-chef-in-apron-keeping-tattooed-arms-crossed-and-smiling-while.jpg?s=612x612&w=0&k=20&c=XDfN4eo_AWH_LM7KLNL8jHCQY9wjkVwRBFMNo-z_4C8="
  },

  "classicPlumCake": {
    RECIPE_NAME: "Traditional Christmas Plum Cake",
    RECIPE_NAME_PART1: "Traditional",
    RECIPE_NAME_PART2: "Christmas",
    RECIPE_NAME_PART3: "Plum Cake",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1339389866/photo/homemade-christmas-plum-cake-indian-christmas-celebration-serving-india-kerala-fruitcake-made.jpg?s=612x612&w=0&k=20&c=bLjQ-l5kJ70xQ0njYFS2KyguZvckYGZ6uHCu1z9sZUc=",
    CATEGORY: "Desserts",
    SERVINGS: "12",
    PREP_TIME: "60",
    COOK_TIME: "120",
    DIFFICULTY: "Advanced Level",
    RECIPE_DESCRIPTION: "Celebrate the holidays with our Traditional Christmas Plum Cake, a rich, moist cake loaded with dried fruits, nuts, and aromatic spices. Aged with rum and brandy, this festive dessert improves with time and becomes the centerpiece of holiday celebrations, bringing warmth and tradition to your table.",
    RECIPE_TAGS: `
      <a href="#" class="tag">Christmas Dessert</a>
      <a href="#" class="tag">Fruit Cake</a>
      <a href="#" class="tag">Holiday Baking</a>
      <a href="#" class="tag">Traditional Recipe</a>
      <a href="#" class="tag">Rich Cake</a>
    `,
    INGREDIENTS_LIST: `
      <li>2 cups mixed dried fruits (raisins, currants, dates)</li>
      <li>1 cup chopped nuts (almonds, walnuts)</li>
      <li>1/2 cup rum</li>
      <li>1/4 cup brandy</li>
      <li>1 cup butter, softened</li>
      <li>1 cup brown sugar</li>
      <li>4 large eggs</li>
      <li>2 cups all-purpose flour</li>
      <li>1 tsp baking powder</li>
      <li>1 tsp cinnamon</li>
      <li>1/2 tsp nutmeg</li>
      <li>1/4 tsp cloves</li>
      <li>1/2 cup milk</li>
      <li>1 tsp vanilla extract</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item">
        <div class="instruction-number">01</div>
        <div class="instruction-text">Soak dried fruits and nuts in rum and brandy for at least 2 hours or overnight.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">02</div>
        <div class="instruction-text">Preheat oven to 300°F. Grease and line a 9-inch cake pan with parchment paper.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">03</div>
        <div class="instruction-text">Cream butter and sugar until fluffy. Add eggs one at a time, beating well after each addition.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">04</div>
        <div class="instruction-text">Mix flour, baking powder, and spices. Alternate adding dry ingredients and milk to butter mixture.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">05</div>
        <div class="instruction-text">Fold in soaked fruits with liquid and vanilla. Pour into pan and bake for 2 hours until toothpick comes out clean. Cool completely before removing from pan.</div>
      </li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">385</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">6g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">18g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">3g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">42g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">52g</span></div>
    `,
    CHEF_NAME: "Chef Michael Roberts",
    CHEF_TITLE: "Traditional Cooking Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1136638047/photo/i-love-my-work-cheerful-young-chef-in-apron-keeping-tattooed-arms-crossed-and-smiling-while.jpg?s=612x612&w=0&k=20&c=XDfN4eo_AWH_LM7KLNL8jHCQY9wjkVwRBFMNo-z_4C8="
  },

  "roastTurkey": {
    RECIPE_NAME: "Perfect Thanksgiving Roast Turkey",
    RECIPE_NAME_PART1: "Perfect",
    RECIPE_NAME_PART2: "Thanksgiving",
    RECIPE_NAME_PART3: "Roast Turkey",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1194113118/photo/roasted-turkey-with-clementines-corsica-and-cranberry.jpg?s=612x612&w=0&k=20&c=o9qeh6rSWpacQKI8wNkq6gU4CAcBih0OL_0dzzPm23A=",
    CATEGORY: "Main Course",
    SERVINGS: "12",
    PREP_TIME: "45",
    COOK_TIME: "180",
    DIFFICULTY: "Advanced Level",
    RECIPE_DESCRIPTION: "Master the art of the perfect Thanksgiving turkey with our foolproof recipe that delivers golden, crispy skin and incredibly moist, flavorful meat. Brined for maximum juiciness and roasted with aromatic herbs and vegetables, this turkey will be the star of your holiday table and create lasting memories.",
    RECIPE_TAGS: `
      <a href="#" class="tag">Thanksgiving</a>
      <a href="#" class="tag">Roast Turkey</a>
      <a href="#" class="tag">Holiday Main</a>
      <a href="#" class="tag">Special Occasion</a>
      <a href="#" class="tag">Traditional Recipe</a>
    `,
    INGREDIENTS_LIST: `
      <li>1 whole turkey (12-14 lbs), thawed</li>
      <li>1/2 cup butter, softened</li>
      <li>2 tbsp fresh sage, chopped</li>
      <li>2 tbsp fresh thyme leaves</li>
      <li>2 tbsp fresh rosemary, chopped</li>
      <li>4 garlic cloves, minced</li>
      <li>2 lemons, quartered</li>
      <li>2 onions, quartered</li>
      <li>4 celery stalks, chopped</li>
      <li>3 carrots, chopped</li>
      <li>3 tbsp olive oil</li>
      <li>2 tbsp salt</li>
      <li>1 tbsp black pepper</li>
      <li>2 cups chicken broth</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item">
        <div class="instruction-number">01</div>
        <div class="instruction-text">Remove turkey from packaging, pat dry thoroughly. Remove giblets and neck. Season inside and out with salt and pepper.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">02</div>
        <div class="instruction-text">Mix softened butter with herbs and garlic. Carefully loosen skin and spread herb butter under skin and over breast.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">03</div>
        <div class="instruction-text">Stuff cavity with lemon quarters and some vegetables. Tie legs together, tuck wing tips under body.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">04</div>
        <div class="instruction-text">Place remaining vegetables in roasting pan. Set turkey breast-side up on vegetables. Brush with olive oil.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">05</div>
        <div class="instruction-text">Roast at 325°F for 2.5-3 hours until internal temp reaches 165°F. Baste every 45 minutes. Rest 20 minutes before carving.</div>
      </li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">320</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">45g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">14g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">0g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">0g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">0g</span></div>
    `,
    CHEF_NAME: "Chef Michael Roberts",
    CHEF_TITLE: "Traditional Cooking Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1136638047/photo/i-love-my-work-cheerful-young-chef-in-apron-keeping-tattooed-arms-crossed-and-smiling-while.jpg?s=612x612&w=0&k=20&c=XDfN4eo_AWH_LM7KLNL8jHCQY9wjkVwRBFMNo-z_4C8="
  },

  "mashedPotatoes": {
    RECIPE_NAME: "Creamy Garlic Mashed Potatoes",
    RECIPE_NAME_PART1: "Creamy",
    RECIPE_NAME_PART2: "Garlic",
    RECIPE_NAME_PART3: "Mashed Potatoes",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1036966044/photo/mashed-potatoes-with-gravy-for-thanksgiving.jpg?s=612x612&w=0&k=20&c=hVLnx8Zkg8XNpgG8w-COdVaoSUhGE-hCykpvfzR1FJU=",
    CATEGORY: "Side Dishes",
    SERVINGS: "8",
    PREP_TIME: "15",
    COOK_TIME: "25",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "Transform simple potatoes into the ultimate comfort food with our Creamy Garlic Mashed Potatoes. These velvety smooth potatoes are enriched with butter, cream, and roasted garlic, creating the perfect side dish that pairs beautifully with any main course and elevates every meal to restaurant quality.",
    RECIPE_TAGS: `
      <a href="#" class="tag">Side Dish</a>
      <a href="#" class="tag">Mashed Potatoes</a>
      <a href="#" class="tag">Comfort Food</a>
      <a href="#" class="tag">Garlic</a>
      <a href="#" class="tag">Creamy</a>
    `,
    INGREDIENTS_LIST: `
      <li>3 lbs Yukon Gold potatoes, peeled and cubed</li>
      <li>6 garlic cloves, peeled</li>
      <li>1/2 cup butter, softened</li>
      <li>1/2 cup heavy cream, warmed</li>
      <li>1/4 cup sour cream</li>
      <li>1/4 cup cream cheese, softened</li>
      <li>2 tsp salt</li>
      <li>1/2 tsp white pepper</li>
      <li>2 tbsp fresh chives, chopped</li>
      <li>2 tbsp fresh parsley, chopped</li>
      <li>Extra butter for serving</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item">
        <div class="instruction-number">01</div>
        <div class="instruction-text">Place potatoes and garlic in large pot, cover with cold salted water. Bring to boil and cook 15-20 minutes until fork-tender.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">02</div>
        <div class="instruction-text">Drain potatoes and garlic thoroughly. Return to pot and let steam dry for 2-3 minutes.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">03</div>
        <div class="instruction-text">Mash potatoes and garlic until smooth using potato masher or ricer for ultra-smooth texture.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">04</div>
        <div class="instruction-text">Beat in butter, cream cheese, and sour cream until combined. Gradually add warm cream until desired consistency.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">05</div>
        <div class="instruction-text">Season with salt and pepper. Fold in fresh herbs. Serve immediately with extra butter and herbs on top.</div>
      </li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">245</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">5g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">12g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">3g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">2g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">32g</span></div>
    `,
    CHEF_NAME: "Chef Michael Roberts",
    CHEF_TITLE: "Traditional Cooking Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1136638047/photo/i-love-my-work-cheerful-young-chef-in-apron-keeping-tattooed-arms-crossed-and-smiling-while.jpg?s=612x612&w=0&k=20&c=XDfN4eo_AWH_LM7KLNL8jHCQY9wjkVwRBFMNo-z_4C8="
  },

  "pumpkinPie": {
    RECIPE_NAME: "Classic Thanksgiving Pumpkin Pie",
    RECIPE_NAME_PART1: "Classic",
    RECIPE_NAME_PART2: "Thanksgiving",
    RECIPE_NAME_PART3: "Pumpkin Pie",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/509616436/photo/pumpkin-pie-with-whipped-cream-and-cinnamon.jpg?s=612x612&w=0&k=20&c=Vtk5H2GNaC_EOgzgzjcXTDQWtUKwuqBQkZVUvn8hG_g=",
    CATEGORY: "Desserts",
    SERVINGS: "8",
    PREP_TIME: "30",
    COOK_TIME: "60",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Complete your holiday feast with our Classic Thanksgiving Pumpkin Pie, featuring a silky smooth filling spiced with cinnamon, nutmeg, and ginger nestled in a flaky, buttery crust. This timeless dessert captures the essence of autumn and creates the perfect ending to your Thanksgiving celebration.",
    RECIPE_TAGS: `
      <a href="#" class="tag">Thanksgiving Dessert</a>
      <a href="#" class="tag">Pumpkin Pie</a>
      <a href="#" class="tag">Holiday Baking</a>
      <a href="#" class="tag">Traditional Recipe</a>
      <a href="#" class="tag">Autumn Flavors</a>
    `,
    INGREDIENTS_LIST: `
      <li>1 unbaked 9-inch pie crust</li>
      <li>1 can (15 oz) pumpkin puree</li>
      <li>3 large eggs</li>
      <li>1 can (12 oz) evaporated milk</li>
      <li>3/4 cup granulated sugar</li>
      <li>1/2 tsp salt</li>
      <li>1 tsp ground cinnamon</li>
      <li>1/2 tsp ground ginger</li>
      <li>1/4 tsp ground nutmeg</li>
      <li>1/8 tsp ground cloves</li>
      <li>1 tsp vanilla extract</li>
      <li>Whipped cream for serving</li>
      <li>Ground cinnamon for dusting</li>
    `,
    INSTRUCTIONS_LIST: `
      <li class="instruction-item">
        <div class="instruction-number">01</div>
        <div class="instruction-text">Preheat oven to 425°F. Place pie crust in 9-inch pie pan and crimp edges decoratively.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">02</div>
        <div class="instruction-text">In large bowl, whisk together pumpkin puree, eggs, and evaporated milk until smooth.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">03</div>
        <div class="instruction-text">In separate bowl, mix sugar, salt, and all spices. Add to pumpkin mixture with vanilla and whisk until combined.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">04</div>
        <div class="instruction-text">Pour filling into prepared crust. Bake 15 minutes, then reduce to 350°F and bake 40-50 minutes until knife inserted near center comes out clean.</div>
      </li>
      <li class="instruction-item">
        <div class="instruction-number">05</div>
        <div class="instruction-text">Cool completely on wire rack. Refrigerate at least 2 hours. Serve with whipped cream and a dusting of cinnamon.</div>
      </li>
    `,
    NUTRITION_INFO: `
      <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">285</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">6g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">12g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">3g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">24g</span></div>
      <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">42g</span></div>
    `,
    CHEF_NAME: "Chef Michael Roberts",
    CHEF_TITLE: "Traditional Cooking Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1136638047/photo/i-love-my-work-cheerful-young-chef-in-apron-keeping-tattooed-arms-crossed-and-smiling-while.jpg?s=612x612&w=0&k=20&c=XDfN4eo_AWH_LM7KLNL8jHCQY9wjkVwRBFMNo-z_4C8="
  },
  "alooParatha": {
    RECIPE_NAME: "Traditional Aloo Paratha with Butter",
    RECIPE_NAME_PART1: "Traditional",
    RECIPE_NAME_PART2: "Aloo",
    RECIPE_NAME_PART3: "Paratha",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1418692758/photo/north-indian-famous-food-aloo-paratha-with-mango-pickle-and-butter.jpg?s=612x612&w=0&k=20&c=JDbBS-5EcSOKUeossLW2NufdKE0Mg7zFZV5ZBLdbpUE=",
    CATEGORY: "Indian Bread",
    SERVINGS: "4",
    PREP_TIME: "30",
    COOK_TIME: "20",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Authentic Indian stuffed flatbread filled with spiced mashed potatoes. This beloved comfort food combines soft, flaky bread with a flavorful potato filling, perfect for breakfast or any meal of the day.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Indian</a>
    <a href="#" class="tag">Bread</a>
    <a href="#" class="tag">Potato</a>
    <a href="#" class="tag">Vegetarian</a>
    <a href="#" class="tag">Comfort Food</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 cups whole wheat flour</li>
    <li>4 medium potatoes, boiled and mashed</li>
    <li>1 tsp cumin seeds</li>
    <li>1 inch ginger, minced</li>
    <li>2 green chilies, finely chopped</li>
    <li>1 tsp coriander powder</li>
    <li>1/2 tsp red chili powder</li>
    <li>1/2 tsp garam masala</li>
    <li>Salt to taste</li>
    <li>2 tbsp fresh cilantro, chopped</li>
    <li>4 tbsp ghee or butter</li>
    <li>Water as needed</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Make dough with flour, salt, and water. Knead until smooth, cover and rest for 20 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Mix mashed potatoes with cumin seeds, ginger, green chilies, spices, and cilantro. Season with salt.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Divide dough into 8 portions. Roll each into a small circle, place 2 tbsp filling in center.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Seal edges and gently roll into a larger circle, being careful not to let filling burst out.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Cook on hot griddle with ghee for 2-3 minutes each side until golden brown spots appear. Serve hot with yogurt and pickle.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">320</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">8g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">6g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">2g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">48g</span></div>
  `,
    CHEF_NAME: "Chef Rajveer Singh",
    CHEF_TITLE: "Indian Cuisine Master",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/indian-man-mountains-male-traditional-turban-hinduist-with-special-things-rituals_1157-41086.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "rasgulla": {
    RECIPE_NAME: "Soft Spongy Rasgulla in Sugar Syrup",
    RECIPE_NAME_PART1: "Soft",
    RECIPE_NAME_PART2: "Spongy",
    RECIPE_NAME_PART3: "Rasgulla",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1044080542/photo/indian-rasgulla-or-rosogulla-dessert-sweet-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=tdAE1jz-B43HcrqBL7dLSiV9tTchIVuPqFY0nMwrzrs=",
    CATEGORY: "Indian Dessert",
    SERVINGS: "6",
    PREP_TIME: "45",
    COOK_TIME: "30",
    DIFFICULTY: "Advanced Level",
    RECIPE_DESCRIPTION: "Delicate, spongy cottage cheese balls soaked in light sugar syrup. This classic Bengali sweet is soft, juicy, and melts in your mouth, making it a perfect ending to any Indian meal.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Indian</a>
    <a href="#" class="tag">Sweet</a>
    <a href="#" class="tag">Bengali</a>
    <a href="#" class="tag">Dessert</a>
    <a href="#" class="tag">Vegetarian</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 liter full-fat milk</li>
    <li>2 tbsp lemon juice or vinegar</li>
    <li>1 cup sugar</li>
    <li>4 cups water</li>
    <li>1 tsp semolina (optional)</li>
    <li>1/4 tsp cardamom powder</li>
    <li>Ice cold water for chilling</li>
    <li>Rose water (optional)</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Boil milk, add lemon juice to curdle. Strain through cloth, rinse chenna under cold water until acid smell goes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Squeeze out excess water and knead chenna for 8-10 minutes until smooth and soft. Add semolina if using.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Make small balls from chenna. Meanwhile, boil sugar and water to make syrup.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Gently drop balls into boiling syrup. Cover and cook for 15-20 minutes on medium heat.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Let cool completely. The rasgullas will double in size. Chill before serving with syrup.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">180</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">6g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">0g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">32g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">35g</span></div>
  `,
    CHEF_NAME: "Chef Rajveer Singh",
    CHEF_TITLE: "Indian Cuisine Master",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/indian-man-mountains-male-traditional-turban-hinduist-with-special-things-rituals_1157-41086.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "bbqRibs": {
    RECIPE_NAME: "Smoky BBQ Baby Back Ribs",
    RECIPE_NAME_PART1: "Smoky",
    RECIPE_NAME_PART2: "BBQ",
    RECIPE_NAME_PART3: "Ribs",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/873719246/photo/barbecued-baby-back-ribs.jpg?s=612x612&w=0&k=20&c=rdFuz-pRZ7lPjU8SnKi7zeMavfGQC98w-UCF3oYzAkc=",
    CATEGORY: "Barbecue",
    SERVINGS: "4",
    PREP_TIME: "15",
    COOK_TIME: "180",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Tender, fall-off-the-bone baby back ribs with a perfect smoky flavor and tangy BBQ glaze. Slow-cooked to perfection and finished with a caramelized barbecue sauce that will have everyone coming back for more.",
    RECIPE_TAGS: `
    <a href="#" class="tag">BBQ</a>
    <a href="#" class="tag">Pork</a>
    <a href="#" class="tag">Ribs</a>
    <a href="#" class="tag">Smoky</a>
    <a href="#" class="tag">Grilled</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 racks baby back ribs (2-3 lbs each)</li>
    <li>2 tbsp brown sugar</li>
    <li>2 tbsp paprika</li>
    <li>1 tbsp garlic powder</li>
    <li>1 tbsp onion powder</li>
    <li>1 tsp black pepper</li>
    <li>1 tsp salt</li>
    <li>1 tsp smoked paprika</li>
    <li>1/2 tsp cayenne pepper</li>
    <li>1 cup BBQ sauce</li>
    <li>1/4 cup apple cider vinegar</li>
    <li>Wood chips for smoking</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Remove membrane from back of ribs. Mix all dry spices to create rub. Coat ribs generously with spice rub.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Let ribs marinate for at least 2 hours or overnight in refrigerator for best flavor.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Preheat smoker or grill to 225°F. Add soaked wood chips for smoke.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Cook ribs bone-side down for 2.5-3 hours, maintaining consistent temperature and adding wood chips as needed.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Brush with BBQ sauce during last 30 minutes. Rest for 10 minutes before cutting between bones to serve.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">650</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">45g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">42g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">18g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">22g</span></div>
  `,
    CHEF_NAME: "Chef Bobby Thompson",
    CHEF_TITLE: "American Cuisine Master",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5342.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "clamChowder": {
    RECIPE_NAME: "Creamy New England Clam Chowder",
    RECIPE_NAME_PART1: "Creamy",
    RECIPE_NAME_PART2: "Clam",
    RECIPE_NAME_PART3: "Chowder",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1920455122/photo/chunky-new-england-clam-chowder.jpg?s=612x612&w=0&k=20&c=EP8GkUVqqcT3ZCoSekDLjHiysGnvKvTAcRrTQVXGZ60=",
    CATEGORY: "Soup",
    SERVINGS: "6",
    PREP_TIME: "20",
    COOK_TIME: "35",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Rich and creamy New England-style clam chowder loaded with tender clams, potatoes, and celery in a velvety white broth. This comforting soup is perfect for cold days and captures the essence of coastal cuisine.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Soup</a>
    <a href="#" class="tag">Seafood</a>
    <a href="#" class="tag">Creamy</a>
    <a href="#" class="tag">American</a>
    <a href="#" class="tag">Comfort Food</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 lbs fresh clams or 2 cans chopped clams</li>
    <li>4 slices bacon, diced</li>
    <li>1 large onion, diced</li>
    <li>2 celery stalks, diced</li>
    <li>3 medium potatoes, cubed</li>
    <li>3 tbsp all-purpose flour</li>
    <li>2 cups clam juice</li>
    <li>1 cup heavy cream</li>
    <li>1 cup whole milk</li>
    <li>2 bay leaves</li>
    <li>1/2 tsp thyme</li>
    <li>Salt and white pepper to taste</li>
    <li>Fresh parsley for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">If using fresh clams, steam until they open. Reserve clam juice. Remove clam meat and chop.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Cook bacon in large pot until crispy. Add onion and celery, cook until softened, about 5 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Sprinkle flour over vegetables, cook for 2 minutes. Gradually add clam juice, stirring constantly.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Add potatoes, bay leaves, and thyme. Simmer until potatoes are tender, about 15 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Stir in clams, cream, and milk. Heat through but don't boil. Season with salt and pepper. Serve hot with crackers.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">380</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">18g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">8g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">32g</span></div>
  `,
    CHEF_NAME: "Chef Bobby Thompson",
    CHEF_TITLE: "American Cuisine Master",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5342.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "tamales": {
    RECIPE_NAME: "Traditional Pork Tamales with Red Sauce",
    RECIPE_NAME_PART1: "Traditional",
    RECIPE_NAME_PART2: "Pork",
    RECIPE_NAME_PART3: "Tamales",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/516808999/photo/homemade-corn-and-chicken-tamales.jpg?s=612x612&w=0&k=20&c=i1pmz4M8ItJb3iQ1QjFDUt8LHNWujNht0tQPuuMAMIM=",
    CATEGORY: "Mexican",
    SERVINGS: "12",
    PREP_TIME: "120",
    COOK_TIME: "90",
    DIFFICULTY: "Advanced Level",
    RECIPE_DESCRIPTION: "Authentic Mexican tamales filled with tender pork in red chile sauce, wrapped in corn husks and steamed to perfection. These traditional treats are perfect for celebrations and family gatherings.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Mexican</a>
    <a href="#" class="tag">Pork</a>
    <a href="#" class="tag">Steamed</a>
    <a href="#" class="tag">Traditional</a>
    <a href="#" class="tag">Holiday</a>
  `,
    INGREDIENTS_LIST: `
    <li>30 dried corn husks</li>
    <li>2 lbs pork shoulder, cubed</li>
    <li>4 dried guajillo chiles</li>
    <li>2 dried ancho chiles</li>
    <li>3 cloves garlic</li>
    <li>1 tsp cumin</li>
    <li>2 cups masa harina</li>
    <li>1 cup lard or vegetable shortening</li>
    <li>1 tsp baking powder</li>
    <li>2 tsp salt</li>
    <li>1-2 cups warm broth</li>
    <li>1 tsp oregano</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Soak corn husks in warm water for 2 hours. Cook pork until tender, shred and set aside with broth.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Toast chiles, soak in hot water for 20 minutes. Blend with garlic, cumin, and oregano to make sauce.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Mix shredded pork with chile sauce. Beat lard until fluffy, add masa, baking powder, salt, and warm broth.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Spread masa on smooth side of husk, add filling, fold and tie. Arrange upright in steamer.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Steam for 60-90 minutes until masa pulls away from husk easily. Serve hot with salsa verde.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">285</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">15g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">4g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">32g</span></div>
  `,
    CHEF_NAME: "Chef Alejandra Morales",
    CHEF_TITLE: "Mexican Cuisine Expert",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/front-view-man-with-delicious-taco_23-2151048010.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "pozole": {
    RECIPE_NAME: "Hearty Pozole Rojo with Pork",
    RECIPE_NAME_PART1: "Hearty",
    RECIPE_NAME_PART2: "Pozole",
    RECIPE_NAME_PART3: "Rojo",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/612752556/photo/traditional-mexican-corn-soup.jpg?s=612x612&w=0&k=20&c=W6ov1HdvNLYn6nbJ7sqAm31Dmx4TRrOye3wC8jZNjzw=",
    CATEGORY: "Mexican Soup",
    SERVINGS: "8",
    PREP_TIME: "30",
    COOK_TIME: "150",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Traditional Mexican hominy soup with tender pork in a rich red chile broth. This festive dish is garnished with fresh toppings and perfect for special occasions and family celebrations.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Mexican</a>
    <a href="#" class="tag">Soup</a>
    <a href="#" class="tag">Pork</a>
    <a href="#" class="tag">Spicy</a>
    <a href="#" class="tag">Traditional</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 lbs pork shoulder, cut in chunks</li>
    <li>1 lb pork ribs</li>
    <li>2 cans white hominy, drained</li>
    <li>6 guajillo chiles, stemmed and seeded</li>
    <li>3 ancho chiles, stemmed and seeded</li>
    <li>4 cloves garlic</li>
    <li>1 white onion, quartered</li>
    <li>2 tsp oregano</li>
    <li>1 tsp cumin</li>
    <li>Salt to taste</li>
    <li>Garnishes: lettuce, radishes, oregano, lime</li>
    <li>Tostadas for serving</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Boil pork shoulder and ribs with half the onion and salt for 1.5 hours until tender. Reserve broth, shred meat.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Toast chiles in dry pan for 2 minutes. Soak in hot water for 20 minutes until softened.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Blend soaked chiles with garlic, remaining onion, oregano, and cumin. Strain the mixture.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Combine chile mixture with pork broth, add shredded meat and hominy. Simmer for 30 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Season with salt. Serve hot with shredded lettuce, sliced radishes, oregano, lime wedges, and tostadas.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">420</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">28g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">18g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">6g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">4g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">38g</span></div>
  `,
    CHEF_NAME: "Chef Alejandra Morales",
    CHEF_TITLE: "Mexican Cuisine Expert",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/front-view-man-with-delicious-taco_23-2151048010.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },
  "elote": {
    RECIPE_NAME: "Mexican Street Corn Elote",
    RECIPE_NAME_PART1: "Mexican",
    RECIPE_NAME_PART2: "Street",
    RECIPE_NAME_PART3: "Corn",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/2150005506/photo/mexican-street-corn-dip-in-bowl-elote-dip-with-nachos-chips-latin-american-cuisine.jpg?s=612x612&w=0&k=20&c=HKoF9Qw8OnuLXk9SS6XWYlsmqb-vriYcsPfqBGvLl3M=",
    CATEGORY: "Mexican Street Food",
    SERVINGS: "4",
    PREP_TIME: "10",
    COOK_TIME: "15",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "Savor the authentic flavors of Mexico with this classic street corn. Grilled corn on the cob is slathered with creamy mayo, tangy lime, and dusted with chili powder and cotija cheese for a perfect balance of smoky, spicy, and creamy goodness.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Mexican</a>
    <a href="#" class="tag">Street Food</a>
    <a href="#" class="tag">Grilled</a>
    <a href="#" class="tag">Corn</a>
    <a href="#" class="tag">Spicy</a>
  `,
    INGREDIENTS_LIST: `
    <li>4 ears fresh corn, husked</li>
    <li>1/2 cup mayonnaise</li>
    <li>1/2 cup crema or sour cream</li>
    <li>1/2 cup cotija cheese, crumbled</li>
    <li>2 limes, cut into wedges</li>
    <li>1 tsp chili powder</li>
    <li>1/2 tsp paprika</li>
    <li>1/4 tsp cayenne pepper</li>
    <li>2 cloves garlic, minced</li>
    <li>Fresh cilantro, chopped</li>
    <li>Salt to taste</li>
    <li>4 wooden sticks or skewers</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Preheat grill to medium-high heat. Insert wooden sticks into corn cobs for easy handling.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Grill corn for 10-12 minutes, turning occasionally until charred and tender all around.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Mix mayonnaise, crema, and minced garlic in a bowl. Combine chili powder, paprika, and cayenne in another bowl.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Brush grilled corn with the creamy mixture, ensuring even coverage.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Sprinkle with cotija cheese, chili spice mix, and cilantro. Serve with lime wedges and enjoy immediately.</div>    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">285</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">8g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">18g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">8g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">28g</span></div>
  `,
    CHEF_NAME: "Chef Alejandra Morales",
    CHEF_TITLE: "Mexican Cuisine Expert",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/front-view-man-with-delicious-taco_23-2151048010.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"

  },

  "gnocchi": {
    RECIPE_NAME: "Handmade Potato Gnocchi",
    RECIPE_NAME_PART1: "Handmade",
    RECIPE_NAME_PART2: "Potato",
    RECIPE_NAME_PART3: "Gnocchi",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/511095807/photo/homemade-italian-gnocchi-with-red-sauce.jpg?s=612x612&w=0&k=20&c=TN69z1wwHf_eUa9wp0FD2sKD4P0SRrXJle52gznccK0=",
    CATEGORY: "Italian Food",
    SERVINGS: "4",
    PREP_TIME: "45",
    COOK_TIME: "20",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Master the art of Italian cooking with these pillowy soft potato gnocchi made from scratch. These delicate dumplings are perfectly tender and pair beautifully with any sauce, from simple butter and sage to rich tomato or creamy pesto.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Italian</a>
    <a href="#" class="tag">Handmade</a>
    <a href="#" class="tag">Pasta</a>
    <a href="#" class="tag">Potato</a>
    <a href="#" class="tag">Traditional</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 lbs russet potatoes</li>
    <li>1 1/2 cups all-purpose flour, plus extra for dusting</li>
    <li>1 large egg, beaten</li>
    <li>1 tsp salt</li>
    <li>1/4 tsp nutmeg</li>
    <li>4 tbsp butter</li>
    <li>8-10 fresh sage leaves</li>
    <li>1/2 cup grated Parmesan cheese</li>
    <li>Black pepper to taste</li>
    <li>Salt for pasta water</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Boil potatoes with skin on until tender, about 25-30 minutes. Drain, cool slightly, then peel and pass through a ricer.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Make a well with the riced potatoes, add flour, egg, salt, and nutmeg. Gently mix until a soft dough forms.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Divide dough into portions. Roll each into 3/4-inch thick ropes and cut into 3/4-inch pieces.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Roll each piece over a gnocchi board or fork tines to create ridges. Place on floured baking sheet.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Boil salted water. Cook gnocchi in batches until they float, 2-3 minutes. Toss with butter, sage, Parmesan, and pepper.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">420</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">14g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">4g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">65g</span></div>
  `,
    CHEF_NAME: "Chef Giuseppe Romano",
    CHEF_TITLE: "Italian Cuisine Specialist",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/italian-chef-dressed-uniform-holding-tomatoes-pasta-hands-singing-yellow-background-emotional-man-chef-hat-fooling-around-work_574295-6088.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "bruschetta": {
    RECIPE_NAME: "Classic Tomato Bruschetta",
    RECIPE_NAME_PART1: "Classic",
    RECIPE_NAME_PART2: "Tomato",
    RECIPE_NAME_PART3: "Bruschetta",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/2150005563/photo/toast-skagen-shrimps-and-red-caviar-on-bread-classic-swedish-sandwich-top-view.jpg?s=612x612&w=0&k=20&c=vB5Wp7aNs5qSjba0Ts2CWAm1408GubEb2nBus4ZNFP4=",
    CATEGORY: "Italian Appetizer",
    SERVINGS: "6",
    PREP_TIME: "15",
    COOK_TIME: "5",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "Embrace the simplicity of Italian cuisine with this fresh and vibrant bruschetta. Toasted artisan bread is topped with ripe tomatoes, fragrant basil, and quality olive oil, creating the perfect appetizer that celebrates the beauty of fresh, seasonal ingredients.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Italian</a>
    <a href="#" class="tag">Appetizer</a>
    <a href="#" class="tag">Fresh</a>
    <a href="#" class="tag">Tomato</a>
    <a href="#" class="tag">Quick</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 Italian baguette or rustic bread, sliced 1/2-inch thick</li>
    <li>4 large ripe tomatoes, diced</li>
    <li>3 cloves garlic, minced (plus 1 whole clove for rubbing)</li>
    <li>1/4 cup fresh basil leaves, chopped</li>
    <li>1/4 cup extra virgin olive oil</li>
    <li>2 tbsp balsamic vinegar</li>
    <li>1/2 tsp salt</li>
    <li>1/4 tsp black pepper</li>
    <li>1/4 cup grated Parmesan cheese (optional)</li>
    <li>Fresh basil leaves for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Toast bread slices until golden brown and crispy. Rub one side of each slice with whole garlic clove.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">In a bowl, combine diced tomatoes, minced garlic, chopped basil, olive oil, and balsamic vinegar.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Season the tomato mixture with salt and pepper. Let it sit for 10 minutes to allow flavors to meld.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Spoon the tomato mixture generously onto each toasted bread slice.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Sprinkle with Parmesan cheese if desired, garnish with fresh basil, and serve immediately.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">180</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">5g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">9g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">4g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">22g</span></div>
  `,
    CHEF_NAME: "Chef Giuseppe Romano",
    CHEF_TITLE: "Italian Cuisine Specialist",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/italian-chef-dressed-uniform-holding-tomatoes-pasta-hands-singing-yellow-background-emotional-man-chef-hat-fooling-around-work_574295-6088.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "pannaCotta": {
    RECIPE_NAME: "Vanilla Bean Panna Cotta",
    RECIPE_NAME_PART1: "Vanilla",
    RECIPE_NAME_PART2: "Bean",
    RECIPE_NAME_PART3: "Panna Cotta",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1255776846/photo/raspberry-panna-cotta-with-raspberry-jelly-italian-dessert-homemade-cuisine-copy-space.jpg?s=612x612&w=0&k=20&c=TU-mPAtTafCrWcxHrtAO-HjxMkcGgOoG5E6W5l9tJkg=",
    CATEGORY: "Italian Dessert",
    SERVINGS: "6",
    PREP_TIME: "20",
    COOK_TIME: "10",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Indulge in the silky elegance of this classic Italian dessert. Rich cream infused with vanilla bean creates a luxuriously smooth panna cotta that melts in your mouth, topped with a vibrant berry coulis for the perfect balance of sweetness and tartness.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Italian</a>
    <a href="#" class="tag">Dessert</a>
    <a href="#" class="tag">Creamy</a>
    <a href="#" class="tag">Elegant</a>
    <a href="#" class="tag">Make-ahead</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 cups heavy cream</li>
    <li>1/2 cup granulated sugar</li>
    <li>1 packet (2 1/4 tsp) unflavored gelatin</li>
    <li>3 tbsp cold water</li>
    <li>1 vanilla bean, split and scraped</li>
    <li>1/4 tsp salt</li>
    <li>1 cup mixed berries (strawberries, raspberries, blueberries)</li>
    <li>3 tbsp sugar (for berry coulis)</li>
    <li>1 tbsp lemon juice</li>
    <li>Fresh mint leaves for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Sprinkle gelatin over cold water in a small bowl. Let bloom for 5 minutes until softened.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">In a saucepan, heat cream, sugar, vanilla bean pod and seeds, and salt. Bring to just below boiling point.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Remove from heat, whisk in bloomed gelatin until completely dissolved. Strain mixture to remove vanilla pod.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Divide mixture among 6 ramekins. Cool to room temperature, then refrigerate for at least 4 hours or overnight.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Make berry coulis by cooking berries, sugar, and lemon juice until syrupy. Serve panna cotta with coulis and mint.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">320</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">4g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">28g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">22g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">25g</span></div>
  `,
    CHEF_NAME: "Chef Giuseppe Romano",
    CHEF_TITLE: "Italian Cuisine Specialist",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/italian-chef-dressed-uniform-holding-tomatoes-pasta-hands-singing-yellow-background-emotional-man-chef-hat-fooling-around-work_574295-6088.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "misoSoup": {
    RECIPE_NAME: "Traditional Miso Soup",
    RECIPE_NAME_PART1: "Traditional",
    RECIPE_NAME_PART2: "Miso",
    RECIPE_NAME_PART3: "Soup",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/479541866/photo/japanese-miso-soup-in-a-white-bowl-horizontal-top-view.jpg?s=612x612&w=0&k=20&c=HqwxSbGqixIw0PaM7W8zOj0IcuQH2TDPEVNvqKTcS9E=",
    CATEGORY: "Japanese Soup",
    SERVINGS: "4",
    PREP_TIME: "10",
    COOK_TIME: "15",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "Experience the comforting warmth of authentic Japanese cuisine with this traditional miso soup. The umami-rich broth combines savory miso paste with delicate tofu and wakame seaweed, creating a nourishing soup that perfectly complements any meal.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Japanese</a>
    <a href="#" class="tag">Soup</a>
    <a href="#" class="tag">Healthy</a>
    <a href="#" class="tag">Umami</a>
    <a href="#" class="tag">Traditional</a>
  `,
    INGREDIENTS_LIST: `
    <li>4 cups dashi stock (or water with dashi powder)</li>
    <li>3 tbsp miso paste (white or red)</li>
    <li>1/2 cup silken tofu, cubed</li>
    <li>2 tbsp dried wakame seaweed</li>
    <li>2 green onions, thinly sliced</li>
    <li>1 tbsp mirin (optional)</li>
    <li>1/2 tsp grated fresh ginger</li>
    <li>1 sheet nori, cut into thin strips (optional)</li>
    <li>1/4 cup enoki mushrooms (optional)</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Soak wakame seaweed in warm water for 5 minutes until rehydrated. Drain and set aside.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Heat dashi stock in a saucepan over medium heat. Do not let it boil vigorously.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">In a small bowl, whisk miso paste with a ladle of warm dashi until smooth and lump-free.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Return miso mixture to the pot, add tofu, wakame, and ginger. Simmer gently for 2-3 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Remove from heat, garnish with green onions and nori strips. Serve immediately while hot.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">85</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">6g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">2g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">4g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">8g</span></div>
  `,
    CHEF_NAME: "Chef Aiko Tanaka",
    CHEF_TITLE: "Japanese Cuisine Expert",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/medium-shot-professional-chef-posing_23-2151232169.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "okonomiyaki": {
    RECIPE_NAME: "Osaka Style Okonomiyaki",
    RECIPE_NAME_PART1: "Osaka",
    RECIPE_NAME_PART2: "Style",
    RECIPE_NAME_PART3: "Okonomiyaki",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1134067307/photo/japanese-food-okonomiyaki-japanese-style-pancakes.jpg?s=612x612&w=0&k=20&c=WAXGsoYX9eH0Da-iG5shwJ_jDOtfDqoZ0QYNBUCAcRI=",
    CATEGORY: "Japanese Comfort Food",
    SERVINGS: "4",
    PREP_TIME: "20",
    COOK_TIME: "15",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Discover the soul of Japanese comfort food with this savory pancake from Osaka. Loaded with cabbage and your choice of proteins, then topped with tangy sauce, mayo, and bonito flakes, okonomiyaki delivers incredible flavors and textures in every bite.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Japanese</a>
    <a href="#" class="tag">Comfort Food</a>
    <a href="#" class="tag">Savory Pancake</a>
    <a href="#" class="tag">Osaka</a>
    <a href="#" class="tag">Street Food</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 cups all-purpose flour</li>
    <li>2 cups dashi stock, cold</li>
    <li>4 large eggs</li>
    <li>4 cups cabbage, finely shredded</li>
    <li>4 strips bacon, chopped</li>
    <li>1/2 cup green onions, chopped</li>
    <li>1/4 cup pickled ginger, chopped</li>
    <li>Okonomiyaki sauce (or Worcestershire sauce)</li>
    <li>Japanese mayonnaise</li>
    <li>Bonito flakes (katsuobushi)</li>
    <li>Aonori (seaweed flakes)</li>
    <li>Vegetable oil for cooking</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Make batter by whisking flour with cold dashi stock until smooth. Let rest for 30 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Mix cabbage, green onions, pickled ginger, and bacon in a large bowl. Add eggs and batter, fold gently.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Heat oil in a large skillet. Pour in mixture, shape into a thick pancake, and cook for 4-5 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Carefully flip and cook another 4-5 minutes until golden brown and cooked through.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Top with okonomiyaki sauce, mayonnaise drizzles, bonito flakes, and aonori. Serve hot and enjoy immediately.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">380</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">18g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">15g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">4g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">8g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">45g</span></div>
  `,
    CHEF_NAME: "Chef Aiko Tanaka",
    CHEF_TITLE: "Japanese Cuisine Expert",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/medium-shot-professional-chef-posing_23-2151232169.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },

  "yakitori": {
    RECIPE_NAME: "Authentic Chicken Yakitori",
    RECIPE_NAME_PART1: "Authentic",
    RECIPE_NAME_PART2: "Chicken",
    RECIPE_NAME_PART3: "Yakitori",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1418965870/photo/yakitori.jpg?s=612x612&w=0&k=20&c=O5uvy2zCMPQ5HlU6IRFEmei7fJrTgkk65Q4DPT_u0tI=",
    CATEGORY: "Japanese Grilled Food",
    SERVINGS: "4",
    PREP_TIME: "25",
    COOK_TIME: "12",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Transport yourself to a Tokyo street-side yakitori stand with these perfectly glazed chicken skewers. Tender chicken thighs are marinated and grilled to perfection, then brushed with a sweet and savory tare sauce that caramelizes beautifully over the flames.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Japanese</a>
    <a href="#" class="tag">Grilled</a>
    <a href="#" class="tag">Chicken</a>
    <a href="#" class="tag">Skewers</a>
    <a href="#" class="tag">Street Food</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 lbs chicken thighs, boneless, cut into bite-sized pieces</li>
    <li>12-16 bamboo skewers, soaked in water</li>
    <li>1/2 cup soy sauce</li>
    <li>1/4 cup mirin</li>
    <li>1/4 cup sake</li>
    <li>3 tbsp sugar</li>
    <li>2 tbsp honey</li>
    <li>2 cloves garlic, minced</li>
    <li>1 tsp fresh ginger, grated</li>
    <li>1 tbsp vegetable oil</li>
    <li>2 green onions, chopped</li>
    <li>Sesame seeds for garnish</li>
    <li>Shichimi togarashi (optional)</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Make tare sauce by combining soy sauce, mirin, sake, sugar, honey, garlic, and ginger. Simmer until thickened.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Thread chicken pieces onto soaked skewers, leaving small gaps between pieces for even cooking.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Preheat grill to medium-high heat. Brush grates with oil to prevent sticking.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Grill skewers for 8-10 minutes, turning every 2 minutes. Brush with tare sauce in the last 3 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Serve immediately garnished with green onions, sesame seeds, and a sprinkle of shichimi togarashi if desired.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">320</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">28g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">15g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">18g</span></div>
  `,
    CHEF_NAME: "Chef Aiko Tanaka",
    CHEF_TITLE: "Japanese Cuisine Expert",
    CHEF_AVATAR_URL: "https://img.freepik.com/free-photo/medium-shot-professional-chef-posing_23-2151232169.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
  },
  "paneerBhurji": {
    RECIPE_NAME: "Paneer Bhurji",
    RECIPE_NAME_PART1: "Paneer",
    RECIPE_NAME_PART2: "",
    RECIPE_NAME_PART3: "Bhurji",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1337466644/photo/paneer-bhurji-mildly-spiced-cottage-cheese-scramble-and-served-selective-focus.jpg?s=612x612&w=0&k=20&c=s_LGPUnJRg8PI-Mw2Vj1dndAbr0bH3gUdij__weXrFw=",
    CATEGORY: "Main Course",
    SERVINGS: "4",
    PREP_TIME: "15",
    COOK_TIME: "20",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "A flavorful Indian scrambled cottage cheese dish with onions, tomatoes, and aromatic spices.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegetarian</a>
    <a href="#" class="tag">Indian</a>
    <a href="#" class="tag">Protein-Rich</a>
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">Spicy</a>
  `,
    INGREDIENTS_LIST: `
    <li>400g paneer, crumbled</li>
    <li>2 medium onions, finely chopped</li>
    <li>3 tomatoes, finely chopped</li>
    <li>2 green chilies, chopped</li>
    <li>1 tsp ginger-garlic paste</li>
    <li>1 tsp cumin seeds</li>
    <li>1 tsp turmeric powder</li>
    <li>1 tsp red chili powder</li>
    <li>1 tsp garam masala</li>
    <li>3 tbsp cooking oil</li>
    <li>Salt to taste</li>
    <li>Fresh coriander for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Heat oil in a pan and add cumin seeds. Let them splutter.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add onions and green chilies. Sauté until onions turn golden brown.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add ginger-garlic paste and cook for 1 minute.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Add tomatoes and cook until they become soft and mushy.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Add all spices and cook for 2 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">06</div>
      <div class="instruction-text">Add crumbled paneer and mix well. Cook for 5-7 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">07</div>
      <div class="instruction-text">Garnish with fresh coriander and serve hot with roti or rice.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">320</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">18g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">24g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">4g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">8g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">12g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },

  "bajraRotiVeggies": {
    RECIPE_NAME: "Bajra Roti with Veggies",
    RECIPE_NAME_PART1: "Bajra Roti",
    RECIPE_NAME_PART2: "with",
    RECIPE_NAME_PART3: "Veggies",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1469647121/photo/bajra-methi-thepla-indian-flat-bread-made-of-pearl-millet-flour-fenugreek-leaves-sesame-seeds.jpg?s=612x612&w=0&k=20&c=kVoUbi7G9sq7oLqkCouUXgQ5_Y-UoCj3mUOxxluU-_Q=",
    CATEGORY: "Main Course",
    SERVINGS: "4",
    PREP_TIME: "30",
    COOK_TIME: "25",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Nutritious pearl millet flatbread served with a medley of seasonal vegetables cooked with traditional spices.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegetarian</a>
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">High-Fiber</a>
    <a href="#" class="tag">Traditional</a>
    <a href="#" class="tag">Healthy</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 cups bajra (pearl millet) flour</li>
    <li>1 cup warm water</li>
    <li>1 tsp salt</li>
    <li>2 tbsp ghee</li>
    <li>1 cup mixed vegetables (cauliflower, beans, carrots)</li>
    <li>1 large onion, chopped</li>
    <li>2 tomatoes, chopped</li>
    <li>1 tsp ginger-garlic paste</li>
    <li>1 tsp cumin seeds</li>
    <li>1 tsp coriander powder</li>
    <li>1/2 tsp turmeric powder</li>
    <li>1 tsp red chili powder</li>
    <li>3 tbsp cooking oil</li>
    <li>Fresh coriander for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Mix bajra flour with salt and gradually add warm water to form a soft dough.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Knead well and let it rest for 15 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Heat oil in a pan, add cumin seeds and let them splutter.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Add onions and cook until golden, then add ginger-garlic paste.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Add tomatoes and spices, cook until tomatoes break down.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">06</div>
      <div class="instruction-text">Add mixed vegetables and cook until tender.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">07</div>
      <div class="instruction-text">Roll out bajra dough and cook rotis on a hot griddle with ghee.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">08</div>
      <div class="instruction-text">Serve hot bajra rotis with the vegetable curry.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">420</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">14g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">9g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">8g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">68g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },

  "pumpkinSoup": {
    RECIPE_NAME: "Pumpkin Soup",
    RECIPE_NAME_PART1: "Pumpkin",
    RECIPE_NAME_PART2: "",
    RECIPE_NAME_PART3: "Soup",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/541305426/photo/pumpkin-and-carrot-soup-with-cream-and-parsley.jpg?s=612x612&w=0&k=20&c=Hb-1m3-qHc92V5ifVvVqkx-skO2HRHYY25X3HSX9xH0=",
    CATEGORY: "Soups",
    SERVINGS: "4",
    PREP_TIME: "20",
    COOK_TIME: "35",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A creamy and comforting pumpkin soup with warming spices, perfect for chilly days.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegetarian</a>
    <a href="#" class="tag">Comfort Food</a>
    <a href="#" class="tag">Seasonal</a>
    <a href="#" class="tag">Creamy</a>
    <a href="#" class="tag">Warming</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 lbs pumpkin, peeled and cubed</li>
    <li>1 large onion, chopped</li>
    <li>3 cloves garlic, minced</li>
    <li>1 inch ginger, grated</li>
    <li>4 cups vegetable broth</li>
    <li>1 cup coconut milk</li>
    <li>1 tsp ground cinnamon</li>
    <li>1/2 tsp nutmeg</li>
    <li>1/2 tsp ground ginger</li>
    <li>2 tbsp olive oil</li>
    <li>2 tbsp honey or maple syrup</li>
    <li>Salt and pepper to taste</li>
    <li>Pumpkin seeds for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Heat olive oil in a large pot over medium heat.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add onion and cook until softened, about 5 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add garlic and fresh ginger, cook for 1 minute.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Add pumpkin cubes and spices, stir to coat.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Pour in vegetable broth and bring to a boil.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">06</div>
      <div class="instruction-text">Reduce heat and simmer for 20-25 minutes until pumpkin is tender.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">07</div>
      <div class="instruction-text">Blend until smooth, stir in coconut milk and honey.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">08</div>
      <div class="instruction-text">Season with salt and pepper, garnish with pumpkin seeds.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">220</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">4g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">6g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">28g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },

  "eggCurry": {
    RECIPE_NAME: "Egg Curry",
    RECIPE_NAME_PART1: "Egg",
    RECIPE_NAME_PART2: "",
    RECIPE_NAME_PART3: "Curry",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/535396866/photo/indian-famous-egg-curry-or-anda-curry.jpg?s=612x612&w=0&k=20&c=GZQYSpkBfEtUuJ4-hjpuc1UJ14eRh3qOeXfGJxlNkO8=",
    CATEGORY: "Main Course",
    SERVINGS: "4",
    PREP_TIME: "20",
    COOK_TIME: "25",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "A rich and flavorful Indian egg curry with hard-boiled eggs simmered in aromatic spiced gravy.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Non-Vegetarian</a>
    <a href="#" class="tag">Indian</a>
    <a href="#" class="tag">Protein-Rich</a>
    <a href="#" class="tag">Comfort Food</a>
    <a href="#" class="tag">Spicy</a>
  `,
    INGREDIENTS_LIST: `
    <li>8 eggs, hard-boiled and peeled</li>
    <li>2 large onions, sliced</li>
    <li>3 tomatoes, chopped</li>
    <li>2 tsp ginger-garlic paste</li>
    <li>2 green chilies, slit</li>
    <li>1 tsp cumin seeds</li>
    <li>2 bay leaves</li>
    <li>1 tsp turmeric powder</li>
    <li>2 tsp red chili powder</li>
    <li>1 tsp coriander powder</li>
    <li>1 tsp garam masala</li>
    <li>400ml coconut milk</li>
    <li>3 tbsp cooking oil</li>
    <li>Salt to taste</li>
    <li>Fresh coriander for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Heat oil in a pan and lightly fry the boiled eggs until golden. Set aside.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">In the same oil, add cumin seeds and bay leaves. Let them splutter.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add onions and cook until golden brown.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Add ginger-garlic paste and green chilies. Cook for 2 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Add tomatoes and all spices. Cook until tomatoes break down.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">06</div>
      <div class="instruction-text">Pour in coconut milk and bring to a boil. Simmer for 10 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">07</div>
      <div class="instruction-text">Add fried eggs and simmer for 5 minutes. Garnish with coriander and serve.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">380</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">16g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">28g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">9g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">15g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },

  "chickpeaStirFry": {
    RECIPE_NAME: "Chickpea Stir Fry",
    RECIPE_NAME_PART1: "Chickpea",
    RECIPE_NAME_PART2: "Stir",
    RECIPE_NAME_PART3: "Fry",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/861841334/photo/vegan-stir-fry-of-mushrooms-zucchini-and-chickpea.jpg?s=612x612&w=0&k=20&c=PdMbgGwMNcFmbDrA0AgGnmy2xljGMcXWLI84-P64i5c=",
    CATEGORY: "Main Course",
    SERVINGS: "4",
    PREP_TIME: "10",
    COOK_TIME: "15",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A quick and nutritious chickpea stir fry with colorful vegetables and aromatic spices.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">High-Protein</a>
    <a href="#" class="tag">Quick</a>
    <a href="#" class="tag">Healthy</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 cups cooked chickpeas</li>
    <li>1 bell pepper, diced</li>
    <li>1 onion, chopped</li>
    <li>2 carrots, diced</li>
    <li>1 zucchini, diced</li>
    <li>3 cloves garlic, minced</li>
    <li>1 tsp cumin powder</li>
    <li>1 tsp paprika</li>
    <li>1/2 tsp turmeric</li>
    <li>2 tbsp olive oil</li>
    <li>1 lemon, juiced</li>
    <li>Salt and pepper to taste</li>
    <li>Fresh parsley for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Heat olive oil in a large pan over medium-high heat.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add onion and cook until translucent, about 3 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add garlic, carrots, and bell pepper. Stir fry for 5 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Add zucchini and all spices. Cook for 3 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Add chickpeas and stir well. Cook for 3-4 minutes until heated through.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">06</div>
      <div class="instruction-text">Drizzle with lemon juice, season with salt and pepper.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">07</div>
      <div class="instruction-text">Garnish with fresh parsley and serve hot.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">285</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">8g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">11g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">8g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">42g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },

  "peasPulao": {
    RECIPE_NAME: "Peas Pulao",
    RECIPE_NAME_PART1: "Peas",
    RECIPE_NAME_PART2: "",
    RECIPE_NAME_PART3: "Pulao",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/504339251/photo/vege-rice.jpg?s=612x612&w=0&k=20&c=TMFfcFAoCuuwFgrRO-U7uyvz-wuDhPurmdd4YdK7EYU=",
    CATEGORY: "Main Course",
    SERVINGS: "4",
    PREP_TIME: "15",
    COOK_TIME: "30",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "A fragrant basmati rice dish cooked with green peas and aromatic whole spices.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegetarian</a>
    <a href="#" class="tag">Indian</a>
    <a href="#" class="tag">Rice Dish</a>
    <a href="#" class="tag">Comfort Food</a>
    <a href="#" class="tag">One-Pot Meal</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 cups basmati rice, soaked for 30 minutes</li>
    <li>1 cup green peas (fresh or frozen)</li>
    <li>1 large onion, sliced</li>
    <li>4 cups water or vegetable broth</li>
    <li>2 bay leaves</li>
    <li>4-5 green cardamom pods</li>
    <li>1 cinnamon stick</li>
    <li>4-5 cloves</li>
    <li>1 tsp cumin seeds</li>
    <li>1 tsp ginger-garlic paste</li>
    <li>3 tbsp ghee or oil</li>
    <li>1 tsp salt</li>
    <li>Fresh mint leaves for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Heat ghee in a heavy-bottomed pot and add whole spices.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add cumin seeds and let them splutter.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add sliced onions and fry until golden brown.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Add ginger-garlic paste and cook for 1 minute.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Add drained rice and peas. Gently mix for 2 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">06</div>
      <div class="instruction-text">Add hot water and salt. Bring to a boil, then reduce heat to low.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">07</div>
      <div class="instruction-text">Cover and cook for 18-20 minutes. Let it rest for 5 minutes before serving.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">340</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">8g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">9g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">4g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">4g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">58g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },

  "lemonRice": {
    RECIPE_NAME: "Lemon Rice",
    RECIPE_NAME_PART1: "Lemon",
    RECIPE_NAME_PART2: "",
    RECIPE_NAME_PART3: "Rice",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/483790424/photo/south-indian-lemon-rice.jpg?s=612x612&w=0&k=20&c=ZucsIrf_JvTC42aIqOdUZqFie1TUf2a1UU2GxO8fBO4=",
    CATEGORY: "Main Course",
    SERVINGS: "4",
    PREP_TIME: "10",
    COOK_TIME: "20",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A tangy and flavorful South Indian rice dish tempered with mustard seeds, curry leaves, and fresh lemon juice.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegetarian</a>
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">South Indian</a>
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">Quick</a>
  `,
    INGREDIENTS_LIST: `
    <li>3 cups cooked basmati rice, cooled</li>
    <li>3 tbsp fresh lemon juice</li>
    <li>1 tsp mustard seeds</li>
    <li>1 tsp cumin seeds</li>
    <li>2 dried red chilies</li>
    <li>10-12 curry leaves</li>
    <li>2 green chilies, slit</li>
    <li>1 tsp ginger, minced</li>
    <li>1/4 cup peanuts</li>
    <li>1/2 tsp turmeric powder</li>
    <li>3 tbsp coconut oil</li>
    <li>Salt to taste</li>
    <li>Fresh coriander for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Heat coconut oil in a large pan over medium heat.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add mustard seeds and cumin seeds. Let them splutter.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add dried red chilies, curry leaves, and green chilies.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Add ginger and peanuts. Fry until peanuts are golden.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Add turmeric powder and immediately add the cooked rice.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">06</div>
      <div class="instruction-text">Mix gently and add lemon juice and salt.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">07</div>
      <div class="instruction-text">Toss well, garnish with coriander and serve warm or at room temperature.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">280</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">6g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">2g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">42g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },

  "sproutedMoongSalad": {
    RECIPE_NAME: "Sprouted Moong Salad",
    RECIPE_NAME_PART1: "Sprouted",
    RECIPE_NAME_PART2: "Moong",
    RECIPE_NAME_PART3: "Salad",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1127733398/photo/sprouted-lentil-salad.jpg?s=612x612&w=0&k=20&c=wsUlFsYVMaYLkBQbSc1K1l8KloZ8KEVr4v6lAnmn9rM=",
    CATEGORY: "Salads",
    SERVINGS: "4",
    PREP_TIME: "15",
    COOK_TIME: "0",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A nutritious and refreshing salad made with sprouted mung beans, fresh vegetables, and tangy dressing.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Raw</a>
    <a href="#" class="tag">High-Protein</a>
    <a href="#" class="tag">Healthy</a>
    <a href="#" class="tag">No-Cook</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 cups sprouted moong beans</li>
    <li>1 cucumber, diced</li>
    <li>2 tomatoes, diced</li>
    <li>1 red onion, finely chopped</li>
    <li>1 carrot, grated</li>
    <li>1 green bell pepper, diced</li>
    <li>2 green chilies, minced</li>
    <li>1 inch ginger, grated</li>
    <li>3 tbsp lemon juice</li>
    <li>1 tsp chaat masala</li>
    <li>1/2 tsp black salt</li>
    <li>Salt to taste</li>
    <li>Fresh mint and coriander, chopped</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Rinse the sprouted moong beans and drain well.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">In a large bowl, combine sprouts with all chopped vegetables.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add minced green chilies and grated ginger.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">In a small bowl, whisk together lemon juice, chaat masala, and salts.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Pour the dressing over the salad and toss well.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">06</div>
      <div class="instruction-text">Add fresh mint and coriander leaves.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">07</div>
      <div class="instruction-text">Let it sit for 10 minutes before serving to allow flavors to meld.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">180</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">1g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">8g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">6g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">32g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },
  "papayaMintSalad": {
    RECIPE_NAME: "Papaya Mint Salad",
    RECIPE_NAME_PART1: "Papaya",
    RECIPE_NAME_PART2: "Mint",
    RECIPE_NAME_PART3: "Salad",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/527439207/photo/som-tam-thai-thai-green-papaya-salad-with-peanuts.jpg?s=612x612&w=0&k=20&c=RP__yChax58PpBdAv9314n01lDuISXb8qroUK6yT44M=",
    CATEGORY: "Salads",
    SERVINGS: "4",
    PREP_TIME: "20",
    COOK_TIME: "0",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A refreshing tropical salad combining sweet papaya with fresh mint leaves, lime juice, and aromatic spices for a burst of flavor.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Raw</a>
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">Tropical</a>
    <a href="#" class="tag">No-Cook</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 large raw papaya, julienned</li>
    <li>1/2 cup fresh mint leaves</li>
    <li>2 tbsp lime juice</li>
    <li>1 tbsp palm sugar or brown sugar</li>
    <li>2 green chilies, minced</li>
    <li>2 cloves garlic, minced</li>
    <li>2 tbsp roasted peanuts, crushed</li>
    <li>1 tbsp fish sauce (or soy sauce for vegan)</li>
    <li>1 tomato, diced</li>
    <li>1 cucumber, julienned</li>
    <li>Salt to taste</li>
    <li>Red chili flakes for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Peel and julienne the raw papaya into thin strips.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">In a mortar and pestle, pound garlic and chilies into a paste.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add palm sugar and continue pounding until dissolved.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Mix in lime juice and fish sauce to create the dressing.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Add papaya, tomato, and cucumber to the dressing.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">06</div>
      <div class="instruction-text">Toss gently to coat all ingredients evenly.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">07</div>
      <div class="instruction-text">Garnish with mint leaves, crushed peanuts, and chili flakes before serving.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">95</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">2g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">4g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">22g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },

  "beetrootCarrotJuice": {
    RECIPE_NAME: "Beetroot Carrot Juice",
    RECIPE_NAME_PART1: "Beetroot",
    RECIPE_NAME_PART2: "Carrot",
    RECIPE_NAME_PART3: "Juice",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1293663552/photo/carrot-and-beetroot-juice.jpg?s=612x612&w=0&k=20&c=WpObGnvlQ4Fm46kvfBjgQQ-Wxunw7udhkbNG6oRn3bE=",
    CATEGORY: "Beverages",
    SERVINGS: "2",
    PREP_TIME: "10",
    COOK_TIME: "0",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A vibrant and nutritious juice blend packed with antioxidants, vitamins, and minerals from fresh beetroot and carrots.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Raw</a>
    <a href="#" class="tag">Detox</a>
    <a href="#" class="tag">Anti-Inflammatory</a>
    <a href="#" class="tag">Energy Boost</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 medium beetroots, peeled and chopped</li>
    <li>4 large carrots, peeled and chopped</li>
    <li>1 inch fresh ginger</li>
    <li>1 apple, cored (optional for sweetness)</li>
    <li>1 tbsp lemon juice</li>
    <li>1 cup water (if needed)</li>
    <li>1 tsp honey (optional)</li>
    <li>Pinch of black salt</li>
    <li>Fresh mint leaves for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Wash, peel, and chop beetroots and carrots into small pieces.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add vegetables to a high-speed juicer or blender.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add ginger and apple (if using) to the blender.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Blend until smooth, adding water if needed for consistency.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Strain the juice through a fine mesh strainer if desired.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">06</div>
      <div class="instruction-text">Add lemon juice, honey, and black salt. Mix well.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">07</div>
      <div class="instruction-text">Serve immediately over ice, garnished with mint leaves.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">120</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">0g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">6g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">24g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">28g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },

  "cabbageStirFry": {
    RECIPE_NAME: "Cabbage Stir Fry",
    RECIPE_NAME_PART1: "Cabbage",
    RECIPE_NAME_PART2: "Stir",
    RECIPE_NAME_PART3: "Fry",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1465129924/photo/stir-fried-vegetables-in-a-wok-pan.jpg?s=612x612&w=0&k=20&c=Y8sAQ0V1wusbJQIPwJ0iEA-IzWKaL01FlVvPs1KISIk=",
    CATEGORY: "Main Dishes",
    SERVINGS: "4",
    PREP_TIME: "10",
    COOK_TIME: "15",
    DIFFICULTY: "Beginner Level",
    RECIPE_DESCRIPTION: "A quick and healthy stir-fry featuring tender cabbage cooked with aromatic spices and fresh herbs for a satisfying vegetarian meal.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Quick</a>
    <a href="#" class="tag">Low-Carb</a>
    <a href="#" class="tag">Indian</a>
    <a href="#" class="tag">One-Pan</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 medium cabbage, shredded</li>
    <li>2 tbsp coconut oil</li>
    <li>1 tsp mustard seeds</li>
    <li>1 tsp cumin seeds</li>
    <li>2 green chilies, slit</li>
    <li>1 inch ginger, minced</li>
    <li>10-12 curry leaves</li>
    <li>1 onion, sliced</li>
    <li>1/2 tsp turmeric powder</li>
    <li>1 tsp coriander powder</li>
    <li>Salt to taste</li>
    <li>2 tbsp fresh coconut, grated</li>
    <li>Fresh coriander leaves for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Heat coconut oil in a large pan or wok over medium heat.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Add mustard seeds and cumin seeds. Let them splutter.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add curry leaves, green chilies, and minced ginger.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Add sliced onion and sauté until translucent.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Add turmeric and coriander powder, cook for 30 seconds.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">06</div>
      <div class="instruction-text">Add shredded cabbage and salt, mix well.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">07</div>
      <div class="instruction-text">Cover and cook for 8-10 minutes until cabbage is tender.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">08</div>
      <div class="instruction-text">Garnish with grated coconut and fresh coriander before serving.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">110</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">7g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">5g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">8g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">12g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },

  "ragiDosa": {
    RECIPE_NAME: "Ragi Dosa",
    RECIPE_NAME_PART1: "Ragi",
    RECIPE_NAME_PART2: "Dosa",
    RECIPE_NAME_PART3: "",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1319648667/photo/crispy-pancake-made-of-fermented-whole-grain-finger-millet-batter-served-with-cottage-cheese.jpg?s=612x612&w=0&k=20&c=s_4w9jCAI6vLcQAE58bknLmbOnbxt4_1UJv9wduB3kM=",
    CATEGORY: "Breakfast",
    SERVINGS: "6",
    PREP_TIME: "30",
    COOK_TIME: "20",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Nutritious and gluten-free dosas made with finger millet (ragi) flour, packed with calcium and fiber for a healthy breakfast option.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">High-Fiber</a>
    <a href="#" class="tag">South Indian</a>
    <a href="#" class="tag">Breakfast</a>
  `,
    INGREDIENTS_LIST: `
    <li>1 cup ragi (finger millet) flour</li>
    <li>1/4 cup rice flour</li>
    <li>1/4 cup urad dal flour</li>
    <li>1 tsp fenugreek seeds</li>
    <li>1 tsp salt</li>
    <li>1 tbsp yogurt (optional)</li>
    <li>2-3 cups water</li>
    <li>1 tbsp oil for cooking</li>
    <li>1/2 tsp cumin seeds</li>
    <li>2 green chilies, minced</li>
    <li>1 inch ginger, grated</li>
    <li>Fresh coriander leaves, chopped</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Soak fenugreek seeds in water for 30 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Mix ragi flour, rice flour, and urad dal flour in a bowl.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Add soaked fenugreek seeds, salt, and yogurt to the flour mixture.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Gradually add water to form a smooth batter. Let it ferment for 6-8 hours.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Add cumin seeds, chilies, ginger, and coriander to the fermented batter.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">06</div>
      <div class="instruction-text">Heat a non-stick pan and pour a ladle of batter, spreading it thin.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">07</div>
      <div class="instruction-text">Drizzle oil around edges and cook until golden brown on both sides.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">08</div>
      <div class="instruction-text">Serve hot with coconut chutney and sambar.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">150</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">6g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">5g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">2g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">28g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },

  "tilChikki": {
    RECIPE_NAME: "Til Chikki",
    RECIPE_NAME_PART1: "Til",
    RECIPE_NAME_PART2: "Chikki",
    RECIPE_NAME_PART3: "",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1798025084/photo/gajak-made-with-sesame-seeds-jaggery.jpg?s=612x612&w=0&k=20&c=Lqq3GwTkeqV30qs3tFQWFhIBRfDL_xUP4zLCg8VydQk=",
    CATEGORY: "Desserts",
    SERVINGS: "8",
    PREP_TIME: "10",
    COOK_TIME: "15",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "Traditional Indian sesame seed brittle made with jaggery, perfect as a healthy winter treat packed with calcium and healthy fats.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">Winter Special</a>
    <a href="#" class="tag">Traditional</a>
    <a href="#" class="tag">High-Calcium</a>
  `,
    INGREDIENTS_LIST: `
    <li>2 cups white sesame seeds</li>
    <li>1 cup jaggery, chopped</li>
    <li>2 tbsp ghee</li>
    <li>1/2 tsp cardamom powder</li>
    <li>1/4 cup almonds, chopped (optional)</li>
    <li>1/4 cup cashews, chopped (optional)</li>
    <li>Pinch of salt</li>
    <li>1/2 tsp vanilla extract (optional)</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Dry roast sesame seeds in a pan until golden and fragrant. Set aside.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Grease a plate or tray with ghee and keep ready.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">In a heavy-bottomed pan, melt jaggery on medium heat.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Cook until jaggery reaches soft ball stage (test by dropping in cold water).</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Add roasted sesame seeds, nuts, cardamom powder, and salt.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">06</div>
      <div class="instruction-text">Mix quickly and pour onto the greased plate.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">07</div>
      <div class="instruction-text">Spread evenly with a rolling pin while still warm.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">08</div>
      <div class="instruction-text">Let it cool completely, then cut into squares or rectangles.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">220</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">5g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">3g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">18g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">22g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  },

  "tofuVeggieBowl": {
    RECIPE_NAME: "Tofu Veggie Bowl",
    RECIPE_NAME_PART1: "Tofu",
    RECIPE_NAME_PART2: "Veggie",
    RECIPE_NAME_PART3: "Bowl",
    HERO_IMAGE_URL: "https://media.istockphoto.com/id/1147252758/photo/healthy-vegetarian-food-background-vegetables-pesto-and-lentil-curry-with-tofu.jpg?s=612x612&w=0&k=20&c=tfLYLtT-f_I-tnmOdb_6WHRhIQa8jXy7SkFakC-P-LU=",
    CATEGORY: "Main Dishes",
    SERVINGS: "2",
    PREP_TIME: "20",
    COOK_TIME: "25",
    DIFFICULTY: "Intermediate Level",
    RECIPE_DESCRIPTION: "A colorful and nutritious Buddha bowl featuring crispy marinated tofu, fresh vegetables, and quinoa with a tahini dressing.",
    RECIPE_TAGS: `
    <a href="#" class="tag">Vegan</a>
    <a href="#" class="tag">High-Protein</a>
    <a href="#" class="tag">Gluten-Free</a>
    <a href="#" class="tag">Meal Prep</a>
    <a href="#" class="tag">Healthy</a>
  `,
    INGREDIENTS_LIST: `
    <li>200g firm tofu, cubed</li>
    <li>1 cup quinoa, cooked</li>
    <li>1 cup broccoli florets</li>
    <li>1 bell pepper, sliced</li>
    <li>1 carrot, julienned</li>
    <li>1 cucumber, diced</li>
    <li>1/2 red cabbage, shredded</li>
    <li>2 tbsp soy sauce</li>
    <li>1 tbsp sesame oil</li>
    <li>1 tbsp maple syrup</li>
    <li>2 tbsp tahini</li>
    <li>1 tbsp lemon juice</li>
    <li>1 clove garlic, minced</li>
    <li>1 tbsp sesame seeds</li>
    <li>Fresh herbs for garnish</li>
  `,
    INSTRUCTIONS_LIST: `
    <li class="instruction-item">
      <div class="instruction-number">01</div>
      <div class="instruction-text">Press tofu to remove excess water, then cut into cubes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">02</div>
      <div class="instruction-text">Marinate tofu in soy sauce, sesame oil, and maple syrup for 15 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">03</div>
      <div class="instruction-text">Heat a pan and cook marinated tofu until golden on all sides.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">04</div>
      <div class="instruction-text">Steam broccoli until tender-crisp, about 5 minutes.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">05</div>
      <div class="instruction-text">Prepare tahini dressing by mixing tahini, lemon juice, and minced garlic.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">06</div>
      <div class="instruction-text">Cook quinoa according to package instructions and let cool.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">07</div>
      <div class="instruction-text">Arrange quinoa, tofu, and all vegetables in bowls.</div>
    </li>
    <li class="instruction-item">
      <div class="instruction-number">08</div>
      <div class="instruction-text">Drizzle with tahini dressing and sprinkle with sesame seeds.</div>
    </li>
  `,
    NUTRITION_INFO: `
    <div class="nutrition-item"><span class="nutrition-label">Calories</span><span class="nutrition-value">420</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Protein</span><span class="nutrition-value">18g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fat</span><span class="nutrition-value">16g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Fiber</span><span class="nutrition-value">12g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Sugar</span><span class="nutrition-value">14g</span></div>
    <div class="nutrition-item"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">52g</span></div>
  `,
    CHEF_NAME: "Chef Rhea Verma",
    CHEF_TITLE: "Healthy Food Expert",
    CHEF_AVATAR_URL: "https://media.istockphoto.com/id/1204172785/photo/indian-asian-woman-chef-wearing-apron-and-holding-pan-and-spatula-while-standing-isolated.jpg?s=612x612&w=0&k=20&c=v-16e1Ks930CXGuo6h7E8pPn99e8nPAnbqO2r9E98Bo="
  }
};

// Helper function to get recipe by key
function getRecipeByKey(recipeKey) {
  return recipeDatabase[recipeKey] || null;
}

// Helper function to get all recipe keys
function getAllRecipeKeys() {
  return Object.keys(recipeDatabase);
}

// Helper function to search recipes by name (case-insensitive)
function searchRecipeByName(recipeName) {
  const searchTerm = recipeName.toLowerCase().replace(/\s+/g, '-');
  return getRecipeByKey(searchTerm);
}
