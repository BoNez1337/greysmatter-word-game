import logo from '../../assets/gmlogo.png';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="gm-header">
                <img src={logo} className="gm-logo" alt="GreysMatter Logo"></img>
                <h1 className="game-title">Word Game</h1>
            </div>
        </header>
    )
}

export default Header
