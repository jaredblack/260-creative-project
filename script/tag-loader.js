'use strict'

let tags = [
    {
        "display_name": "British",
        "id": 64447,
        "type": "cuisine",
        "name": "british"
    },
    {
        "name": "italian",
        "display_name": "Italian",
        "id": 64453,
        "type": "cuisine"
    },
    {
        "id": 64457,
        "type": "cuisine",
        "name": "mexican",
        "display_name": "Mexican"
    },
    {
        "id": 64458,
        "type": "cuisine",
        "name": "middle_eastern",
        "display_name": "Middle Eastern"
    },
    {
        "id": 64463,
        "type": "dietary",
        "name": "dairy_free",
        "display_name": "Dairy-Free"
    },
    {
        "id": 64468,
        "type": "dietary",
        "name": "vegan",
        "display_name": "Vegan"
    },
    {
        "id": 64481,
        "type": "meal",
        "name": "appetizers",
        "display_name": "Appetizers"
    },
    {
        "type": "meal",
        "name": "snacks",
        "display_name": "Snacks",
        "id": 64491
    },
    {
        "display_name": "Grill",
        "id": 64494,
        "type": "method",
        "name": "grill"
    },
    {
        "id": 3801552,
        "type": "dietary",
        "name": "pescatarian",
        "display_name": "Pescatarian"
    },
    {
        "id": 5285641,
        "type": "dietary",
        "name": "contains_alcohol",
        "display_name": "Contains Alcohol"
    },
    {
        "id": 6953047,
        "type": "cuisine",
        "name": "dominican",
        "display_name": "Dominican"
    },
    {
        "display_name": "Puerto Rican",
        "id": 6953050,
        "type": "cuisine",
        "name": "puerto_rican"
    },
    {
        "name": "soul_food",
        "display_name": "Soul Food",
        "id": 6953051,
        "type": "cuisine"
    },
    {
        "id": 64451,
        "type": "cuisine",
        "name": "greek",
        "display_name": "Greek"
    },
    {
        "id": 64452,
        "type": "cuisine",
        "name": "indian",
        "display_name": "Indian"
    },
    {
        "id": 64459,
        "type": "cuisine",
        "name": "seafood",
        "display_name": "Seafood"
    },
    {
        "id": 64460,
        "type": "cuisine",
        "name": "thai",
        "display_name": "Thai"
    },
    {
        "type": "dietary",
        "name": "low_carb",
        "display_name": "Low-Carb",
        "id": 64467
    },
    {
        "id": 64470,
        "type": "difficulty",
        "name": "5_ingredients_or_less",
        "display_name": "5 Ingredients or Less"
    },
    {
        "id": 64471,
        "type": "difficulty",
        "name": "easy",
        "display_name": "Easy"
    },
    {
        "display_name": "Breakfast",
        "id": 64483,
        "type": "meal",
        "name": "breakfast"
    },
    {
        "id": 64487,
        "type": "meal",
        "name": "drinks",
        "display_name": "Drinks"
    },
    {
        "name": "lunch",
        "display_name": "Lunch",
        "id": 64489,
        "type": "meal"
    },
    {
        "id": 65850,
        "type": "dietary",
        "name": "indulgent_sweets",
        "display_name": "Indulgent Sweets"
    },
    {
        "type": "cuisine",
        "name": "hawaiian",
        "display_name": "Hawaiian",
        "id": 6953012
    },
    {
        "id": 6953013,
        "type": "cuisine",
        "name": "ethiopian",
        "display_name": "Ethiopian"
    },
    {
        "id": 6953016,
        "type": "cuisine",
        "name": "west_african",
        "display_name": "West African"
    },
    {
        "id": 6953044,
        "type": "cuisine",
        "name": "peruvian",
        "display_name": "Peruvian"
    },
    {
        "id": 6953048,
        "type": "cuisine",
        "name": "cuban",
        "display_name": "Cuban"
    },
    {
        "id": 64446,
        "type": "cuisine",
        "name": "brazilian",
        "display_name": "Brazilian"
    },
    {
        "id": 64472,
        "type": "difficulty",
        "name": "under_30_minutes",
        "display_name": "Under 30 Minutes"
    },
    {
        "name": "sides",
        "display_name": "Sides",
        "id": 64490,
        "type": "meal"
    },
    {
        "name": "deep_fry",
        "display_name": "Deep-Fry",
        "id": 64493,
        "type": "method"
    },
    {
        "id": 65859,
        "type": "method",
        "name": "pan_fry",
        "display_name": "Pan Fry"
    },
    {
        "display_name": "Taiwanese",
        "id": 6953039,
        "type": "cuisine",
        "name": "taiwanese"
    },
    {
        "id": 6953041,
        "type": "cuisine",
        "name": "haitian",
        "display_name": "Haitian"
    },
    {
        "id": 64450,
        "type": "cuisine",
        "name": "german",
        "display_name": "German"
    },
    {
        "id": 64454,
        "type": "cuisine",
        "name": "japanese",
        "display_name": "Japanese"
    },
    {
        "type": "cuisine",
        "name": "korean",
        "display_name": "Korean",
        "id": 64455
    },
    {
        "id": 64466,
        "type": "dietary",
        "name": "healthy",
        "display_name": "Healthy"
    },
    {
        "id": 64469,
        "type": "dietary",
        "name": "vegetarian",
        "display_name": "Vegetarian"
    },
    {
        "id": 64492,
        "type": "method",
        "name": "bake",
        "display_name": "Bake"
    },
    {
        "id": 64498,
        "type": "method",
        "name": "steam",
        "display_name": "Steam"
    },
    {
        "type": "cuisine",
        "name": "african",
        "display_name": "African",
        "id": 3801553
    },
    {
        "id": 3801554,
        "type": "cuisine",
        "name": "caribbean",
        "display_name": "Caribbean"
    },
    {
        "id": 6953008,
        "type": "cuisine",
        "name": "filipino",
        "display_name": "Filipino"
    },
    {
        "id": 6953015,
        "type": "cuisine",
        "name": "south_african",
        "display_name": "South African"
    },
    {
        "id": 6953049,
        "type": "cuisine",
        "name": "jamaican",
        "display_name": "Jamaican"
    },
    {
        "name": "american",
        "display_name": "American",
        "id": 64444,
        "type": "cuisine"
    },
    {
        "id": 64445,
        "type": "cuisine",
        "name": "bbq",
        "display_name": "BBQ"
    },
    {
        "display_name": "Chinese",
        "id": 64448,
        "type": "cuisine",
        "name": "chinese"
    },
    {
        "id": 64449,
        "type": "cuisine",
        "name": "french",
        "display_name": "French"
    },
    {
        "name": "latin_american",
        "display_name": "Latin American",
        "id": 64456,
        "type": "cuisine"
    },
    {
        "id": 64461,
        "type": "cuisine",
        "name": "vietnamese",
        "display_name": "Vietnamese"
    },
    {
        "id": 64462,
        "type": "dietary",
        "name": "comfort_food",
        "display_name": "Comfort Food"
    },
    {
        "id": 64465,
        "type": "dietary",
        "name": "gluten_free",
        "display_name": "Gluten-Free"
    },
    {
        "id": 64485,
        "type": "meal",
        "name": "desserts",
        "display_name": "Desserts"
    },
    {
        "type": "meal",
        "name": "dinner",
        "display_name": "Dinner",
        "id": 64486
    },
    {
        "id": 64488,
        "type": "dietary",
        "name": "kid_friendly",
        "display_name": "Kid-Friendly"
    },
    {
        "display_name": "Fusion",
        "id": 65410,
        "type": "cuisine",
        "name": "fusion"
    },
    {
        "type": "meal",
        "name": "bakery_goods",
        "display_name": "Bakery Goods",
        "id": 65857
    },
    {
        "id": 6953014,
        "type": "cuisine",
        "name": "kenyan",
        "display_name": "Kenyan"
    },
    {
        "id": 6953040,
        "type": "cuisine",
        "name": "swedish",
        "display_name": "Swedish"
    },
    {
        "name": "persian",
        "display_name": "Persian",
        "id": 6953042,
        "type": "cuisine"
    },
    {
        "type": "cuisine",
        "name": "lebanese",
        "display_name": "Lebanese",
        "id": 6953043
    },
    {
        "display_name": "Indigenous",
        "id": 6953045,
        "type": "cuisine",
        "name": "indigenous"
    },
    {
        "id": 6953046,
        "type": "cuisine",
        "name": "laotian",
        "display_name": "Laotian"
    },
    {
        "id": 6953052,
        "type": "cuisine",
        "name": "venezuelan",
        "display_name": "Venezuelan"
    }
]

