import BannerHome from "../../components/BannerHome/BannerHome";
import CardsWrapper from "../../components/CardsWrapper/CardsWrapper";
import Layout from "../../layout/layout";


function Home() {
  return (
    <div className="App">
        <Layout>
            <BannerHome/>
            <CardsWrapper/>
        </Layout>
    </div>
  );
}

export default Home;
