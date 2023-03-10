import Banner from "../../components/Banner/Banner";
import BannerHome  from "../../assets/banner-home.jpg"
import CardsWrapper from "../../components/CardsWrapper/CardsWrapper";
import Layout from "../../layout/layout";
import {Fragment} from "react";


function Home() {

  return (
    <div className="App">
        <Layout>
            <Banner
            banner={BannerHome}
            caption={<Fragment>Chez vous,<span><br/></span> partout et ailleurs</Fragment>}/>
            <CardsWrapper/>
        </Layout>
    </div>
  );
}

export default Home;
