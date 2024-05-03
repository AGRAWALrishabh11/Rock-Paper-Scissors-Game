let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");



const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

};

const drawGame=()=>{
    
    msg.innerText="GAME WAS DRAW";
    msg.style.backgroundColor="#081b31";




};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        
        msg.innerText=`YOU WIN! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";


    }else{
        compScore++;
        compScorePara.innerText=compScore;
       
       
        msg.innerText=`YOU LOSE computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";



    }
};

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //Generate Computer Choice
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice === compChoice){
        drawGame(); //draw

    }

    else{
        let userWin=true;

        if(userChoice ==="rock"){
            //computer's choice might be scissors or paper
            userWin=compChoice === "paper" ? false:true;
        }
        else if(userChoice==="paper"){
            //computer's choice might be scissors or rock
            userWin=compChoice === "scissors" ? false:true;
        }
        else{
            //user choice is scissors
             //computer's choice might be paper or rock
          
            userWin=compChoice === "rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
        

        

    }

    
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
})