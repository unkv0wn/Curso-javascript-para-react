import './src/styles/settings/colors.css'
import './src/styles/generic/generic.css'
import './src/styles/elements/base.css'
import BoardGame from './src/Objets/Boardgame'
import PlayerName from './src/Componets/PlayerName'
import ScoreBoard from './src/Objets/ScoreBoard'

const $root = document.querySelector("#root")
const $htmlBoardGame = BoardGame(6);
const $htmlPlayerName = PlayerName();

$root.insertAdjacentHTML("beforeend", `
    ${ScoreBoard()}
    ${BoardGame(6)}
`);




