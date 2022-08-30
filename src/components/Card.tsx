import  check from '../assets/check.svg';
import '../styles/card.scss';

export function Card() {
    return(
        <div className="card">
            <div className="card-title">
                Pacote 1
            </div>

            <div className="card-text">
                <img src={check} alt="" /> a blablauel
            </div>
        </div>
    );
}

export default Card