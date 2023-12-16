import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import ProductImage from "../../assets/ProductImage.png"

/**
 * 
 * @returns 
 */

export const ClientMatter = () => {

    const windowWidth = window.innerWidth;

    return (

        <section className="every-client-matter">
            <div className="every-client-matter__wrapper">
                <span className="every-client-matter__subtitle">
                    Every Client Matter
                </span>
                <h2 className="every-client-matter__title">
                    Title
                </h2>
                <p className="every-client-matter__short-description">
                    Problems trying to resolve the conflict between  the two major realms of Classical physics: Newtonian mechanics </p>
                <div className="every-client-matter__cards">
                    <Swiper
                        slidesPerView={windowWidth > 778 ? 4 : 1}
                        spaceBetween={16}
                    >
                        <SwiperSlide>
                            <div className="every-client-matter__card">
                                <img src={ProductImage} alt="Client Matter Image 1" />
                                <div className="every-client-matter__info">
                                    <div className="every-client-matter__seal">
                                        Sale
                                    </div>
                                    <header className="every-client-matter__header">
                                        <span className="every-client-matter__join-us">

                                            Join Us
                                        </span>
                                        <div className="every-client-matter__star-rating">
                                            <span className="every-client-matter__star">&#9733;</span>
                                            <span className="every-client-matter__rating-note">
                                                4.5
                                            </span>
                                        </div>
                                    </header>
                                    <h3 className="every-client-matter__card-title">
                                        Card Title 1
                                    </h3>
                                    <p className="every-client-matter__card-description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    <p className="every-client-matter__download">
                                        Downloads: 1000+
                                    </p>
                                    <button className="every-client-matter__learn-more">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="every-client-matter__card">
                                <img src={ProductImage} alt="Client Matter Image 1" />
                                <div className="every-client-matter__info">
                                    <div className="every-client-matter__seal">
                                        Sale
                                    </div>
                                    <header className="every-client-matter__header">
                                        <span className="every-client-matter__join-us">

                                            Join Us
                                        </span>
                                        <div className="every-client-matter__star-rating">
                                            <span className="every-client-matter__star">&#9733;</span>
                                            <span className="every-client-matter__rating-note">
                                                4.5
                                            </span>
                                        </div>
                                    </header>
                                    <h3 className="every-client-matter__card-title">
                                        Card Title 1
                                    </h3>
                                    <p className="every-client-matter__card-description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    <p className="every-client-matter__download">
                                        Downloads: 1000+
                                    </p>
                                    <button className="every-client-matter__learn-more">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="every-client-matter__card">
                                <img src={ProductImage} alt="Client Matter Image 1" />
                                <div className="every-client-matter__info">
                                    <div className="every-client-matter__seal">
                                        Sale
                                    </div>
                                    <header className="every-client-matter__header">
                                        <span className="every-client-matter__join-us">

                                            Join Us
                                        </span>
                                        <div className="every-client-matter__star-rating">
                                            <span className="every-client-matter__star">&#9733;</span>
                                            <span className="every-client-matter__rating-note">
                                                4.5
                                            </span>
                                        </div>
                                    </header>
                                    <h3 className="every-client-matter__card-title">
                                        Card Title 1
                                    </h3>
                                    <p className="every-client-matter__card-description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    <p className="every-client-matter__download">
                                        Downloads: 1000+
                                    </p>
                                    <button className="every-client-matter__learn-more">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="every-client-matter__card">
                                <img src={ProductImage} alt="Client Matter Image 1" />
                                <div className="every-client-matter__info">
                                    <div className="every-client-matter__seal">
                                        Sale
                                    </div>
                                    <header className="every-client-matter__header">
                                        <span className="every-client-matter__join-us">

                                            Join Us
                                        </span>
                                        <div className="every-client-matter__star-rating">
                                            <span className="every-client-matter__star">&#9733;</span>
                                            <span className="every-client-matter__rating-note">
                                                4.5
                                            </span>
                                        </div>
                                    </header>
                                    <h3 className="every-client-matter__card-title">
                                        Card Title 1
                                    </h3>
                                    <p className="every-client-matter__card-description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    <p className="every-client-matter__download">
                                        Downloads: 1000+
                                    </p>
                                    <button className="every-client-matter__learn-more">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
