import CardGame from "../../Componets/Card/index.js";

function BoardGame(amountCards) {
    const $htmlCardGame = CardGame();
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards);

    return $htmlBoardGame; 

} export default BoardGame;