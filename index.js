var randomNumberLeft;
var randomNumberRight;

function rand1(){
randomNumberLeft=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumberLeft+".png");
}

function rand2(){
randomNumberRight=Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumberRight+".png");
}

function result(){
if(randomNumberLeft>randomNumberRight)
  document.querySelector("h1").textContent="Player 1 Wins! 🚩";
else if(randomNumberLeft<randomNumberRight)
  document.querySelector("h1").textContent="Player 2 Wins! 🚩";

else
  document.querySelector("h1").textContent="It's a Draw!";
}
