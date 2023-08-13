var n;
var player1;
var player2;
var winner;

function generator(){
    n = Math.random();
    n *= 6;
    n = Math.floor(n) + 1;
    return n;           
}

function image1Picker(){
    for(var i = 1; i < 7; i++){
        if(n === 1){
            document.querySelector(".img1").setAttribute("src", "images/dice1.png");
        }
        else if(n === 2){
            document.querySelector(".img1").setAttribute("src", "images/dice2.png");
        }
        else if(n === 3){
            document.querySelector(".img1").setAttribute("src", "images/dice3.png");
        }
        else if(n === 4){
            document.querySelector(".img1").setAttribute("src", "images/dice4.png");
        }
        else if(n === 5){
            document.querySelector(".img1").setAttribute("src", "images/dice5.png");
        }
        else{
            document.querySelector(".img1").setAttribute("src", "images/dice6.png");
        }
    }
}

function image2Picker(){
    for(var i = 1; i < 7; i++){
        if(n === 1){
            document.querySelector(".img2").setAttribute("src", "images/dice1.png");
        }
        else if(n === 2){
            document.querySelector(".img2").setAttribute("src", "images/dice2.png");
        }
        else if(n === 3){
            document.querySelector(".img2").setAttribute("src", "images/dice3.png");
        }
        else if(n === 4){
            document.querySelector(".img2").setAttribute("src", "images/dice4.png");
        }
        else if(n === 5){
            document.querySelector(".img2").setAttribute("src", "images/dice5.png");
        }
        else{
            document.querySelector(".img2").setAttribute("src", "images/dice6.png");
        }
    }
}

for(var i = 1; i<3; i++){
    generator();
    if(i === 1){
        console.log("when i==1: " + n)
        player1 = n;
        image1Picker();
    }
    else if(i === 2){
        console.log("when i==2: " + n)
        player2 = n;
        image2Picker();
    }
}

function winner(){
    if(player1 > player2){
        winner = "🚩 Player 1 Wins!";
        }
    else if(player1 < player2){
        winner = "🚩 Player 2 Wins!";
    }
    else{
        winner = "♠ It's a Draw! ♠";
    }
    return winner;
}

document.querySelector("h1").textContent=winner();




/* short code for random number and random image selector */
/*
var randomNumber1 =  Math.floor(Math.random()*6)+1;
var randomImageSource1 = "images/dice" + randomNumber1 + "png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1 );

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImageSource2 = "imgaes/dice" + randomNumber2 + "png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

*/