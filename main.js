import './src/styles/settings/colors.css'
import './src/styles/generic/generic.css'
import './src/styles/elements/base.css'
import BoardGame from './src/Objets/Boardgame'

const $root = document.querySelector("#root")
const $htmlBoardGame = BoardGame(9);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);




