// import SiderSocial from "../components/layout/SiderSocial";
import Hero from "../components/sections/Hero";
import Planes from "../components/sections/Planes";
import Portfolio from "../components/sections/Portfolio";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* <SiderSocial /> */}
      <Hero />
      <Planes />
      <Portfolio />
      <Footer />
    </div>
  )
};
export default Home;

//<div className="pt-[89.36px] md:pt-[115px]">