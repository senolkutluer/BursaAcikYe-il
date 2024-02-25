import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import plaj1 from './../assets/plaj1.webp';
import plaj2 from './../assets/plaj2.webp';
import plaj3 from './../assets/plaj3.webp';
import plaj4 from './../assets/plaj4.webp';
import plaj5 from './../assets/plaj5.jpg';
import plaj6 from './../assets/plaj6.jpg';
import plaj7 from './../assets/plaj7.webp';
import plaj8 from './../assets/plaj8.webp';
import plaj9 from './../assets/plaj9.jpg';
import plaj10 from './../assets/plaj10.jpg';
import plaj11 from './../assets/plaj11.jpg';
import plaj12 from './../assets/plaj12.webp';
import plaj13 from './../assets/plaj13.webp';
import plaj14 from './../assets/plaj14.jpg';
import plaj15 from './../assets/plaj15.webp';
import plaj16 from './../assets/plaj16.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2500,
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img className="w-full h-[1100px] object-cover" src={plaj1} alt="plaj1 1" />
        </div>
        <div>
          <img className="w-full h-[1100px] object-cover" src={plaj2} alt="plaj2 2" />
        </div>
        <div>
          <img className="w-full h-[1100px] object-cover" src={plaj3} alt="plaj3 3" />
        </div>
        <div>
          <img className="w-full h-[1100px] object-cover" src={plaj4} alt="plaj4 4" />
        </div>
        <div>
          <img className="w-full h-[1100px] object-cover" src={plaj5} alt="plaj5 5" />
        </div>
        <div>
          <img className="w-full h-[1100px] object-cover" src={plaj6} alt="plaj6 6" />
        </div>
        <div>
          <img className="w-full h-[1100px] object-cover" src={plaj7} alt="plaj7 7" />
        </div>
        <div>
          <img className="w-full h-[1100px] object-cover" src={plaj8} alt="plaj8 8" />
        </div>
        <div>
          <img className="w-full h-[1100px] object-cover" src={plaj9} alt="plaj9 9" />
        </div>
        <div>
          <img className="w-full h-[1100px] object-cover" src={plaj10} alt="plaj10 10" />
        </div>
        <div>
          <img className="w-full h-[1100px] object-cover" src={plaj11} alt="plaj11 11" />
        </div>
        <div>
          <img className="w-full h-[1100px] object-cover" src={plaj12} alt="plaj12 12" />
        </div>
        <div>
          <img className="w-full h-[1100px] object-cover" src={plaj13} alt="plaj13 13" />
        </div>
        <div>
          <img className="w-full h-[1100px] object-cover" src={plaj14} alt="plaj14 14" />
        </div>
        <div>
          <img className="w-full h-[1100px] object-cover" src={plaj15} alt="plaj15 15" />
        </div>
        <div>
          <img className="w-full h-[1100px] object-cover" src={plaj16} alt="plaj16 16" />
        </div>
      </Slider>
      <button className="absolute top-1/2 left-4 text-white text-6xl focus:outline-none" onClick={() => sliderRef.current.slickPrev()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button className="absolute top-1/2 right-4 text-white text-6xl focus:outline-none" onClick={() => sliderRef.current.slickNext()}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Home;
