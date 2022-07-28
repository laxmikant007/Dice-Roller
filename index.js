var randomNumber1 = Math.floor(Math.random() *6) + 1;
// console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png";
// console.log(randomDiceImage);

var randomImageSource = "images/" + randomDiceImage;
// console.log(randomImageSource);

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// alert("Java script file is working correctly!!");

var randomNumber2 = Math.floor(Math.random() *6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!!😜";

}

else if(randomNumber2 >randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!!😜😝";
}

else{
    document.querySelector("h1").innerHTML = "Draw!! 😎 Dono Jeet gae🤩";
}