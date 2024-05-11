import "./App.css";
import Header from "./components/Header/Header";
import Carousal from "./components/Carousal/Carousal";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <h1 className="text-5xl text-red-500 underline">Hello world!</h1> */}
      <Carousal />
        <About />
    </div>
  );
}

export default App;
