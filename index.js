let AIchoice;
let userChoice



document.getElementById("rock").onclick=function(){
    userChoice="rock";
    let machine = Math.floor(Math.random()*3)+1;
    AIchoice= AIchoices(machine);
    console.log(AIchoice)
    document.getElementById("label").innerHTML=win(userChoice,AIchoice);
}
document.getElementById("scissor").onclick=function(){
    userChoice="scissor";
    let machine = Math.floor(Math.random()*3)+1;
    AIchoice= AIchoices(machine);
    console.log(AIchoice)
    document.getElementById("label").innerHTML=win(userChoice,AIchoice);
}
document.getElementById("paper").onclick=function(){
    userChoice="paper";
    let machine = Math.floor(Math.random()*3)+1;
    AIchoice= AIchoices(machine);
    console.log(AIchoice)
    document.getElementById("label").innerHTML=win(userChoice,AIchoice);
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
        if(machine=="scissor"){outcome="User wins"}
        else{outcome="AI wins"}
    }
    else if(user=="scissor"){
        if(machine=="paper"){outcome="User wins"}
        else{outcome="AI wins"}
    }
    else if(user=="paper"){
        if(machine=="rock"){outcome="User wins"}
        else{outcome="AI wins"}
    }
    return outcome;
}