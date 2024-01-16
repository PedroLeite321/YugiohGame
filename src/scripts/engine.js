// An object of objects.
const states =  {
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprites:    {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),

    },
    fieldCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    actions:    {
        button: document.getElementById("next-duel"),
    }
};

const playerSides = {
    player1: "player-cards",
    computer: "computer-cards",
}

const pathToSrc = "./src/assets/icons/";


const cardData  = [
    {
        id: 0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathToSrc}dragon.png`,
        winAgainst: [1],
        lostAgains: [2],
    },
    {
        id: 1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathToSrc}magician.png`,
        winAgainst: [2],
        lostAgains: [0],
    },
    {
        id: 2,
        name: "Exodia",
        type: "scissors",
        img: `${pathToSrc}exodia.png`,
        winAgainst: [0],
        lostAgains: [1],
    }
]

const drawSelectedCard = async (index) =>  {
    states.cardSprites.avatar.src = cardData[index].img;
    states.cardSprites.name.innerText = cardData[index].name;
    states.cardSprites.type.innerText = `Attribute : ${cardData[index].type}`
}

const getRandomCardId = async () =>   {
    //math.random to get ID
    const randomIndex = Math.floor(Math.random() * cardData.length)
    return cardData[randomIndex].id;
}

const createCardImage = async (randomIdCard, fieldSite) => {
   
    const cardImageElement = document.createElement("img");
    cardImageElement.setAttribute("height", "100px");
    cardImageElement.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImageElement.setAttribute("data-id", randomIdCard);
    cardImageElement.classList.add("card");

    if(fieldSite === playerSides.player1)  {
        cardImageElement.addEventListener("click", ()   =>  {
            setCardsField(cardImageElement.getAttribute("data-id"));
        })

        cardImageElement.addEventListener("mouseover", ()   =>  {
            drawSelectedCard(randomIdCard);
        });
    }
    
    return cardImageElement;
}

const drawCards = async (cardNumber, fieldSide) => {
    for(let i = 0; i < cardNumber; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);
       
        document.getElementById(fieldSide).appendChild(cardImage);
    }


}

const initialState = (() =>  {
    drawCards(5, playerSides.computer);
    drawCards(5, playerSides.player1);
})();