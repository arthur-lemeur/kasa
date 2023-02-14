import Layout from "../../layout/layout";

import BannerAbout from "../../components/Banners/BannerAbout/BannerAbout";
import Collapse from "../../components/Collapse/Collapse";
import {useFetchCollapses} from "../../utils/hooks/useFetchAbout";


function About() {

    const [data] = useFetchCollapses()
    return (
        <div className="App">
            <Layout>
                <BannerAbout/>
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