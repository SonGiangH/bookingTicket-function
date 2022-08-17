
const stateDefault = {
    result: false, // true là tài (> 11), false là xỉu (< 11)
    diceArray: [
        { "id": 1, "image": "./rollDice/1.png" },
        { "id": 1, "image": "./rollDice/2.png" },
        { "id": 1, "image": "./rollDice/1.png" }
    ],
    total: 0,
    winningTimes: 0,
}

const RollingDiceReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'BET': {
            state.result = action.option
            return { ...state }
        }
        case 'PLAY_GAME': {
            // Render random dice
            let randomDiceArray = [];
            for (let i = 0; i < 3; i++) {
                let random = Math.floor(Math.random() * 6) + 1
                let diceRandom = { id: random, image: `./rollDice/${random}.png` }
                randomDiceArray.push(diceRandom);
            }
            state.diceArray = randomDiceArray;
            // Increase time of playing
            state.total += 1;
            // Winning times
            let totalPoint = randomDiceArray.reduce((acc, dice) => {
                return acc += dice.id
            }, 0);

            if ((totalPoint > 11 && state.result) || (totalPoint <= 11 && !state.result)) {
                state.winningTimes += 1;
            }
            return { ...state }
        }
        default: return { ...state }
    }
}

export default RollingDiceReducer;