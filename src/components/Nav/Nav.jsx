import './_navigation.scss';
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

function Navigation() {
    let currentLocation = useLocation();
    let page = currentLocation.pathname.split('/')[1];
    useEffect(() => {
    const underline = () => {
        if (page === '') {
            document.getElementById('accueil').style.textDecoration = 'underline'
            document.getElementById('about').style.textDecoration = 'none'
        } else if (page === 'about') {
            document.getElementById('about').style.textDecoration = 'underline'
            document.getElementById('accueil').style.textDecoration = 'none'
        }
    }
    underline();
    })

    return (
        <ul className="navigation-primary">
            <li id="accueil"><a href="/">Accueil</a></li>
            <li id="about"><a href="/about">A Propos</a></li>
        </ul>
    )
}

export default Navigation;