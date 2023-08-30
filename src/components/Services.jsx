import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        showStatus={false}
        autoPlay
        showArrows={false}
        interval={1000}
        showThumbs={false}
      >
        <div>
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/125/969/desktop-wallpaper-web-development-posted-by-sarah-anderson-full-stack.jpg"
            alt="Item1"
          />
          <p className="legend">Full Stack</p>
        </div>

        <div>
          <img src="https://wallpapercave.com/wp/wp11346453.jpg" alt="Item2" />
          <p className="legend">Peer to Peer Support</p>
        </div>

        <div>
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/125/969/desktop-wallpaper-web-development-posted-by-sarah-anderson-full-stack.jpg"
            alt="Item1"
          />
          <p className="legend">Full Stack</p>
        </div>

        <div>
          <img src="https://wallpapercave.com/wp/wp11346453.jpg" alt="Item2" />
          <p className="legend">Peer to Peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
