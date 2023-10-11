import AboutUs from "../../components/AboutUs/AboutUs";
import LatestMatches from "../../components/Matches/LatestMatches";
import MatchdayBanner from "../../components/common/MatchdayBanner/MatchdayBanner";

const Home = () => {
  return (
    <>
      <MatchdayBanner />
      <AboutUs />
      <LatestMatches />
    </>
  );
};

export default Home;
