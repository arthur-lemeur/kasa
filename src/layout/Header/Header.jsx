import logo from "../../assets/Logos/LOGO.png";
import Navigation from "../../components/Nav/Nav";
import './_header.scss';

function Header() {
    return (
        <div className="header">
        <a href="/">
            <img src={logo} className="App-logo" alt="logo" />
        </a>
            <Navigation/>
        </div>
    )
}

export default Header;