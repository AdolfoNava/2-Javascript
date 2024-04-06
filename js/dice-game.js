function rollDice(){
    let goldCoins = 0;
    for(let i = 0;i<10;i++){
        const roll = Math.floor(Math.random()*6+1)
        if(roll == 1){
            alert("Game over, no more rolls!");
            break;
        }else if(roll == 4 && goldCoins > 0){
            goldCoins -= 1;
        }else if(roll >= 5){
            alert(`Congratulations, you win ${roll} gold coins!`);
            goldCoins += roll;
        }
    }
    alert(`You have won ${goldCoins}.`)
}