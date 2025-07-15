const nutrientRecipes = {
    protein: [
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
        }
    ],
    carb: [
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
            name: "Aloo Paratha",
            searchname: "alooParatha",
            image: "https://media.istockphoto.com/id/1413566328/photo/indian-food-aloo-paratha-or-indian-potato-stuffed-flatbread-served-with-butter-pickle-and.jpg?s=612x612&w=0&k=20&c=bh5KxrjxxjuWcbLKoF-KIA4nkVEQmZ1AEjJKvXlIiro="
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
        }

    ],
    fibre: [
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
        }

    ],
    vitamin: [
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
        }


    ],
    mineral: [
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

    ],
};



const urlParams = new URLSearchParams(window.location.search);
const nutrient = urlParams.get("nutrient"); // Extract cuisine param

const container = document.getElementById("recipes-container");
const heading = document.querySelector(".heading");



if (!nutrient || !nutrientRecipes[nutrient]) {
    heading.textContent = "Recipes not found";
} else {
    heading.textContent = `See our ${nutrient.toUpperCase()} rich Recipes`;

    nutrientRecipes[nutrient].forEach(recipe => {
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
