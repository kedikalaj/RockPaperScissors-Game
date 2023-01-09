let AIchoice;
let userChoice;
let Score=0;



document.getElementById("rock").onclick=function(){
    userChoice="rock";
    let machine = Math.floor(Math.random()*3)+1;
    AIchoice= AIchoices(machine);
    document.getElementById("label").innerHTML=win(userChoice,AIchoice);
    document.getElementById("machinechoice").innerHTML = "The machine choosed: " + AIchoice;
    document.getElementById("score").innerHTML="User score: "+Score;
}
document.getElementById("scissor").onclick=function(){
    userChoice="scissor";
    let machine = Math.floor(Math.random()*3)+1;
    AIchoice= AIchoices(machine);
    document.getElementById("label").innerHTML=win(userChoice,AIchoice);
    document.getElementById("machinechoice").innerHTML = "The machine choosed: " + AIchoice;
    document.getElementById("score").innerHTML="User score: "+Score;
}
document.getElementById("paper").onclick=function(){
    userChoice="paper";
    let machine = Math.floor(Math.random()*3)+1;
    AIchoice= AIchoices(machine);
    document.getElementById("label").innerHTML=win(userChoice,AIchoice);
    document.getElementById("machinechoice").innerHTML = "The machine picked: " + AIchoice;
    document.getElementById("score").innerHTML="User score: "+Score;
}


function AIchoices(machine){
    let choice;
    switch(machine) {
        case 1:
          choice="paper";
          break;
        case 2:
            choice="rock";
            break;
        case 3:
            choice="scissor";
          break;
      }
      return choice;
}

function win(user,machine){
    let outcome;
    if(user==machine){
        outcome="Draw!";
    }
    else if(user=="rock"){
        if(machine=="scissor"){outcome="User wins";Score+=1;}
        else{outcome="Machine wins"}
    }
    else if(user=="scissor"){
        if(machine=="paper"){outcome="User wins";Score+=1;}
        else{outcome="Machine wins"}
    }
    else if(user=="paper"){
        if(machine=="rock"){outcome="User wins";Score+=1;}
        else{outcome="Machine wins"}
    }
    return outcome;
}