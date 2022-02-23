import "./App.css";
import Header from "./Components/HeaderSection/Header/Header";
import About from "./Components/AboutSection/About/About";
import BreakNumbers from "./Components/NumbersSection/BreakNumbers";
import Services from "./Components/ServicesSection/Services/Services";
import Quotes from "./Components/QuotesSection/Quotes/Quotes";
import Portfolio from "./Components/PortfolioSection/Portfolio/Portfolio";
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <BreakNumbers />
      <Services />
      <Quotes />
      <Portfolio/>
    </div>
  );
}

export default App;
