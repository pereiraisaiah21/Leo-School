import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

/**
 * 
 * @returns 
 */

export const OurPopularCourses = () => {
    return (

        <section className="our-popular">
            <div className="our-popular__wrapper">
                <div className="our-popular__left">
                    <h2 className="our-popular__title">Our Popular</h2>
                    <p className="our-popular__description">Discover our most popular courses and join thousands of learners who have benefited from our expert-led content. Take your skills to the next level.</p>
                    <button className="our-popular__button">Explore Courses</button>
                </div>
                <div className="our-popular__right">

                    <Swiper
                        slidesPerView={windowWidth > 778 ? 1 : 1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className="our-popular__card">
                                <img src="your-image-url1.jpg" alt="Popular Course 1" />
                                <h3 className="our-popular__name">Training Courses</h3>
                                <p className="our-popular__card-description">The gradual accumulation of information about </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="our-popular__card">
                                <img src="your-image-url2.jpg" alt="Popular Course 2" />
                                <h3 className="our-popular__name">2,769 online courses	</h3>
                                <p className="our-popular__card-description">The gradual accumulation of information about </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="our-popular__card">
                                <img src="your-image-url2.jpg" alt="Popular Course 2" />
                                <h3 className="our-popular__name">Books Library	</h3>
                                <p className="our-popular__card-description">The gradual accumulation of information about </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
