import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Residency.css';
import data from '../../utils/slider.json';
import Card from '../reusable/Card';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { sliderSettings } from '../../utils/sliderConfig';
import 'swiper/swiper-bundle.css';

const Residency = () => {
  let swiper;

  const setSwiper = (swiperInstance) => {
    swiper = swiperInstance;
  };

  const slidePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <section className="r-wrapper">
      <div className=" innerWidth r-container">
        <div className="text-cont ">
          <div className="r-head flexColStart">
            <span className="orange-text"> Best Choices</span>
            <span className="big-text"> Popular Destinations</span>
          </div>
          <div className='slider_buttons'>
            <button className='button-slider'  onClick={slidePrev}>
              <FaArrowLeftLong size={25} />
            </button>
            
            <button className='button-slider' onClick={slideNext}>
              <FaArrowRightLong size={25} />
            </button>
          </div>
        </div>

        <Swiper {...sliderSettings} onSwiper={setSwiper}>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card">
                <Card
                  image={card.image}
                  detail={card.detail}
                  name={card.name}
                  price={card.price}
                  description = {card.description}
                ></Card>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residency;

