/*******
 *  
 * 
 *******/

let color, mousedown


//Recuperation du body

let body = document.getElementsByTagName("body")[0];

//Maintenir  la sourie 

body.addEventListener("mousedown", mousedownFunction)

function mousedownFunction() {

    mousedown = true;

}

//Recuperation du body

body.addEventListener("mouseup", mouseupFunction)

//Relache le maintien de la sourie 

function mouseupFunction() {

    mousedown = false;

}

//recuperer toutes les couleurs

let content_colors = document.querySelectorAll(".content_1 > *");

//Cliquer sur une couleur

for (let content_color of content_colors) {

    content_color.addEventListener("click", color_click);

}

//La fonction qui garde en memoire la couleur selectionner ou cliquer

function color_click(event) {

    color = event.target.style.backgroundColor;

}

//recuperer tous le contenu de content 2

let content_Squares = document.querySelectorAll(".content_2 > *");

//clique sur la souris

function mousedownSquare(event) {

    if (color != null) {

        event.target.style.backgroundColor = color;

    }

}

//clique sur la souris et survole les square

function mouseoverSquare(event) {

    if (mousedown && color != null) {

        event.target.style.backgroundColor = color;

    }

}

//Une boucle pour executer les 2 fonctions precedant

for (let content_Square of content_Squares) {

    content_Square.addEventListener("mousedown", mousedownSquare);

    content_Square.addEventListener("mouseover", mouseoverSquare);
}

//Recuperation du button

let clear_button = document.querySelectorAll(".btn_clear")[0];

//click sur le bouton

clear_button.addEventListener("click", clearButtonFunction)

//recuperation des squares 
let squareWhites = document.querySelectorAll(".content_2_bloc_1 > *");

//fonction clear
function clearButtonFunction() {

    for (let squareWhite of squareWhites) {

        // console.log(squareWhite)
        //Changement des coleur des square en white
        squareWhite.style.backgroundColor = "white";

    }

}


