import './_banner.scss';

function Banner(props) {
    const Banner = props.banner;
    const caption = props.caption;

    return (
        <figure className="banner">
            <img src={Banner} alt="Banner"/>
            <figcaption>{caption}</figcaption>
        </figure>
    )
}

export default Banner;