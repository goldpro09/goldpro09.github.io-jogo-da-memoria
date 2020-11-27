const bodyElement = document.getElementsByTagName("body");
const loadingContainer = document.getElementById("loading-container");
const loadingText = document.getElementById("loading");
const selectThemeElement = document.getElementById("game-theme");


var goToMain = setTimeout(function() {
    loadingContainer.style.display = "none";
    bodyElement.style.display = "flex";
},3000)

function playGame() {
    // console.log(selectThemeElement.value);
    if(selectThemeElement.value === "animals") {
        window.location.replace("Themes/animals/animals.html");
    }
    else if(selectThemeElement.value === "code-front") {
        window.location.replace("Themes/code-front/code.html");
    }
    else if(selectThemeElement.value === "code-back") {
        window.location.replace("Themes/code-back/codeb.html");
    }
    else if(selectThemeElement.value === "food") {
        window.location.replace("Themes/food/food.html");
    }
    else if(selectThemeElement.value === "nerd") {
        window.location.replace("Themes/nerd/nerd.html");
    }
    else if(selectThemeElement.value === "objects") {
        window.location.replace("Themes/objects/objects.html");
    }
    
}
