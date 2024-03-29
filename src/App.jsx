import Header from "./components/Header/Header";
import Hero from "./components/Hero.jsx";
import "./App.css";
import Companies from "./components/companies/companies.jsx";
import Residencies from "./components/Residencies/Residencies.jsx";
import Value from "./components/Value/Value.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient">
          <Header />
          <Hero />
        </div>
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
