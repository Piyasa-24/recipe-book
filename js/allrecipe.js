const allRecipes = [

    {
        name: "Butter Chicken",
        searchname: "butterChicken",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Paneer Tikka",
        searchname: "paneerTikka",
        image: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili_2829-19992.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
    },
    {
        name: "Chole Bhature",
        searchname: "choleBhature",
        image: "https://media.istockphoto.com/id/979914742/photo/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-terracotta-crockery-over-white.jpg?s=612x612&w=0&k=20&c=OLAw-ZleN1UVaa468OlPSAc6dkz2sjehxWevbvZQNew="
    },
    {
        name: "Masala Dosa",
        searchname: "masalaDosa",
        image: "https://media.istockphoto.com/id/1156887022/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=612x612&w=0&k=20&c=KPK_ML3oSM-rHqFqTPtOrriOVeNhZZX3OSfkuc5PRug="
    },
    {
        name: "Biryani",
        searchname: "chickenBiryani",
        image: "https://img.freepik.com/free-photo/high-angle-pakistan-meal-composition_23-2148821517.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740"
    },


    {
        name: "Cheeseburger",
        searchname: "cheeseburger",
        image: "https://media.istockphoto.com/id/807031028/photo/fresh-tasty-burger.jpg?s=612x612&w=0&k=20&c=SkzpcLvAmiAi2N9ipGlNFqsCuv_N0EVyb_Zrs0TpDCw="
    },
    {
        name: "Hot Dog",
        searchname: "hotdog",
        image: "https://media.istockphoto.com/id/1163021327/photo/homemade-detroit-style-chili-dog.jpg?s=612x612&w=0&k=20&c=349RJlcOwJdKh22VjHFQ3gLmbToXrRx07XA6FHMov_I="
    },
    {
        name: "Mac and Cheese",
        searchname: "macandcheese",
        image: "https://media.istockphoto.com/id/1183224877/photo/homemade-chili-mac-and-cheese.jpg?s=612x612&w=0&k=20&c=TjC7T-USyHW-vfSqJhTKqKjlGZimmewOXi_zoq97sxY="
    },
    {
        name: "Fried Chicken",
        searchname: "friedchicken",
        image: "https://media.istockphoto.com/id/477596753/photo/homemade-southern-fried-chicken.jpg?s=612x612&w=0&k=20&c=8b_5KjKmmO34ChsqVZN4-1YlDXyVJNlKh3w6qtVjR88="
    },
    {
        name: "Apple Pie",
        searchname: "applepie",
        image: "https://media.istockphoto.com/id/174955299/photo/apple-pie.jpg?s=612x612&w=0&k=20&c=B9oQNj8rsgFswcumBupulaFkWE5vClc80O-LI-xMqmY="
    },
    {
        name: "Tacos",
        searchname: "tacos",
        image: "https://plus.unsplash.com/premium_photo-1661776649804-6bfa4fc14d09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGFjb3N8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Guacamole",
        searchname: "guacamole",
        image: "https://images.unsplash.com/photo-1620019989549-bbb873b6612d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3VhY2Ftb2xlfGVufDB8fDB8fHww"
    },
    {
        name: "Churros",
        searchname: "churros",
        image: "https://media.istockphoto.com/id/1193567592/photo/traditional-churros-sticks-with-cinnamon.jpg?s=612x612&w=0&k=20&c=7Ey2tjDQBSbF8Uhl142XiWtXsDbe9tfu3axICLFe1yA="
    },
    {
        name: "Enchiladas",
        searchname: "enchiladas",
        image: "https://media.istockphoto.com/id/502641852/photo/meat-cannelloni-sauce-bechamel.jpg?s=612x612&w=0&k=20&c=2zAFqYmv1sunZNKF3lrAPMkDKM3tBZxI8CPoG5XIJeg="
    },
    {
        name: "Quesadillas",
        searchname: "quesadillas",
        image: "https://media.istockphoto.com/id/1170581169/photo/cheesy-beef-taco-quesadilla.jpg?s=612x612&w=0&k=20&c=44QxjPG0CPOcSLDmw4ar-1RGDoBFXjxOwqtWr00hvHc="
    },
    {
        name: "Spaghetti",
        searchname: "spaghetti",
        image: "https://media.istockphoto.com/id/1142391463/photo/pasta-carbonara.jpg?s=612x612&w=0&k=20&c=7gO9mReNFzY10qsmu_X4_LZ45-UcVPtzpHF-DOFp6Cc="
    },
    {
        name: "Margherita Pizza",
        searchname: "margheritaPizza",
        image: "https://media.istockphoto.com/id/1269122740/photo/pizza-with-very-much-cheese-melting.jpg?s=612x612&w=0&k=20&c=61EQYbnkiUaH64gdiCtnExqIn4f84i6GhBJtQ9NGdPk="
    },
    {
        name: "Lasagna",
        searchname: "lasagna",
        image: "https://media.istockphoto.com/id/1347984667/photo/classic-lasagne-piece-on-a-plate.jpg?s=612x612&w=0&k=20&c=CjZhpGNpsH3JBpj2_S_zeeF0R349v-hRjvm21MKx_0M="
    },
    {
        name: "Risotto",
        searchname: "risotto",
        image: "https://media.istockphoto.com/id/530813742/photo/seafood-risotto-with-fresh-parsley-and-focaccia-bread.jpg?s=612x612&w=0&k=20&c=lmS1WbDZqDDihEEO_iV3K1_KSH1MeCF4C_OAgN0dsic="
    },
    {
        name: "Tiramisu",
        searchname: "tiramisu",
        image: "https://media.istockphoto.com/id/893123294/photo/homemade-traditional-italian-dessert-tiramisu.jpg?s=612x612&w=0&k=20&c=zJENt-pSQbJPsvk4SeBBFsdKrdfEsR_6PvsQ_uwrpGY="
    },
    {
        name: "Sushi",
        searchname: "sushi",
        image: "https://media.istockphoto.com/id/1176929581/photo/chopstick-holding-sushi-rolls-set-with-salmon-and-cream-cheese-and-cuccumber-on-black-slate.jpg?s=612x612&w=0&k=20&c=ctmjAzHzxnVSzvBruJt__oucuqn6g-V1Jadv-PRwLj8="
    },
    {
        name: "Ramen",
        searchname: "ramen",
        image: "https://media.istockphoto.com/id/1406672650/photo/japanese-tonkotsu-ramen.jpg?s=612x612&w=0&k=20&c=XfwavYs_chHo-S-M7IWoK7IxEXzYxd3dFyihnvC_zkI="
    },
    {
        name: "Tempura",
        searchname: "tempura",
        image: "https://media.istockphoto.com/id/962003420/photo/tempura-shrimps-with-soy-sauce.jpg?s=612x612&w=0&k=20&c=Z2WZ1LAGxxOU7pgseg6KNSILu_fWp6gX1zYGPuxgbmw="
    },
    {
        name: "Tonkatsu",
        searchname: "tonkatsu",
        image: "https://media.istockphoto.com/id/665553446/photo/deep-fried-pork-cutlet-with-salad-and-lemon-japanese-food.jpg?s=612x612&w=0&k=20&c=n4RVIRo6Wg3PAgWhCf-som6jeAW22XIDKfUvvHBCrZ0="
    },
    {
        name: "Onigiri",
        searchname: "onigiri",
        image: "https://media.istockphoto.com/id/518435874/photo/onigiri.jpg?s=612x612&w=0&k=20&c=EAAJjUg2xdax7GC20Y9IxHExPyRgTzkd0g3WCQoHj8Q="
    },
    {
        name: "Grilled Tandoori Chicken",
        searchname: "grilledTandooriChicken",
        image: "https://media.istockphoto.com/id/1363311536/photo/tandoori-chicken.jpg?s=612x612&w=0&k=20&c=h8sNMzT9SsJzFL8fxkw2icHEneneGsKXdyPckOvEzsk=",
    },
    {
        name: "Moong Dal Salad",
        searchname: "moongDalSalad",
        image: "https://media.istockphoto.com/id/469579799/photo/moong-dal-gajjar-chaat-a-healthy-vegetarian-recipe.jpg?s=612x612&w=0&k=20&c=iiDs8QKql9fqyQOxsjVzr74ftty3lYYP0siSg5WNViA=",
    },
    {
        name: "Quinoa & Black Bean Bowl",
        searchname: "quinoaBlackBeanBowl",
        image: "https://media.istockphoto.com/id/1185128902/photo/mexican-black-bean-corn-quinoa-salad-in-clay-bowl-top-view-copy-space.jpg?s=612x612&w=0&k=20&c=gCbnSZrNLvNIH6LHJkR4_7t64egzb3RiFaCJBatIXgA=",
    },
    {
        name: "Turkey Lettuce Wraps",
        searchname: "turkeyLettuceWraps",
        image: "https://media.istockphoto.com/id/1620533377/photo/chicken-wrap.jpg?s=612x612&w=0&k=20&c=gXabeG-LtxYJ4HpbNA5LDHwwh7cyGS1zwDygneYuYvQ=",
    },
    {
        name: "Grilled Chicken Fajitas",
        searchname: "grilledChickenFajitas",
        image: "https://media.istockphoto.com/id/1338889826/photo/chicken-fajitas-with-bell-pepper-and-onion-in-a-pan-served-with-salsa-asada-sour-cream.jpg?s=612x612&w=0&k=20&c=X1xshp_Kovtw_mAL6iuRizTn_54tC0NRnmVfJTTNyAc=",
    },

    {
        name: "Sweet Potato Chaat",
        searchname: "sweetPotatoChaat",
        image: "https://media.istockphoto.com/id/1198449763/photo/aloo-chaat-or-alu-chat-is-a-popular-street-food-originating-from-the-indian-subcontinent.jpg?s=612x612&w=0&k=20&c=HvilTEbwB3hFEWqdhq6SF3I64BDZW1SGJPkmJmtcWBw=",
    },
    {
        name: "Vegetable Pulao",
        searchname: "vegetablePulao",
        image: "https://media.istockphoto.com/id/980079724/photo/indian-vegetable-pulav-or-biryani-made-using-basmati-rice-served-in-a-ceramic-bowl-selective.jpg?s=612x612&w=0&k=20&c=I7JI0xFm3yPB3MLyGg91ufGJEPJamSr8aBoloKxj8Ps=",
    },
    {
        name: "Masala Dosa",
        searchname: "masalaDosa",
        image: "https://media.istockphoto.com/id/1156896023/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=612x612&w=0&k=20&c=ddWTTzN52tHM_jqSRj35G9WYoas2Da3HLwzOxaQ0WFY=",
    },
    {
        name: "Rajma Chawal",
        searchname: "rajmaChawal",
        image: "https://media.istockphoto.com/id/1497379904/photo/rajma-masala-is-a-delicious-gravy-made-by-cooking-red-beans-with-onion-tomatoes-and-basic.jpg?s=612x612&w=0&k=20&c=jAplaHkihtV5mhD6Y2g61z5ds7ONFQBoZAv8QdG67-U=",
    },
    {
        name: "Chole Bhature",
        searchname: "choleBhature",
        image: "https://media.istockphoto.com/id/979914742/photo/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-terracotta-crockery-over-white.jpg?s=612x612&w=0&k=20&c=OLAw-ZleN1UVaa468OlPSAc6dkz2sjehxWevbvZQNew=",
    },

    {
        name: "Oats and Banana Smoothie",
        searchname: "oatsBananaSmoothie",
        image: "https://media.istockphoto.com/id/513738182/photo/banana-smoothie-with-peanut-butter-and-cinnamon.jpg?s=612x612&w=0&k=20&c=jTdZ7rQtD1ZSqcdv38veLePBuLYKB9bVEalOqpF4K_Q=",
    },
    {
        name: "Chia Pudding with Berries",
        searchname: "chiaPuddingBerries",
        image: "https://media.istockphoto.com/id/1152893222/photo/layered-chocolate-and-peanut-butter-chia-seed-pudding-in-jar-garnished-with-raspberry.jpg?s=612x612&w=0&k=20&c=qPDddoDDLs-l7R2SFPlHyA-dPH6IcO1kOeEZbjQSLyQ=",
    },
    {
        name: "Mixed Bean Salad",
        searchname: "mixedBeanSalad",
        image: "https://media.istockphoto.com/id/1227598301/photo/three-beans-corn-red-pepper-salad.jpg?s=612x612&w=0&k=20&c=HKW8m7xMDdmK0x58PD1kUBTy48H4iYHsQJrX2Jmo1fY=",
    },
    {
        name: "Whole Wheat Vegetable Wrap",
        searchname: "wholeWheatVegetableWrap",
        image: "https://media.istockphoto.com/id/607609670/photo/tortilla-wraps-with-different-fillings-on-dark-grey-concrete-background.jpg?s=612x612&w=0&k=20&c=yKshYSUZUGFx1SqD_dC4gCwk4N_dDYN1XhyEZFFPEuQ=",
    },
    {
        name: "Broccoli Stir Fry",
        searchname: "broccoliStirFry",
        image: "https://media.istockphoto.com/id/905223034/photo/stir-fried-vegetables.jpg?s=612x612&w=0&k=20&c=g-EffbNj43sDglcQkA1-yiBPZdBbsr_QS3Cb_pf6Qpk=",
    },

    {
        name: "Carrot and Orange Juice",
        searchname: "carrotOrangeJuice",
        image: "https://media.istockphoto.com/id/951667600/photo/carrot-orange-juice.jpg?s=612x612&w=0&k=20&c=ak3Rh-fS9gz_DxDmnBbG82Lh3rfzHKB43pdO9TiG4vU=",
    },
    {
        name: "Spinach Paneer Curry",
        searchname: "spinachPaneerCurry",
        image: "https://media.istockphoto.com/id/1300435841/photo/palak-paneer-or-spinach-in-cottage-cheese-curry-on-a-background-traditional-indian-food.jpg?s=612x612&w=0&k=20&c=Yc54s5XWA0MdIarG5M-9gIBZY4zNZMp72Uupp0GgF1Q=",
    },
    {
        name: "Mixed Vegetable Soup",
        searchname: "mixedVegetableSoup",
        image: "https://media.istockphoto.com/id/1092632832/photo/vegetable-soup.jpg?s=612x612&w=0&k=20&c=8mAOTrP8cGWPOUctqp1Lmr4N0KLEq0TL0YxAWr-keBM=",
    },
    {
        name: "Kale and Apple Salad",
        searchname: "kaleAppleSalad",
        image: "https://media.istockphoto.com/id/1318283140/photo/kale-salad-with-apple-beetroot-walnut-and-raisins-in-white-plate-healthy-food.jpg?s=612x612&w=0&k=20&c=h7AEmilXn3N4qdU6GC_H3_FY1W_yljALKtSbulHISyg=",
    },
    {
        name: "Bell Pepper Stir Fry",
        searchname: "bellPepperStirFry",
        image: "https://media.istockphoto.com/id/588595864/photo/steaming-mixed-vegetables-in-the-wok-asian-style-cooking.jpg?s=612x612&w=0&k=20&c=NZWe4QUwFmEqPAwHa3s0u3Zak6JjlRm36gMgmXx8roA=",
    },

    {
        name: "Almond Date Smoothie",
        searchname: "almondDateSmoothie",
        image: "https://media.istockphoto.com/id/1420770721/photo/coffee-date-smoothie-creamy-milkshake-in-glass-healthy-breakfast-chunky-monkey-smoothie.jpg?s=612x612&w=0&k=20&c=-3cbElBaj3lzJZAPUNxdzvaOyv-W95FeBfd4HdzOir8=",
    },
    {
        name: "Spinach and Mushroom Stir Fry",
        searchname: "spinachMushroomStirFry",
        image: "https://media.istockphoto.com/id/1312187690/photo/vegan-saute-with-mushrooms-aubergines-and-spinach.jpg?s=612x612&w=0&k=20&c=3sNvdS1V3ccEbX37HKMtcfHZjr4NFGuOz6lFPgjrgDA=",
    },
    {
        name: "Dark Chocolate Almond Bites",
        searchname: "darkChocolateAlmondBites",
        image: "https://media.istockphoto.com/id/612408302/photo/vegan-sweet-balls-food-on-table.jpg?s=612x612&w=0&k=20&c=4A1bpM0CfvrzdHyGPao6nAtodbroKC7dp3n3o-3b_Zs=",
    },
    {
        name: "Pumpkin Seed Granola",
        searchname: "pumpkinSeedGranola",
        image: "https://media.istockphoto.com/id/1219859196/photo/young-woman-with-muesli-bowl-girl-eating-breakfast-cereals-with-nuts-pumpkin-seeds-oats-and.jpg?s=612x612&w=0&k=20&c=GQujQUOvA46Gt0jVRIdV-bfzuDZBKV5KFXBlls3bOKA=",
    },
    {
        name: "Seaweed Rice Bowl",
        searchname: "seaweedRiceBowl",
        image: "https://media.istockphoto.com/id/1301367123/photo/shuga-konbu-no-tsukudani.jpg?s=612x612&w=0&k=20&c=l9P-oQbNyu5--M0QINbG2rcYynP75ZGyTjqSIEHsOCU=",
    },
    {
        name: "Kebab with potatoes",
        searchname: "kebab",
        image: "https://media.istockphoto.com/id/1413123998/photo/galouti-kabab-with-raita-onion-rings-and-lime-served-in-a-dish-isolated-on-dark-background.jpg?s=612x612&w=0&k=20&c=2VQ1WsZX9av1sSpGe4QuEv9vYtuPRie5F2BOG1HYi9g=",
    },
    {
        name: "Mighty Orange Cheescake",
        searchname: "orange_cheesecake",
        image: "https://media.istockphoto.com/id/1367538596/photo/slice-of-citrus-cheesecake-with-cream.jpg?s=612x612&w=0&k=20&c=4QCE6lIEDawQJIBJV6yP3lNZcl0mRlqtaMqQP_ypUss=",
    },
    { name: "Aloo Paratha", searchname: "alooParatha", image: "https://media.istockphoto.com/id/1413566328/photo/indian-food-aloo-paratha-or-indian-potato-stuffed-flatbread-served-with-butter-pickle-and.jpg?s=612x612&w=0&k=20&c=bh5KxrjxxjuWcbLKoF-KIA4nkVEQmZ1AEjJKvXlIiro=" },
    { name: "Rasgulla", searchname: "rasgulla", image: "https://media.istockphoto.com/id/495984318/photo/bangladesh-or-indias-favourite-sweet-rasgulla.jpg?s=612x612&w=0&k=20&c=stpruOe6VCiLn-77Sqm5UjqhOZY3F4tVgZLpuyg8GH4=" },
    { name: "BBQ Ribs", searchname: "bbqRibs", image: "https://media.istockphoto.com/id/938464060/photo/pork-ribs-over-flaming-grill-grid-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=Vu8Jm-EGZMp_rrHEPNd61YY4U80AHhAwiKV7fRlEh_E=" },
    { name: "Clam Chowder", searchname: "clamChowder", image: "https://media.istockphoto.com/id/2200396909/photo/clam-chowder-traditional-american-seafood-cream-soup-top-view.jpg?s=612x612&w=0&k=20&c=xhnk6XvZhq_9uTao9s8NzuyHZuUGfG9bkLkLTN8TzAc=" },
    { name: "Tamales", searchname: "tamales", image: "https://media.istockphoto.com/id/1404479386/photo/food.jpg?s=612x612&w=0&k=20&c=5LPt7QzRKRiw-33NOYoJQ9lIGUEGjZFB4EycjtXi2BM=" },
    { name: "Pozole", searchname: "pozole", image: "https://media.istockphoto.com/id/2161312784/photo/traditional-mexican-red-pozole-with-garnishes-and-coffee.jpg?s=612x612&w=0&k=20&c=LA6l5AYfsS-4dUhOtRC7dMEwgOqAaBcY5Kik6XOpcT8=" },
    { name: "Elote (Mexican Street Corn)", searchname: "elote", image: "https://media.istockphoto.com/id/2197555612/photo/homemade-mexican-corn-elote-esquites-in-cups-side-view.jpg?s=612x612&w=0&k=20&c=pmAxyYLk12vfj5SigIbNWvJnwv36xp7UoxjJ5JebGrA=" },
    { name: "Gnocchi", searchname: "gnocchi", image: "https://media.istockphoto.com/id/1413783273/photo/baked-potato-gnocchi.jpg?s=612x612&w=0&k=20&c=pkGv4e85yJOVHgWi9BjNzQxV-a_5NCazxNDCxwZ5UW0=" },
    { name: "Bruschetta", searchname: "bruschetta", image: "https://media.istockphoto.com/id/1298345474/photo/bruschetta-with-tomato-and-basil.jpg?s=612x612&w=0&k=20&c=LFTC85j7Jbnkk61KXFWb-6iUvLtKV_sdFPhZlYcjFhw=" },
    { name: "Panna Cotta", searchname: "pannaCotta", image: "https://media.istockphoto.com/id/2155823442/photo/strawberry-panna-cotta-made-with-roasted-strawberries-delicious-creamy-dessert-with-berry.jpg?s=612x612&w=0&k=20&c=j1B5PC0yFQgNJQ_UvHmZdSneG7hxSZxMlPDsZzWT_qA=" },
    { name: "Miso Soup", searchname: "misoSoup", image: "https://media.istockphoto.com/id/2207937448/photo/miso-soup-with-mizuna-and-tofu.jpg?s=612x612&w=0&k=20&c=nA0IACt5Sacc1X37YAYLbWTVkrhi19gC2z-Wci9I_1E=" },
    { name: "Okonomiyaki", searchname: "okonomiyaki", image: "https://media.istockphoto.com/id/1727633893/photo/okonomiyaki-traditional-japanese-savoury-pancake-dish-in-restaurant-on-grey-background.jpg?s=612x612&w=0&k=20&c=wj_dxhREZZq9BVdUgbtNfJWJQ68lZHGyT2GmfvkE_mU=" },
    { name: "Yakitori", searchname: "yakitori", image: "https://media.istockphoto.com/id/1872270882/photo/teriyaki-chicken-skewers.jpg?s=612x612&w=0&k=20&c=LOyl528-N5jg3FCPjLyUymM9RQN_-CEJH9KylpvtBmw=" },
    {
        name: "Paneer Bhurji",
        searchname: "paneerBhurji",
        image: "https://media.istockphoto.com/id/1050199832/photo/paneer-bhurji-scrambled-paneer-and-peas.jpg?s=612x612&w=0&k=20&c=ya3ZvF41RyVsJZ8xvuCGdeuqHZkOAUKT5NXnyCABOsY="
    },
    {
        name: "Egg Curry",
        searchname: "eggCurry",
        image: "https://media.istockphoto.com/id/1185235293/photo/boiled-curry-eggs-in-spicy-sauce-close-up-in-a-plate-vertical-top-view.jpg?s=612x612&w=0&k=20&c=JQ4jfL49UnjVkYSoPYRFTvtVjlIWN0HGMktdoEo9AsA="
    },
    {
        name: "Chickpea Stir Fry",
        searchname: "chickpeaStirFry",
        image: "https://media.istockphoto.com/id/861841334/photo/vegan-stir-fry-of-mushrooms-zucchini-and-chickpea.jpg?s=612x612&w=0&k=20&c=PdMbgGwMNcFmbDrA0AgGnmy2xljGMcXWLI84-P64i5c="
    },
    {
        name: "Peas Pulao",
        searchname: "peasPulao",
        image: "https://media.istockphoto.com/id/1146290187/photo/tawa-pulao-is-a-popular-mumbai-street-food-of-rice-with-vegetables-and-spices-close-up.jpg?s=612x612&w=0&k=20&c=QZXdKm3Qp84cNPEaDxE7OKkfAOuexRgVihqH5nTYhaU="
    },
    {
        name: "Lemon Rice",
        searchname: "lemonRice",
        image: "https://media.istockphoto.com/id/1084184586/photo/lemon-rice-is-a-south-indian-turmeric-rice-or-maharashtrian-recipe-called-fodnicha-bhat-made.jpg?s=612x612&w=0&k=20&c=9J6maTTzCMJOGtQOkZjRhfGJTuLOgW3fxEPK9e6o9IA="
    },
    {
        name: "Sprouted Moong Salad",
        searchname: "sproutedMoongSalad",
        image: "https://media.istockphoto.com/id/1223883316/photo/healthy-summer-salad-with-lettuce-tomato-apple-onion-bean-sprout-and-chick-peas.jpg?s=612x612&w=0&k=20&c=CygM4vIZ_RFxarHSZVd3q9uPwrXq7R52eCvIT8MiGGs="
    },
    {
        name: "Bajra Roti with Veggies",
        searchname: "bajraRotiVeggies",
        image: "https://media.istockphoto.com/id/1461330569/photo/rajasthani-and-gujarati-traditional-cuisine-kadhi-or-bajra-roti-on-vintage-wooden-background.jpg?s=612x612&w=0&k=20&c=TiRXfIfdK0UWblz_M_LLhlzyqSIosTR2Xs57kcPy3NU="
    },
    {
        name: "Pumpkin Soup",
        searchname: "pumpkinSoup",
        image: "https://media.istockphoto.com/id/1273345039/photo/fresh-pumpkin-soup-and-parsley-in-a-bowl.jpg?s=612x612&w=0&k=20&c=DTysnBLrwzwpAo9NWBBHAYCkS1CnxhrP_D5c0Z5Q8pc="
    },
    {
        name: "Papaya and Mint Salad",
        searchname: "papayaMintSalad",
        image: "https://media.istockphoto.com/id/2192768518/photo/green-papaya-salad-with-prawn-and-pork-vietnamese-cuisine.jpg?s=612x612&w=0&k=20&c=VKSYEVdcx-zw90J8ngaRy1oSqh5e8GAzHF71L3WaClo="
    },
    {
        name: "Beetroot Carrot Juice",
        searchname: "beetrootCarrotJuice",
        image: "https://media.istockphoto.com/id/466469479/photo/beetroot-and-carrot-juice.jpg?s=612x612&w=0&k=20&c=tEPejh2ah-_AbSNI82GAYCd-KgStGGgFVlQwKCVxAFI="
    },
    {
        name: "Cabbage Stir Fry",
        searchname: "cabbageStirFry",
        image: "https://media.istockphoto.com/id/487790760/photo/fried-noodles-with-chicken-and-vegetables-macro-vertical.jpg?s=612x612&w=0&k=20&c=uocv0RLZ0wgwsCASdUnZlbYMCyvSE5t450fN00GyTJ0="
    },
    {
        name: "Ragi Dosa",
        searchname: "ragiDosa",
        image: "https://media.istockphoto.com/id/1072894042/photo/ragi-roti-made-from-finger-millet-from-india-is-extremely-rich-in-proteins-served-with-pickle.jpg?s=612x612&w=0&k=20&c=RKGmDxnPHS5l1ZjJ-egt9KPF6jCCXAqXGo83Wob5_k8="
    },
    {
        name: "Til Chikki",
        searchname: "tilChikki",
        image: "https://media.istockphoto.com/id/1798017521/photo/gajak-made-with-sesame-seeds-jaggery.jpg?s=612x612&w=0&k=20&c=h5ybXaK8RP2xByW_SzyMvAanyBLeohtTbUMJTtdarKg="
    },
    {
        name: "Tofu Veggie Bowl",
        searchname: "tofuVeggieBowl",
        image: "https://media.istockphoto.com/id/1932834173/photo/tofu-poke-bowl-japanese-food-on-wooden-background.jpg?s=612x612&w=0&k=20&c=wyJ0biAIuvq5CbSBukGSi4ArMdMiEhMDX81Pbt4FrdY="
    }
];



const container = document.getElementById("recipes-container");




allRecipes.forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("card");
    const wrapper = document.createElement("div");
    wrapper.classList.add("card-wrapper");
    container.appendChild(wrapper);

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img" />
      <div class="card-title">${recipe.name}</div>
    `;

    card.addEventListener("click", () => {
        window.location.href = `recipe.html?recipe=${recipe.searchname}`;
    });

    wrapper.appendChild(card);
});

