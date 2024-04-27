import "./style.css"

function ArrowDown(CurentPlayer = 1) {
    return /*html*/`
     <img class="arrow-down" data-CurentPlayer=${CurentPlayer} src="imagens/IconArrowDown.png" alt="Seta para baixo">
    `;
}

export default ArrowDown