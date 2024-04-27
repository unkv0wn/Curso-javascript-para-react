import ArrowDown from "../../Componets/ArrowDown";
import PlayerName from "../../Componets/PlayerName";
import PlayerScore from "../../Componets/PlayerScore";
import VsPlayer from "../../Componets/VsPlayer";
import './style.css';

function ScoreBoard() {
    return /*html*/`
    <header class="score-board">
    ${ArrowDown()}
    ${PlayerName("Player 1")}
    ${PlayerScore(3)}
    ${VsPlayer('vs')}
    ${PlayerScore()}
    ${PlayerName("Player 2")}
    </header>
    `;
}

export default ScoreBoard