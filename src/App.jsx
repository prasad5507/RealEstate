import Header from "./Components/Hero/Header/Header";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import Compaines from "./Components/Compaines/Compaines";
import Residencies from "./Components/Residencies/Residencies";
import Value from "./Components/Value/Value";
import Contact from "./Components/Contact/Contact";
import GetStarted from "./Components/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <section id="hero">
          <Hero />
        </section>
        <section id="companies">
          <Compaines />
        </section>
        <section id="residencies">
          <Residencies />
        </section>
        <section id="value">
          <Value />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="get-started">
          <GetStarted />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
