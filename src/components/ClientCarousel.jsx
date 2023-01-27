import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ClientCarousel = () => {
 const options={
    loop: true,
    margin:10,
    nav:true,
    autoPlay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        },
    },
}

  return (
       <OwlCarousel className="owl-theme" {...options}>
        <div class="item">
          <img src="./images/client-1.jpg" className="carousel-img" alt="" />
          <p className="carousel-para">
            Gay own additions education satisfied the perpetual. If he cause
            manor happy. Without farther she exposed saw man led. Along on happy
            could cease green oh.
          </p>
          <h4>MARIA JUCEY</h4>
          <i>Managing Director, Google</i>
        </div>
        <div class="item">
          <img src="./images/client-2.jpg" className="carousel-img" alt="" />
          <p className="carousel-para">
            Gay own additions education satisfied the perpetual. If he cause
            manor happy. Without farther she exposed saw man led. Along on happy
            could cease green oh.
          </p>
          <h4>MARIA JUCEY</h4>
          <i>Managing Director, Google</i>
        </div>
      </OwlCarousel>
  );
};

export default ClientCarousel;
