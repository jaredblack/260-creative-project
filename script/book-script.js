let storedTag = sessionStorage.getItem("tag");
if (storedTag !== "noTag") {
    recipeLoader(storedTag);
}

document.querySelector("#submitSearch").addEventListener('click', event => {
    let query = document.querySelector(".search-bar").value;
    displayLoading();
    recipeLoader(query, false, false);
    event.preventDefault();
});

function loadRandom() {
    console.log("hello");
    displayLoading();
    recipeLoader(false, false, true);
}

function displayLoading() {
    document.querySelector("#recipe-row").innerHTML =
        `<div class="loading-container">
                    <div class="lds-ripple">
                        <div></div>
                        <div></div>
                    </div>
                </div>`;
}

function recipeLoader(queryString, tagName, random) {
    document.querySelector("#mainBookContainer").style.display = "block";
    sessionStorage.setItem("tag", "noTag");
    apiURL = "https://tasty.p.rapidapi.com/recipes/list";
    let offset = 0;
    if (random) {
        offset = Math.floor(Math.random() * 8907);
        console.log(offset)
    }
    apiURL += `?from=${offset}&size=50`;

    if (tagName) {
        apiURL += `&tags=${tagName}`;
    }

    if (queryString) {
        apiURL += `&q=${queryString}`;
    }

    fetch(apiURL, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tasty.p.rapidapi.com",
            "x-rapidapi-key": "0e7f030579msh34a04515a267f43p1cab01jsn0b8b2139c8e7"
        }
    })
        .then(response => {
            return response.json();
        })
        .then(json => {
            fillGrid(json);
        })
        .catch(err => {
            console.error(err);
        });
}

function fillGrid(json) {
    let recipeList = json.results.filter(recipe => recipe.canonical_id.includes("recipe") && recipe.aspect_ratio === "1:1");

    let htmlString = "";

    let maxRecipes = 10;
    if (recipeList.length === 0) {
        htmlString =
            `<div class="alert alert-light" role="alert">
                Sorry, no recipes were found!
            </div>`;
    }
    if (recipeList.length < 10) {
        maxRecipes = recipeList.length;
    }

    for (let i = 0; i < maxRecipes; i++) {
        console.log(recipeList[i]);
        //TODO: change button link
        htmlString +=
            `<div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="card recipe-card mb-4">
                        <img class="card-img-top"
                            src="${recipeList[i].thumbnail_url}" />
                        <div class="card-body recipe-card-body">
                            <div class="text-wrapper">
                                <h5 class="card-title">${recipeList[i].name}</h5>
                            </div>

                            <div class="rating-button">
                                <p>${Math.round(recipeList[i].user_ratings.score * 100)}% <span class="material-icons thumb-up">thumb_up</span></p>
                                <a type="button" href="/pages/recipe1.html" class="btn btn-primary recipe-button">Recipe
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg></a>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
    document.getElementById("recipe-row").innerHTML = htmlString;
}


// recipeLoader("cheeseburger");
// recipeLoader(false, "american");
// recipeLoader(false, false, true);
