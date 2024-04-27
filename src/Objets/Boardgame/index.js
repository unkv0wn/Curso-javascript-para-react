import CardFrontBack from '../../Componets/CardFrontBack';
import cards from './data';
import './styles.css';

function BoardGame(amountCards) {
    window.BoardGame = {};
    window.BoardGame.handleclick = () => {
        const $Boardgame = document.querySelector('.board-game');
        const $ArrowDown = document.querySelector('.arrow-down');
        const $CardsActive = $Boardgame.querySelectorAll('.CardFrontBack.-active');
        
        console.log($CardsActive.length);
        if ($CardsActive.length === 2) {
            setTimeout(() => {
                const currentPlayer =$ArrowDown.getAttribute('data-CurentPlayer');
                $CardsActive.forEach((card) => card.classList.remove('-active'));
                $ArrowDown.setAttribute('data-CurentPlayer', currentPlayer == 1 ? 2 : 1);
            }, 1000);
        }
    };

    const htmlCardsList = cards.map((card) => CardFrontBack(card.Icon, card.AltIcon));
    const $htmlCards = htmlCardsList.join('');
    return /*html*/`
    <section class="board-game" onclick="BoardGame.handleclick()"> ${$htmlCards} </section>
     `; 
}

export default BoardGame;
