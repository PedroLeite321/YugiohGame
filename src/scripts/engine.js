// An object of objects.
const states =  {
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprites:    {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-image"),
        type: document.getElementById("card-image"),

    },
    fieldCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    actions:    {
        button: document.getElementById("next-duel"),
    }
};


const initialState = (() =>  {
        
})();