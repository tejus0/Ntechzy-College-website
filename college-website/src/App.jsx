import "./App.css";
import Header from "./components/Header/Header";
import Carousal from "./components/Carousal/Carousal";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/ActiveSlider/Slider";
import  {Advantages}  from "./pages/Advantages/Advantages";
import About2 from "./pages/About/About2/About2";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <div className="App">
      {/* <section className="h-screen bg-Hero bg-cover font-[Poppins] md:bg-top bg-center"> */}
      <Navbar />
      {/* <h1 className="text-5xl text-red-500 underline">Hello world!</h1> */}
      <Carousal />
      {/* </section> */}
        <About />
        <Slider />
        <Advantages />
        <FAQ />

    </div>
  );
}

export default App;
