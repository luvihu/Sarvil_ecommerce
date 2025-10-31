// import SiderSocial from "../components/layout/SiderSocial";
import Hero from "../components/sections/Hero";
import Planes from "../components/sections/Planes";
import Portfolio from "../components/sections/Portfolio";
import Footer from "../components/layout/Footer";
import QaServices from "../components/sections/QaServices";

const Home = () => {
  return (
    <div className="overflow-x-hidden pt-16">
      {/* <SiderSocial /> */}
      <Hero />
      <Planes />
      <QaServices />
      <Portfolio />
      <Footer />
    </div>
  )
};
export default Home;

