var randomNumber1 = Math.floor(Math.random() *6) +1 ;

var randomDice = "dice" + randomNumber1 + ".png" ;

var randomImageDice = "images/" + randomDice ;

document.querySelectorAll("img") [0].setAttribute("src", randomImageDice) ;




var randomNumber2 = Math.floor(Math.random() *6) +1;

var randomDice2 = "images/dice" + randomNumber2 + ".png" ;


document.querySelectorAll("img") [1].setAttribute("src", randomDice2);




    if( randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML ="Player 1 wins"
    }
    else if (randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML ="player 2 wins"
    }
    else if (randomNumber1 === randomNumber2) {document.querySelector("h1").innerHTML="Draw!"}
    // else() {document.querySelector("h1").innerHTML = "Its a Draw !!"}

    var NumberOfButton = document.querySelectorAll(".Drum").length;
    
    for (var i=0; i<NumberOfButton; i++)

    document.querySelectorAll(".Drum")[i].addEventListener("click" , function (){alert("i got clicked")})



