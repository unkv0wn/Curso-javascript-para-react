import "./style.css"

function CardGame(icon = 'alura-pixel', alt='Logo Alura') {
    return /*html*/`
    <article class="card-game">
        <img src="imagens/${icon}.png" alt="${alt}">
    </article>
    `;
} 

export default CardGame;