let cuisineTags = tags.filter(x => x.type === "cuisine");
let dietaryTags = tags.filter(x => x.type === "dietary");
let difficultyTags = tags.filter(x => x.type === "difficulty");
let mealTags = tags.filter(x => x.type === "meal");
let methodTags = tags.filter(x => x.type === "method");

const cuisineDiv = document.getElementById("cuisineDiv");
const dietaryDiv = document.getElementById("dietaryDiv");
const difficultyDiv = document.getElementById("difficultyDiv");
const mealDiv = document.getElementById("mealDiv");
const methodDiv = document.getElementById("methodDiv");

const labelMaker = (div, tags) => {
    let liList = tags.map(tag => `<li class="tag-list-item" onclick="createAPICall('${tag.name}')">${tag.display_name}</li>`);
    // console.log(`liList: ${liList}`)
    div.innerHTML = `<ul>${liList.join('')}</ul>`;
}

labelMaker(cuisineDiv, cuisineTags);
labelMaker(dietaryDiv, dietaryTags);
labelMaker(difficultyDiv, difficultyTags);
labelMaker(mealDiv, mealTags);
labelMaker(methodDiv, methodTags);

function createAPICall(tagName) {
    sessionStorage.setItem("tag", tagName);
    window.location.href = "/pages/recipe-book.html";
}