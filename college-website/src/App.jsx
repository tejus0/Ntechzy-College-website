import "./App.css";
import Header from "./components/Header/Header";
import Carousal from "./components/Carousal/Carousal";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* <section className="h-screen bg-Hero bg-cover font-[Poppins] md:bg-top bg-center"> */}
      <Navbar />
      {/* <h1 className="text-5xl text-red-500 underline">Hello world!</h1> */}
      <Carousal />
      {/* </section> */}
        <About />
    </div>
  );
}

export default App;
