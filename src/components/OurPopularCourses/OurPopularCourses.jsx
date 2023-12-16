import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

/**
 * 
 * @returns 
 */

export const OurPopularCourses = () => {

    const windowWidth = window.innerWidth;

    return (

        <section className="our-popular">
            <div className="our-popular__wrapper">
                <div className="our-popular__left">
                    <h2 className="our-popular__title">
                        Our Popular
                    </h2>
                    <p className="our-popular__description">
                        Discover our most popular courses and join thousands of learners who have benefited from our expert-led content. Take your skills to the next level.
                    </p>
                    <button className="our-popular__button">
                        Explore Courses
                    </button>
                </div>
                <div className="our-popular__right">
                    <Swiper
                        slidesPerView={windowWidth > 778 ? 3 : 1}
                        spaceBetween={16}
                    >
                        <SwiperSlide>
                            <div className="our-popular__card">
                                <img src="https://via.placeholder.com/300x300" alt="Popular Course 1" />
                                <h3 className="our-popular__name">
                                    Training Cour
                                es</h3>
                                <p className="our-popular__card-description">
                                    The gradual accumulation of information about
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="our-popular__card">
                                <img src="https://via.placeholder.com/300x300" alt="Popular Course 2" />
                                <h3 className="our-popular__name">
                                    2,769 online 
                                ourses	</h3>
                                <p className="our-popular__card-description">
                                    The gradual accumulation of information about
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="our-popular__card">
                                <img src="https://via.placeholder.com/300x300" alt="Popular Course 2" />
                                <h3 className="our-popular__name">
                                    Books Library
                                </h3>
                                <p className="our-popular__card-description">
                                    The gradual accumulation of information about
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
