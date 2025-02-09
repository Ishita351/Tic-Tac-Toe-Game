let boxes= document.querySelectorAll(".box");
let rstBtn = document.querySelector("#rst-btn");
let msgcont = document.querySelector(".winhide");
let msg = document.querySelector("#winner");

let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) =>{
    box.addEventListener("click" , () => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false ;
        }else{
            box.innerText = "X";
            turnO = true ;
        }
        box.disabled = true ;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true ;
    }
};

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false ;
        box.innerText = " ";
    }
};

const showWinner = (winners) =>{
    msg.innerText = `Winner is ${winners}`;
    msgcont.classList.remove("winhide");
    disableBoxes();

};

const checkWinner = () => {
    for (let i of winPatterns){
        let pos1 = boxes[i[0]].innerText;
        let pos2 = boxes[i[1]].innerText;
        let pos3 = boxes[i[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "" ){
            if (pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }

        }
        
    }
};

const resetGame = () => {
    turnO = true ;
    enableBoxes();
    boxes.disabled = false ;
    boxes.innerText = " ";
    msgcont.classList.add("winhide");
};

rstBtn.addEventListener("click",resetGame);