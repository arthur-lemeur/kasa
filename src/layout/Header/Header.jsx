import logo from "../../assets/Logos/LOGO.png";
import houseLogo from "../../assets/Logos/house-logo.png";
import Navigation from "../../components/Nav/Nav";
import './_header.scss';
/*import './_animation.scss';*/

function Header() {
    return (
        <div className="header">
        <a href="/" className="logo">
            <h1 className="part1">K</h1>
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <img src={houseLogo} alt="logo de l'agence" />
            <h1 className="part2">S</h1>
            <h1 className="part3">A</h1>
        </a>
            <Navigation/>
        </div>
    )
}

export default Header;