import  Banner  from "../../assets/banner-home.jpg"

function BannerHome() {
    return (
        <figure className="banner-homepage">
            <img src={Banner} alt="BannerHome Homepage"/>
            <figcaption>Chez vous, partout et ailleurs</figcaption>
        </figure>
    )
}

export default BannerHome;