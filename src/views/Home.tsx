import SiderSocial from "../components/layout/SiderSocial";
import Hero from "../components/sections/Hero";
import Planes from "../components/sections/Planes";
import Portfolio from "../components/sections/Portfolio";

const Home = () => {
  return (
    <div className="pt-[89.36px] md:pt-[115px]">
      <SiderSocial />
      <Hero />
      <Planes />
      <Portfolio />
    </div>
  )
};
export default Home;
