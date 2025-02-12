const btnElement1 = document.getElementById('btn') 

const diceElement1 = document.getElementById('dice')

const rollHistoryE1 = document.getElementById('roll_history')


let historyList = [];

function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6)+1;
    
    const diceFace = getdiceFace(randomNumber);

    diceElement1.innerHTML = diceFace
    historyList.push(randomNumber);
    updateRollHistory();
}


function updateRollHistory() {
    rollHistoryE1.innerHTML = '';
    for(let i = 0; i < historyList.length; i++){
        const listItem = document.createElement('li');
        listItem.innerHTML = `Roll ${i+1}:<span> 
        ${
            getdiceFace(historyList[i])
        }</span>`;
        rollHistoryE1.appendChild(listItem) 
    }
}

function getdiceFace(randomNumber) {
    switch(randomNumber){
        case 1:
            return '&#9856';
        case 2:
            return '&#9857';
        case 3:
            return '&#9858';
        case 4:
            return '&#9859';
        case 5:
            return '&#9860';
        case 6:
            return '&#9861';
    }
}
btnElement1.addEventListener('click', ()=>{
    diceElement1.classList.add("roll-animation");

    setTimeout(()=>{
        diceElement1.classList.remove("roll-animation");
        rollDice()
    },1000);
});