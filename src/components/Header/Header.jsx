import logo from "../../assets/Logos/LOGO.png";
import Navigation from "../Nav/Nav";

function Header() {
    return (
        <div className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <Navigation/>
        </div>
    )
}

export default Header;