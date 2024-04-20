import './src/styles/settings/colors.css'
import './src/styles/generic/generic.css'
import './src/styles/elements/base.css'

import CardGame from "./src/Componets/Card"

const $root = document.querySelector("#root")
const $htmlCardGame = CardGame()


$root.insertAdjacentHTML("beforeend", $htmlCardGame);


