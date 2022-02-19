import "./App.css";
import Header from "./Components/HeaderSection/Header/Header";
import About from "./Components/AboutSection/About/About"
import BreakNumbers from "./Components/NumbersSection/BreakNumbers";
import Services from "./Components/ServicesSection/Services/Services";
function App() {
  return (
    <div className="App">
      <Header />
      <About/>
      <BreakNumbers/>
      <Services/>
    </div>
  );
}

export default App;
