let userScore=0;
let CompScore=0;

let choice=document.querySelector('.choice');

let msg=document.querySelector('#msg');
let userScoreBoard=document.querySelector('#userscore');
let compScoreBoard=document.querySelector('#compscore');


const Drawgame=(CompChoice=userChoice)=>{
    
    msg.innerText="Draw!";
    msg.style.backgroundColor="yellow";

}


let showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreBoard.innerText=userScore;
        msg.innerText=`You Win!  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        CompScore++;
        compScoreBoard.innerText=CompScore; 
        msg.innerText= `You Lose!${compChoice} beats ${userChoice}`;

        msg.style.backgroundColor="#ff7e5f";

    }

}

//let make for computer choice
const getCompChoice=()=>{
    const choices=['rock','paper','scissors'];
    const RandomId=Math.floor(Math.random()*3);
    return choices[RandomId];


}




const choices=document.querySelectorAll('.choice');
const Playgame=(userChoice)=>{

    const compchoice=getCompChoice();
    console.log("commputer choice=",compchoice);
    if(userChoice===compchoice){
        Drawgame(userChoice);

    }else{
        let userWin=true;
        if(userChoice==='rock')
        {
          userWin=  compchoice==='paper'? false:true;
        } else if(compchoice==="paper"){

        userWin=compchoice==='scissors'? false:true;
        } else{
            userWin=compchoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compchoice);
    }

}

choices.forEach((choices)=>{
    choices.addEventListener('click',function(){

        const userChoice=choices.getAttribute('id');
        Playgame(userChoice);
    })

})