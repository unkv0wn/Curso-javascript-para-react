
import CardFrontBack from '../../Componets/CardFrontBack';
import './styles.css';
function BoardGame(amountCards) {
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amountCards);

    return /*html*/`
    <section class="board-game"> ${$htmlContent} </section>
     `; 

} export default BoardGame;