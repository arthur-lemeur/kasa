import Layout from "../../layout/layout";

import BannerAbout from "../../components/BannerAbout/BannerAbout";
import Collapse from "../../components/Collapse/Collapse";
import Collapses from "../../utils/JSON/Collapses.json";


function About() {
    return (
        <div className="App">
            <Layout>
                <BannerAbout/>
                {Collapses.map((item) => (
                    <Collapse
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    />
                ))}
            </Layout>
        </div>
    );
}

export default About;