let recipe = JSON.parse(sessionStorage.getItem("recipe"));
console.log(recipe.name);

function loadRecipe(recipe) {
    document.querySelector(".recipe-title").innerHTML = `<h1>${recipe.name}</h1>`;
    document.querySelector("#rating").innerHTML = Math.round(recipe.user_ratings.score * 100) + `% <span class="material-icons thumb-up">thumb_up</span>`;
    if (recipe.total_time_minutes !== null) {
        document.querySelector("#time").innerHTML = recipe.total_time_minutes + " min";
    } else if (recipe.total_time_tier !== null) {
        document.querySelector("#time").innerHTML = recipe.total_time_tier.display_tier;
    } else {
        document.querySelector("#time").innerHTML = "60 min";
    }

    if (recipe.num_servings === 1) {
        document.querySelector("#servings").innerHTML = recipe.num_servings + " " + recipe.servings_noun_singular;
    }
    else {
        document.querySelector("#servings").innerHTML = recipe.num_servings + " " + recipe.servings_noun_plural;
    }

    let ingredientsDiv = document.querySelector(".recipe-ingredients");
    let ingredientHtml = "";
    let sections = recipe.sections;
    for (let i = 0; i < sections.length; i++) {
        let sectionName = "Ingredients";
        if (sections[i].name !== null) {
            sectionName = sections[i].name;
        }
        ingredientHtml += `<h5>${sectionName}</h5>`;
        let components = sections[i].components

        ingredientHtml += "<ul>";
        for (let j = 0; j < components.length; j++) {
            ingredientHtml += `<li>${components[j].raw_text}</li>`;
        }
        ingredientHtml += "</ul>";
    }

    ingredientsDiv.innerHTML = ingredientHtml;


    let instListDiv = document.querySelector("#instructions-list");
    let instructionHtml = "";
    let instructions = recipe.instructions;
    for (let i = 0; i < instructions.length; i++) {
        instructionHtml += `<li>${instructions[i].display_text}</li>`;
    }
    instListDiv.innerHTML = instructionHtml;


    document.querySelector(".recipe-vid").innerHTML = `<source id="vidSrc"
    src="${recipe.original_video_url}"
    type="video/mp4">`;
    // document.querySelector().innerHTML = 
    // document.querySelector().innerHTML = 
    // document.querySelector().innerHTML = 

}

loadRecipe(recipe);