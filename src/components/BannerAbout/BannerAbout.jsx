import Banner from  "../../assets/banner-about.jpg";
import '../_banner.scss';

function BannerAbout() {
    return (
        <figure className="banner-homepage">
            <img src={Banner} alt="BannerHome Homepage"/>
        </figure>
    )
}

export default BannerAbout;