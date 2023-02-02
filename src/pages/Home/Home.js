import Header from "../../components/Header/Header";
import BannerHome from "../../components/BannerHome/BannerHome";
import CardsWrapper from "../../components/CardsWrapper/CardsWrapper";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="App">
        <Header/>
        <BannerHome/>
        <CardsWrapper/>
        <Footer/>
    </div>
  );
}

export default Home;
