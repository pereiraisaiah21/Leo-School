/**
 * 
 * @returns 
 */

export const Newsletter = () => {

    return (

        <section className="newsletter">
            <div className="newsletter__wrapper">
                <span className="newsletter__subtitle">
                    Subscribe to Our Newsletter
                </span>
                <h2 className="newsletter__title">
                    Get the latest updates
                </h2>
                <p className="newsletter__description">
                    Subscribe to our newsletter for news, updates, and special offers.
                    </p>
                <div className="newsletter__form">
                    <input type="email" placeholder="Your email address" className="newsletter__input" />
                    <button className="newsletter__button">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    )
}
