let boxes = document.querySelectorAll(".box")
let restBtn1 = document.querySelector("#resat-btn1")
let restBtn2 = document.querySelector("#resat-btn2")
let winners = document.querySelector("#winner")
let wnTxt = document.querySelector("#wn-txt")
let h1 = document.querySelectorAll(".h1")
let O = true
let count = 0; //To Track Draw

var winpatn = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,6],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

let resatgame = ()=>{
    O = true;
    count = 0
    gsap.to(winners,{
        top: "-100%",
        display: "none",
        ease: Power4,
    })
    enblBtn()
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(O){
            box.innerText = "O";
            box.style.color = "#d74c47"
            O = false;
        }

        else{
            box.innerText = "X";
            box.style.color = "#000"
            O = true;
        }
        box.disabled = true;
        count ++;

        let isWinner = chackwine();
        if (count === 9 && !isWinner){
            matchDrow();}
    })
})

const dsableBtn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enblBtn = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const shoWinner = (winn)=>{
    // winners.style.top = 0
    // winners.style.display = "flex"
    wnTxt.innerText = `${winn}`
    gsap.to(winners,{
        display: "flex",
        top: 0,
        ease: Power4
    })
    dsableBtn()
}

const matchDrow = ()=>{
    h1.forEach((h1)=>{
        h1.innerText = "Match Drow"
        gsap.to(winners,{
            display: "flex",
            top: 0,
            ease: Power4
        })
        dsableBtn()
    })
}

const chackwine  = ()=>{
    for (let patten of winpatn) {
        let pos1 = boxes[patten[0]].innerText;
        let pos2 = boxes[patten[1]].innerText;
        let pos3 = boxes[patten[2]].innerText;
        console.log(pos1,pos2,pos3);
        if(pos1 !="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3 && pos3 === pos1){
                shoWinner(pos1) 
                return true;
            }
        }
    }
}



restBtn1.addEventListener("click", resatgame)
restBtn2.addEventListener("click", resatgame)