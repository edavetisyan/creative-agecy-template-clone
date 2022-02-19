import "./App.css";
import Header from "./Components/HeaderSection/Header/Header";
import About from "./Components/AboutSection/About/About"
import BreakNumbers from "./Components/NumbersSection/BreakNumbers";
function App() {
  return (
    <div className="App">
      <Header />
      <About/>
      <BreakNumbers/>
    </div>
  );
}

export default App;
