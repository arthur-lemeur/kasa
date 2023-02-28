import  Banner  from "../../../assets/banner-home.jpg"
import '../_banner.scss';

function BannerHome() {
    return (
        <figure className="banner-homepage">
            <img src={Banner} alt="BannerHome Homepage"/>
            <figcaption>Chez vous,<span><br/></span> partout et ailleurs</figcaption>
        </figure>
    )
}

export default BannerHome;