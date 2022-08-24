import type { NextPage } from "next";
import BackgroundPage from "../components/BackgroundPage";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <BackgroundPage />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;
