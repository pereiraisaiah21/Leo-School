import { useState } from 'react'
import './App.css'
import Background  from "./assets/background.png"
import Background1  from "./assets/product.png"

function App() {

  return (
    <>

      <header className="header">
        <div className="header__wrapper">
          <div className="header__brand">Brand Name</div>
          <nav className="header__pages">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
          <div className="header__buttons">
            <button className="header__button">Login</button>
            <button className="header__button header__button--join">Join us</button>
          </div>
        </div>
      </header>

      <section className="banner">
        <div className="banner__wrapper">
          <div className="banner__left">
            <span className="banner__subtitle">For better future</span>
            <h1 className="banner__title">HIGH QUALITY COURSES</h1>
            <p className="banner__description">Find the right instructor for you from over 10,000 teachers</p>
            <div className="banner__buttons">
              <button className="banner__button banner__button--get">Get Quote Now</button>
              <button className="banner__button">Learn More</button>
            </div>
          </div>
          <div className="banner__right">
            {/* <img src={Background} alt="Banner Image" /> */}
          </div>
        </div>
      </section>

      <section className="watch-courses">
        <div className="watch-courses__wrapper">
          <div className="watch-courses__left">
            {/* <img src="your-image-url.jpg" alt="Courses Image" /> */}
          </div>
          <div className="watch-courses__right">
            <h2 className="watch-courses__title">Watch Our Courses</h2>
            <p className="watch-courses__description">Explore a variety of courses designed to enhance your knowledge and skills. Learn from experts in the field and stay ahead in your career.</p>
            <button className="watch-courses__button">Learn More</button>
          </div>
        </div>
      </section>


      <section className="our-popular">
        <div className="our-popular__wrapper">
          <div className="our-popular__left">
            <h2 className="our-popular__title">Our Popular</h2>
            <p className="our-popular__description">Discover our most popular courses and join thousands of learners who have benefited from our expert-led content. Take your skills to the next level.</p>
            <button className="our-popular__button">Explore Courses</button>
          </div>
          <div className="our-popular__right">
            <div className="our-popular__card">
              <img src="your-image-url1.jpg" alt="Popular Course 1" />
              <h3 className="our-popular__name">training Courses</h3>
              <p className="our-popular__card-description">The gradual
                accumulation of
                information about </p>
            </div>
            <div className="our-popular__card">
              <img src="your-image-url2.jpg" alt="Popular Course 2" />
              <h3 className="our-popular__name">2,769 online courses	</h3>
              <p className="our-popular__card-description">The gradual
                accumulation of
                information about </p>
            </div>
            <div className="our-popular__card">
              <img src="your-image-url2.jpg" alt="Popular Course 2" />
              <h3 className="our-popular__name">Books Liberary	</h3>
              <p className="our-popular__card-description">The gradual
                accumulation of
                information about </p>
            </div>
          </div>
        </div>
      </section>


      <section className="every-client-matter">
        <div className="every-client-matter__wrapper">
          <span className="every-client-matter__subtitle">Every Client Matter</span>
          <h2 className="every-client-matter__title">Title</h2>
          <p className="every-client-matter__short-description">Problems trying to resolve the conflict between  the two major realms of Classical physics: Newtonian mechanics </p>
          <div className="every-client-matter__cards">
            <div className="every-client-matter__card">
              <img src={Background1} alt="Client Matter Image 1" />
              <div className="every-client-matter__info">
                <div className="every-client-matter__seal">Sale</div>
                <header className="every-client-matter__header">
                  <span className="every-client-matter__join-us">Join Us</span>
                  <div className="every-client-matter__star-rating">
                    <span className="every-client-matter__star">&#9733;</span>
                    <span className="every-client-matter__rating-note">4.5</span>
                  </div>
                </header>
                <h3 className="every-client-matter__card-title">Card Title 1</h3>
                <p className="every-client-matter__card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="every-client-matter__download">Downloads: 1000+</p>
                <button className="every-client-matter__learn-more">Learn More</button>
              </div>
            </div>
            <div className="every-client-matter__card">
              <img src={Background1} alt="Client Matter Image 2" />
              <div className="every-client-matter__info">
                <div className="every-client-matter__seal">Sale</div>
                <header className="every-client-matter__header">
                  <span className="every-client-matter__join-us">Join Us</span>
                  <div className="every-client-matter__star-rating">
                    <span className="every-client-matter__star">&#9733;</span>
                    <span className="every-client-matter__rating-note">4.5</span>
                  </div>
                </header>
                <h3 className="every-client-matter__card-title">Card Title 2</h3>
                <p className="every-client-matter__card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="every-client-matter__download">Downloads: 800+</p>
                <button className="every-client-matter__learn-more">Learn More</button>
              </div>
            </div>
            <div className="every-client-matter__card">
              <img src={Background1} alt="Client Matter Image 3" />
              <div className="every-client-matter__info">
                <div className="every-client-matter__seal">Sale</div>
                <header className="every-client-matter__header">
                  <span className="every-client-matter__join-us">Join Us</span>
                  <div className="every-client-matter__star-rating">
                    <span className="every-client-matter__star">&#9733;</span>
                    <span className="every-client-matter__rating-note">4.5</span>
                  </div>
                </header>
                <h3 className="every-client-matter__card-title">Card Title 3</h3>
                <p className="every-client-matter__card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="every-client-matter__download">Downloads: 1200+</p>
                <button className="every-client-matter__learn-more">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials__wrapper">
          <span className="testimonials__subtitle">Testimonials</span>
          <h2 className="testimonials__title">Quality Education</h2>
          <p className="testimonials__description">What our learners say about the quality of education provided.</p>
          <div className="testimonials__cards">
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
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="faq__wrapper">
          <h2 className="faq__title">Frequently Asked Questions</h2>
          <p className="faq__description">Find answers to common questions below.</p>
          <div className="faq__cards">
            <div className="faq__card">
              <span className="faq__arrow">&rarr;</span>
              <p className="faq__question">Question 1: What is Lorem Ipsum?</p>
              <p className="faq__answer">Lorem Ipsum dolor sit amet</p>
            </div>
            <div className="faq__card">
              <span className="faq__arrow">&rarr;</span>
              <p className="faq__question">Question 1: What is Lorem Ipsum?</p>
              <p className="faq__answer">Lorem Ipsum dolor sit amet</p>
            </div>
            <div className="faq__card">
              <span className="faq__arrow">&rarr;</span>
              <p className="faq__question">Question 1: What is Lorem Ipsum?</p>
              <p className="faq__answer">Lorem Ipsum dolor sit amet</p>
            </div>
            <div className="faq__card">
              <span className="faq__arrow">&rarr;</span>
              <p className="faq__question">Question 1: What is Lorem Ipsum?</p>
              <p className="faq__answer">Lorem Ipsum dolor sit amet</p>
            </div>
            <div className="faq__card">
              <span className="faq__arrow">&rarr;</span>
              <p className="faq__question">Question 1: What is Lorem Ipsum?</p>
              <p className="faq__answer">Lorem Ipsum dolor sit amet</p>
            </div>
            <div className="faq__card">
              <span className="faq__arrow">&rarr;</span>
              <p className="faq__question">Question 2: How do I get started?</p>
              <p className="faq__answer">Lorem Ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter__wrapper">
          <span className="newsletter__subtitle">Subscribe to Our Newsletter</span>
          <h2 className="newsletter__title">Get the latest updates</h2>
          <p className="newsletter__description">Subscribe to our newsletter for news, updates, and special offers.</p>
          <div className="newsletter__form">
            <input type="email" placeholder="Your email address" className="newsletter__input" />
            <button className="newsletter__button">Subscribe</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__pages">
            <div className="footer__section">
              <h3 className="footer__section-title">About Us</h3>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Mission</a></li>
                <li><a href="#">Team</a></li>
              </ul>
            </div>
            <div className="footer__section">
              <h3 className="footer__section-title">Services</h3>
              <ul>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Marketing</a></li>
              </ul>
            </div>
            <div className="footer__section">
              <h3 className="footer__section-title">Contact</h3>
              <ul>
                <li><a href="#">Support</a></li>
                <li><a href="#">Sales</a></li>
                <li><a href="#">General Inquiries</a></li>
              </ul>
            </div>
            <div className="footer__section">
              <h3 className="footer__section-title">Resources</h3>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <p className="footer__made-with-love">Made with ❤️ by Your Company</p>
            <div className="footer__social-icons">
              <a href="#" className="footer__social-icon"><img src="icon-facebook.png" alt="Facebook" /></a>
              <a href="#" className="footer__social-icon"><img src="icon-twitter.png" alt="Twitter" /></a>
              <a href="#" className="footer__social-icon"><img src="icon-instagram.png" alt="Instagram" /></a>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default App
