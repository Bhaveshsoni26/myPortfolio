import { content } from '../Content';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import { useState } from 'react';

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return <section>
    <div className='md:container px-5 pt-14'>
      <h2 className='md:text-3x1 text-2x1' data-aos='fade-down'>{Testimonials.title}</h2>
      <h4 className='text-gray' data-aos='fade-down'>{Testimonials.subtitle}</h4>
      <br />
      <Swiper  
          direction={'vertical'}
          pagination={{ 
          clickable: true, 
         }} 
         data-aos='fade-up'
         loop={true}
         spaceBetween={40} 
         slidesPerView={1.7}
         onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
         }}
         modules={[Pagination]} 
         className='md:h-96 h-[40rem] max-w-3xl'
        >
        {
          Testimonials.testimonials_content.map((content, index) => (
            <SwiperSlide key={index}>
              <div className={`duration-500 bg-bg_light_primary mx-8 border-2  p-8 h-full rounded-2xl flex items-center gap-6 border-slate-200 selection-none md:flex-row flex-col ${activeIndex !== index && 'scale-75 blur-sm'}`}>
                <img src={content.img} alt="..." className='h-24' />
                <div>
                  <p className='sm:text-base text-sm selection-none'>{content.review}</p>
                  <br />
                  <h6>{content.name}</h6>
                </div>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>;
};

export default Testimonials;
