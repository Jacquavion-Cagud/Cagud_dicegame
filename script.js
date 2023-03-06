function rollDice(){
    var diceValue = parseInt(Math.random()*6)+1;

    document.getElementById("diceface").innerHTML = diceValue;

    if (diceValue > 3){
        document.getElementById("dicemsg").innerHTML = "You rolled " + diceValue +  ". You <span class='text-primary'>win</span>!";
    }else{
        document.getElementById("dicemsg").innerHTML = "You rolled " + diceValue +  ". You <span class='text-danger'> should do a summersault off a building</span>!";
    }
}