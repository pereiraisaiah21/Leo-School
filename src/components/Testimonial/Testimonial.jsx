import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

/**
 * 
 * @returns 
 */

export const Testimonial = () => {

    const windowWidth = window.innerWidth;

    return (

        <section className="testimonials">
            <div className="testimonials__wrapper">
                <span className="testimonials__subtitle">
                    Testimonials
                </span>
                <h2 className="testimonials__title">
                    Quality Education
                </h2>
                <p className="testimonials__description">
                    What our learners say about the quality of education provided.
                </p>
                <div className="testimonials__cards">

                    <Swiper
                        slidesPerView={windowWidth > 778 ? 1 : 1}
                    >
                        <SwiperSlide>
                            <div className="testimonials__card">
                                <div className="testimonials__rating">
                                    <span className="testimonials__star">&#9733;</span>
                                    <span className="testimonials__star">&#9733;</span>
                                    <span className="testimonials__star">&#9733;</span>
                                    <span className="testimonials__star">&#9733;</span>
                                    <span className="testimonials__star">&#9733;</span>
                                </div>
                                <p className="testimonials__commentary">"Exceptional courses! The content is well-structured and the instructors are knowledgeable. Highly recommended!"</p>
                                <div className="testimonials__info">
                                    <div className="testimonials__icon">
                                    </div>
                                    <div className="testimonials__details">
                                        <p className="testimonials__name">John Doe</p>
                                        <p className="testimonials__profile">Web Developer</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonials__card">
                                <div className="testimonials__rating">
                                    <span className="testimonials__star">&#9733;</span>
                                    <span className="testimonials__star">&#9733;</span>
                                    <span className="testimonials__star">&#9733;</span>
                                    <span className="testimonials__star">&#9733;</span>
                                    <span className="testimonials__star">&#9733;</span>
                                </div>
                                <p className="testimonials__commentary">"Exceptional courses! The content is well-structured and the instructors are knowledgeable. Highly recommended!"</p>
                                <div className="testimonials__info">
                                    <div className="testimonials__icon">
                                    </div>
                                    <div className="testimonials__details">
                                        <p className="testimonials__name">John Doe</p>
                                        <p className="testimonials__profile">Web Developer</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonials__card">
                                <div className="testimonials__rating">
                                    <span className="testimonials__star">&#9733;</span>
                                    <span className="testimonials__star">&#9733;</span>
                                    <span className="testimonials__star">&#9733;</span>
                                    <span className="testimonials__star">&#9733;</span>
                                    <span className="testimonials__star">&#9733;</span>
                                </div>
                                <p className="testimonials__commentary">"Exceptional courses! The content is well-structured and the instructors are knowledgeable. Highly recommended!"</p>
                                <div className="testimonials__info">
                                    <div className="testimonials__icon">
                                    </div>
                                    <div className="testimonials__details">
                                        <p className="testimonials__name">John Doe</p>
                                        <p className="testimonials__profile">Web Developer</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonials__card">
                                <div className="testimonials__rating">
                                    <span className="testimonials__star">&#9733;</span>
                                    <span className="testimonials__star">&#9733;</span>
                                    <span className="testimonials__star">&#9733;</span>
                                    <span className="testimonials__star">&#9733;</span>
                                    <span className="testimonials__star">&#9733;</span>
                                </div>
                                <p className="testimonials__commentary">"Exceptional courses! The content is well-structured and the instructors are knowledgeable. Highly recommended!"</p>
                                <div className="testimonials__info">
                                    <div className="testimonials__icon">
                                    </div>
                                    <div className="testimonials__details">
                                        <p className="testimonials__name">John Doe</p>
                                        <p className="testimonials__profile">Web Developer</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
