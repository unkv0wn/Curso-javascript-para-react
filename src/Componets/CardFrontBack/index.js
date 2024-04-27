import CardGame from "../Card";
import './style.css'

function CardFrontBack() {

    window.handleclick = (event) => {
        const $Origin = event.target
        const $CardFrontBack = $Origin.closest('.CardFrontBack')

        $CardFrontBack.classList.toggle("-active")
    }


    return /*html */`
        <article class="CardFrontBack" onclick="handleclick(event)">
            <div class="card -front"> 
            ${CardGame()}
            </div>
            <div class="card -back">
            ${CardGame('logo-javascript', 'javascript')}
            </div>
        </article>
    `;
}
export default CardFrontBack;