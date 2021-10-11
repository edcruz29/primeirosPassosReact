import '../assets/Header.css'
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <div className="Header">
        <nav>
            <img src={props.logo} alt={props.imgLogo}></img>
            <p className="descricao">Primeira tentativa de um Webapp</p>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/contato">Contato</a></li>
            </ul>
        </nav>
    </div>
  );
}
Header.defaultProps = {
  logo: PropTypes.string
};

