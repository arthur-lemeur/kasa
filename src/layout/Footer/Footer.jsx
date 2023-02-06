import logo from "../../assets/Logos/LOGO-white.png";
import './_footer.scss';

function Footer() {
    return (
        <div className="footer">
            <img src={logo} className="App-logo" alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;