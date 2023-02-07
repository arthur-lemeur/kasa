import Layout from "../../layout/layout";

import BannerAbout from "../../components/BannerAbout/BannerAbout";
import Collapse from "../../components/Collapse/Collapse";
import {useFetch} from "../../utils/hooks/useFetch";


function About() {

    const [data] = useFetch('/JSON/Collapses.json')
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