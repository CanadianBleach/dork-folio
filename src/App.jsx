import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import "./assets/css/global.css";

function App() {
  return (
    <>
      <Header />
      <div className="proj-cont">
        <div>
          <Project
            src="/images/portfolio.png"
            link="https://connorb.myportfolio.com/"
            className=""
          ></Project>
          <div className="section"></div>
          <Project
            src="\images\time-traveler.png"
            link="https://time-traveler.vercel.app/"
            className=""
          ></Project>
        </div>
        <div>
          <Project
            src="/images/youtube.png"
            link="https://www.youtube.com/channel/UC1Y9zkz2Cj2BV9a69QAKJEw"
            className=""
          ></Project>
          <div className="section"></div>
          <Project
            src="/images/unity.png"
            link="https://github.com/CanadianBleach/Unity-Weapon-Package"
            className=""
          ></Project>
        </div>
      </div>
    </>
  );
}

export default App;
