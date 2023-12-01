let hand = document.querySelectorAll(".hand");
let computer = document.querySelectorAll(".computer");
let user = document.querySelector(".user");
let machine = document.querySelector(".machine");
let winInfo = document.querySelector(".win-info");
let winner = document.querySelector(".winner");
console.log(computer);
let play = document.querySelector(".play");
let random = Math.floor(Math.random() * 3);
let triangle = document.querySelector(".triangle");
let score = JSON.parse(localStorage.getItem("score"));
let scoreElem = document.getElementById("score");
let comscore = JSON.parse(localStorage.getItem("comscore"));
let comScore = document.getElementById("comscore");
let ruleBtn = document.querySelector(".btn-rule");
let ruleInfo = document.querySelector(".rule-info");
let ruleimg = document.querySelector(".rule-img");
let btnNext = document.querySelector(".btn-next");
let winningPage = document.querySelector(".winning-page");
//let winningLogo = document.querySelector(".winning-logo");
//let gameContainer = document.querySelector(".game-container")
if (score) {
   scoreElem.innerText = score;
}
if (comscore) {
   comScore.innerText = comscore;
}
let count = 0;
hand.forEach((element, index) => {
   element.addEventListener("click", () => {
      user.style.opacity = "1";
      triangle.style.display = "none";
      hand.forEach(item => {
         item.style.display = "none";
      });
      element.style.display = "block";
      element.classList.add("show");
      setTimeout(() => {
         machine.style.opacity = "1"
         setTimeout(() => {
            computer[random].style.display = "block";
            computer[random].classList.add("right");
         }, 1000);
      }, 500);
      setTimeout(() => {
         if (random == index) {
            winInfo.style.display = "grid";
            winner.innerText = "TIE UP"
         }
         else if (index == 1 && random == 2 || index == 0 && random == 1 || index == 2 && random == 0) {
            winInfo.style.display = "grid";
            winner.innerText = "YOU WIN";
            count = score;
            count++;
            scoreElem.innerText = count;
            localStorage.setItem("score", JSON.stringify(count));
            btnNext.style.display = "block";
         }
         else {
            winInfo.style.display = "grid";
            winner.innerText = "YOU LOSS";
            count = comscore;
            count++;
            comScore.innerText = count;
            localStorage.setItem("comscore", JSON.stringify(count));
         }
      }, 1500);
   })
});
play.addEventListener("click", () => {
   window.location.reload();
})
ruleBtn.addEventListener("click", () => {
   ruleInfo.style.display = "flex";
   setTimeout(() => {
      ruleimg.style.transform = "translateY(0)"
   }, 400);
})
let close = document.querySelector(".close");
close.addEventListener("click", () => {
   ruleimg.style.transform = "translateY(-200%)"
   setTimeout(() => {
      ruleInfo.style.display = "none";
   }, 400);
})
btnNext.addEventListener("click", () => {
   winningPage.style.display = "flex";
   play.style.display = "block";
})