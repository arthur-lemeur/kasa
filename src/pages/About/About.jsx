import Header from "../../components/Header/Header";
import BannerAbout from "../../components/BannerAbout/BannerAbout";
import Collapse from "../../components/Collapse/Collapse";
import Collapses from "../../pages/About/Collapses.json";
import Footer from "../../components/Footer/Footer";


function About() {
    return (
        <div className="App">
            <Header/>
            <BannerAbout/>
            {Collapses.map((item) => (
                <Collapse
                key={item.id}
                title={item.title}
                description={item.description}
                />
            ))}
            <Footer/>
        </div>
    );
}

export default About;