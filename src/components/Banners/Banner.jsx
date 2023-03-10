
import './_banner.scss';

function Banner(props) {
    const Banner = props.banner;
    const caption = props.caption;

    return (
        <figure className="banner-homepage">
            <img src={Banner} alt="BannerHome Homepage"/>
            <figcaption>{caption}</figcaption>
        </figure>
    )
}

export default Banner;