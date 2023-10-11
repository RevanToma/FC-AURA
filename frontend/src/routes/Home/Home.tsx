import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import LatestMatches from "../../components/Matches/LatestMatches";
import MatchdayBanner from "../../components/common/MatchdayBanner/MatchdayBanner";

const Home = () => {
  return (
    <>
      <MatchdayBanner />
      <AboutUs />
      <LatestMatches />
      <Footer />
    </>
  );
};

export default Home;
