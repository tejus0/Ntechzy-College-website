import "./App.css";
import Header from "./components/Header/Header";
// import Carousal from "./components/Carousal/Carousal";
import Carousel from "./components/Carousal/Carousal";
// import About from "./pages/About/About";
import About from "./pages/About/About3/About";
import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar/Navbar2/Navbar";
import Slider from "./pages/Glipmse/Slider";
import { Advantages } from "./pages/Advantages/Advantages";
import About2 from "./pages/About/About2/About2";
import FAQ from "./components/FAQ/FAQ";
import Events from "./pages/Events/Events";
import Gallery from "./pages/Gallery/Gallery";
import Notices from "./pages/Notices/Notices";
import Testimonials from "./pages/Testimonials/Testimonials";
import Sponsors from "./pages/Sponsors/Sponsors";
import Testimonials1 from "./pages/Testimonials/Testimonials1";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      {/* <section className="h-screen bg-Hero bg-cover font-[Poppins] md:bg-top bg-center"> */}
      <Navbar2 />
      {/* <h1 className="text-5xl text-red-500 underline">Hello world!</h1> */}
      <Carousel />
      {/* </section> */}
      <About />
      <Slider />
      <Advantages />
      <Gallery />
      <Notices />
      {/* <Testimonials /> */}
      <Testimonials1 />
      <Sponsors />
      <FAQ />
      <Footer />
      {/* <Events /> */}
    </div>
  );
}

export default App;
