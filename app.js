let boxes = document.querySelectorAll(".box");
let playerX=false;
let msg = document.querySelector(".info");
let game = document.querySelector(".game");
let winningpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
]
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerX == false) {
      box.innerText = "X";
      playerX = true;
    } else if(playerX == true) {
      box.innerText = "O";
      playerX = false;
    }
    box.disabled = true;
    checkwin();
  });
})
const checkwin = () => {
   for(pattern of winningpatterns){
     let a = boxes[pattern[0]].innerText;
     let b = boxes[pattern[1]].innerText;
     let c = boxes[pattern[2]].innerText;
     if(a==b && b==c && a!="" && b!="" && c!=""){
      msg.classList.remove("hide");
       msg.innerText = "Congratulations Winning the Tic Tac Toe Game Player" + a;
       disabledboxes();
   }
}
}
const disabledboxes = () =>{
  for(let box of boxes){
    box.disabled= true;
}
}
let reset = document.querySelector(".rst-btn");
reset.addEventListener("click", () => {
   for(let box of boxes){
  box.disabled= false;
  box.innerText ="";
  game.classList.remove("hide");
  msg.classList.add("hide");
   }
})
