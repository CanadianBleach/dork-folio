import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import "./assets/css/global.css"

function App() {
  return (
    <>
      <Header />
      <div className="columns project-cont">
        <div className="column">
          <Project className="column"></Project>
          <div className="section"></div>
          <Project className="column"></Project>
        </div>
        <div className="column">
          <Project className="column"></Project>
          <div className="section"></div>
          <Project className="column"></Project>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
