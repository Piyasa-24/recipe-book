const countryRecipes = {
    indian: [
        { name: "Butter Chicken", searchname: "butterChicken", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop" },
        { name: "Paneer Tikka", searchname: "paneerTikka", image: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili_2829-19992.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740" },
        { name: "Chole Bhature", searchname: "choleBhature", image: "https://media.istockphoto.com/id/979914742/photo/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-terracotta-crockery-over-white.jpg?s=612x612&w=0&k=20&c=OLAw-ZleN1UVaa468OlPSAc6dkz2sjehxWevbvZQNew=" },
        { name: "Masala Dosa", searchname: "masalaDosa", image: "https://media.istockphoto.com/id/1156887022/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=612x612&w=0&k=20&c=KPK_ML3oSM-rHqFqTPtOrriOVeNhZZX3OSfkuc5PRug=" },
        { name: "Rajma Chawal", searchname: "rajmaChawal", image: "https://media.istockphoto.com/id/1497379904/photo/rajma-masala-is-a-delicious-gravy-made-by-cooking-red-beans-with-onion-tomatoes-and-basic.jpg?s=612x612&w=0&k=20&c=jAplaHkihtV5mhD6Y2g61z5ds7ONFQBoZAv8QdG67-U=" },
        { name: "Aloo Paratha", searchname: "alooParatha", image: "https://media.istockphoto.com/id/1413566328/photo/indian-food-aloo-paratha-or-indian-potato-stuffed-flatbread-served-with-butter-pickle-and.jpg?s=612x612&w=0&k=20&c=bh5KxrjxxjuWcbLKoF-KIA4nkVEQmZ1AEjJKvXlIiro=" },
        { name: "Rasgulla", searchname: "rasgulla", image: "https://media.istockphoto.com/id/495984318/photo/bangladesh-or-indias-favourite-sweet-rasgulla.jpg?s=612x612&w=0&k=20&c=stpruOe6VCiLn-77Sqm5UjqhOZY3F4tVgZLpuyg8GH4=" },
        { name: "Biryani", searchname: "chickenBiryani", image: "https://img.freepik.com/free-photo/high-angle-pakistan-meal-composition_23-2148821517.jpg?ga=GA1.1.612369711.1731510048&semt=ais_hybrid&w=740" }
    ],
    american: [
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
        { name: "BBQ Ribs", searchname: "bbqRibs", image: "https://media.istockphoto.com/id/938464060/photo/pork-ribs-over-flaming-grill-grid-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=Vu8Jm-EGZMp_rrHEPNd61YY4U80AHhAwiKV7fRlEh_E=" },
        { name: "Clam Chowder", searchname: "clamChowder", image: "https://media.istockphoto.com/id/2200396909/photo/clam-chowder-traditional-american-seafood-cream-soup-top-view.jpg?s=612x612&w=0&k=20&c=xhnk6XvZhq_9uTao9s8NzuyHZuUGfG9bkLkLTN8TzAc=" },
        { name: "Pumpkin Pie", searchname: "pumpkinPie", image: "https://media.istockphoto.com/id/516248809/photo/homemade-pumpkin-pie-for-thanksgiving.jpg?s=612x612&w=0&k=20&c=pEHYeZDzY46-qhlGkRI_cEGm4cCGhbRpTMUHix8OQkQ=" },

        {
            name: "Apple Pie",
            searchname: "applepie",
            image: "https://media.istockphoto.com/id/174955299/photo/apple-pie.jpg?s=612x612&w=0&k=20&c=B9oQNj8rsgFswcumBupulaFkWE5vClc80O-LI-xMqmY="
        }
    ],
    mexican: [
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
        { name: "Tamales", searchname: "tamales", image: "https://media.istockphoto.com/id/1404479386/photo/food.jpg?s=612x612&w=0&k=20&c=5LPt7QzRKRiw-33NOYoJQ9lIGUEGjZFB4EycjtXi2BM=" },
        { name: "Pozole", searchname: "pozole", image: "https://media.istockphoto.com/id/2161312784/photo/traditional-mexican-red-pozole-with-garnishes-and-coffee.jpg?s=612x612&w=0&k=20&c=LA6l5AYfsS-4dUhOtRC7dMEwgOqAaBcY5Kik6XOpcT8=" },
        { name: "Elote (Mexican Street Corn)", searchname: "elote", image: "https://media.istockphoto.com/id/2197555612/photo/homemade-mexican-corn-elote-esquites-in-cups-side-view.jpg?s=612x612&w=0&k=20&c=pmAxyYLk12vfj5SigIbNWvJnwv36xp7UoxjJ5JebGrA=" },

        {
            name: "Quesadillas",
            searchname: "quesadillas",
            image: "https://media.istockphoto.com/id/1170581169/photo/cheesy-beef-taco-quesadilla.jpg?s=612x612&w=0&k=20&c=44QxjPG0CPOcSLDmw4ar-1RGDoBFXjxOwqtWr00hvHc="
        }
    ],
    italian: [
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
        { name: "Gnocchi", searchname: "gnocchi", image: "https://media.istockphoto.com/id/1413783273/photo/baked-potato-gnocchi.jpg?s=612x612&w=0&k=20&c=pkGv4e85yJOVHgWi9BjNzQxV-a_5NCazxNDCxwZ5UW0=" },
        { name: "Bruschetta", searchname: "bruschetta", image: "https://media.istockphoto.com/id/1298345474/photo/bruschetta-with-tomato-and-basil.jpg?s=612x612&w=0&k=20&c=LFTC85j7Jbnkk61KXFWb-6iUvLtKV_sdFPhZlYcjFhw=" },
        { name: "Panna Cotta", searchname: "pannaCotta", image: "https://media.istockphoto.com/id/2155823442/photo/strawberry-panna-cotta-made-with-roasted-strawberries-delicious-creamy-dessert-with-berry.jpg?s=612x612&w=0&k=20&c=j1B5PC0yFQgNJQ_UvHmZdSneG7hxSZxMlPDsZzWT_qA=" },

    ],
    japanese: [
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
        }, { name: "Miso Soup", searchname: "misoSoup", image: "https://media.istockphoto.com/id/2207937448/photo/miso-soup-with-mizuna-and-tofu.jpg?s=612x612&w=0&k=20&c=nA0IACt5Sacc1X37YAYLbWTVkrhi19gC2z-Wci9I_1E=" },
        { name: "Okonomiyaki", searchname: "okonomiyaki", image: "https://media.istockphoto.com/id/1727633893/photo/okonomiyaki-traditional-japanese-savoury-pancake-dish-in-restaurant-on-grey-background.jpg?s=612x612&w=0&k=20&c=wj_dxhREZZq9BVdUgbtNfJWJQ68lZHGyT2GmfvkE_mU=" },
        { name: "Yakitori", searchname: "yakitori", image: "https://media.istockphoto.com/id/1872270882/photo/teriyaki-chicken-skewers.jpg?s=612x612&w=0&k=20&c=LOyl528-N5jg3FCPjLyUymM9RQN_-CEJH9KylpvtBmw=" },

    ]
};


const urlParams = new URLSearchParams(window.location.search);
const cuisine = urlParams.get("cuisine"); // Extract cuisine param

const container = document.getElementById("recipes-container");
const heading = document.querySelector(".heading");



if (!cuisine || !countryRecipes[cuisine]) {
    heading.textContent = "Recipes not found";
} else {
    heading.textContent = `See our ${cuisine.toUpperCase()} Recipes`;

    countryRecipes[cuisine].forEach(recipe => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("card-wrapper");
        container.appendChild(wrapper);
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img" />
      <div class="card-title">${recipe.name}</div>
    `;

        card.addEventListener("click", () => {
            window.location.href = `recipe.html?recipe=${recipe.searchname}`;
        });

        wrapper.appendChild(card);
    });
}
