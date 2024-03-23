import Footer from "./components/Footer";
import "./assets/css/global.css";
import Header from "./components/Header";

function About() {
  return (
    <>
      <Header />
      <div className="is-flex is-flex-wrap-wrap is-justify-content-center">
        <div>
          <h1 className="title">About Me</h1>
          <img className="profile-img m-2" src="/images/profile.png" />
        </div>
        <div className="is-flex profile-cont">
          <p className="m-2 pt-4">
            My passion for programming traces back to 2012 when I was introduced
            to justBASIC, a simple yet powerful language. Wanting to build
            games, I taught myself C# through learning Unity in 2015. This
            natural progression led me to delve into JavaScript and web
            development. Since 2018, I've been actively immersed in the world of
            React, channeling my passion into various personal projects.
          </p>
        </div>
      </div>
      <div className="section"></div>
      <Footer />
    </>
  );
}

export default About;
