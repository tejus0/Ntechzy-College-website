import React from "react";
import bannerImage from "../../assets/Header/banner_homepage_01.jpg"

const Hero = () => {
  return (
    <div className="w-full">
      <img
        className="top-0 left-0 w-full max-h-[50vh] object-cover"
        src={bannerImage}
        alt="/"
      />
      {/* <div className="top-[20vh] sm:top-[40vh] absolute flex flex-col justify-center text-white sm:left-[10%] md:left-[10%] md:top-[35vh] max-w-[1100px] m-auto p-4">
        <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
          Private Beaches & Getaways
        </h1>
        <button class=" w-[10rem] bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-2 square-full">
          Button
        </button>
      </div> */}
    </div>
  );
};

export default Hero;

// import "./Carousal.css";
// import Logo from "../../assets/logo.webp";
// import image1 from "../../assets/Events/BloodDonation1.jpg"
// import image2 from "../../assets/Events/Cataract.jpg"
// // import image1 from "../../assets/carousel-Image1.jpg";
// // import image2 from "../../assets/carousel-Image2.jpg";
// // import image3 from "../../assets/carousel-Image3.jpg";
// // import React from "../../assets/react.svg";

// function Carousal() {
//   return (
//     <div>
//       <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner h-[30vh]">
//     <div class="carousel-item carousel-image bg-img-1 active">
//       <img src={image1} class="ml-auto object-cover d-block" alt=""/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>First slide label</h5>
//         <p>Some representative placeholder content for the first slide.</p>
//       </div>
//     </div>
//     <div class="carousel-item carousel-image bg-img-2">
//       <img src={image2} class="h-8 pr-1 mx-auto object-cover d-block" alt=""/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>Second slide label</h5>
//         <p>Some representative placeholder content for the second slide.</p>
//       </div>
//     </div>
//     <div class="carousel-item carousel-image bg-img-3">
//       <img src={image1} class="ml-auto object-cover d-block w-100" alt=""/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>Third slide label</h5>
//         <p>Some representative placeholder content for the third slide.</p>
//       </div>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//     {/* <Carousel>
//       <Carousel.Item>
//         <img style={{height:'60vh'}} classNameName="carousel-image d-block w-100" src={image1} alt="first" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img style={{height:'60vh'}} classNameName="d-block w-100" src={image2} alt="second" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img style={{height:'60vh'}} classNameName="d-block w-100" src={image3} alt="third" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel> */}

//     </div>
//   );
// }

// export default Carousal;
