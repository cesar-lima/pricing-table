import  check from '../assets/check.svg';
import '../styles/card.scss';

export function Card() {
    return(
        <div className="card">
            <div className="card-title">
                Pacote 1
            </div>

            <div className="card-price">
                <span>R$ 59</span><span>,00 </span><span>/mês</span>   
            </div>

            <div className="card-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>

            <div className="card-text">
                <img src={check} alt="icone de check" /> Lorem ipsum dolor sit amet.
            </div>

            <div className="card-text">
                <img src={check} alt="icone de check" /> Lorem ipsum dolor sit amet.
            </div>

            <div className="card-text">
                <img src={check} alt="icone de check" /> Lorem ipsum dolor sit amet.
            </div>

            <div className="card-text">
                <img src={check} alt="icone de check" /> Lorem ipsum dolor sit amet.
            </div>

            <div className="card-button">
                <button>ASSINAR</button>
            </div>
        </div>
    );
}

export default Card