import "./App.css";
import Header from "./Components/HeaderSection/Header/Header";
import About from "./Components/AboutSection/About/About";
import BreakNumbers from "./Components/NumbersSection/BreakNumbers";
import Services from "./Components/ServicesSection/Services/Services";
import Quotes from "./Components/QuotesSection/Quotes/Quotes";
import Portfolio from "./Components/PortfolioSection/Portfolio/Portfolio";
import Contact from "./Components/ContactSection/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <BreakNumbers />
      <Services />
      <Quotes />
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
