let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score");


const  gencomputerChoice =()=>{
const options = ["rock","paper","scissors"];
 const ranIdx=Math.floor(Math.random()*3);
 return options[ranIdx];
};
const drawgame = () =>{
    
    msg.innerText= "Game was draw . play again!.";
    msg.style.backgroundColor= "#081b31";

};
 const showwinner= (userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you Win! YOUR ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor= "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText=`You lost. ${compchoice} beats YOUR ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
 };
const playgame =(userchoice) =>{

//generate computer choice
const compchoice = gencomputerChoice();
if(userchoice === compchoice ){
    //draw game
    drawgame();
}else{
    let userwin = true;
if(userchoice === "rock"){
    //scissor, paper
    userwin = compchoice === "paper" ? false : true;
}else if(userchoice === "paper"){
    //rock , scissor
    userwin = compchoice === "scissors" ? false:true;

}else{
    //rock , paper
    userwin= compchoice === "rock" ? false : true;
}
showwinner(userwin, userchoice, compchoice);
}



};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});