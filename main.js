import './src/styles/settings/colors.css'
import './src/styles/generic/generic.css'
import './src/styles/elements/base.css'
import BoardGame from './src/Objets/Boardgame'
import PlayerName from './src/Componets/PlayerName'

const $root = document.querySelector("#root")
const $htmlBoardGame = BoardGame(6);
const $htmlPlayerName = PlayerName();

$root.insertAdjacentHTML("beforeend", `
    ${PlayerName(1)}
    ${PlayerName(2)}
    ${BoardGame(6)}
`);




