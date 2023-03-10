import Layout from "../../layout/layout";

import Banner from "../../components/Banner/Banner";
import BannerAbout  from "../../assets/banner-about.jpg"
import Collapse from "../../components/Collapse/Collapse";
import {useFetchCollapses} from "../../utils/hooks/useFetchAbout";


function About() {

    const [data] = useFetchCollapses()
    return (
        <div className="App">
            <Layout>
                <Banner
                banner={BannerAbout}/>
                {data.map((item) => (
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