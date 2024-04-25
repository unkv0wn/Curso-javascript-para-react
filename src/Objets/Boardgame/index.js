import CardGame from "../../Componets/Card";
import './styles.css';
function BoardGame(amountCards) {
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amountCards);

    return /*html*/`
    <section class="board-game"> ${$htmlContent} </section>
     `; 

} export default BoardGame;