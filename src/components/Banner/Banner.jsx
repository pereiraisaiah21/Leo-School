/**
 * 
 * @returns 
 */

export const Banner = () => {
    return (

        <section className="banner">
            <div className="banner__wrapper">
                <div className="banner__left">
                    <span className="banner__subtitle">
                        For better future
                    </span>
                    <h1 className="banner__title">
                        HIGH QUALITY COURSES
                    </h1>
                    <p className="banner__description">
                        Find the right instructor for you from over 10,000 teachers
                    </p>
                    <div className="banner__buttons">
                        <button className="banner__button banner__button--get">
                            Get Quote Now
                        </button>
                        <button className="banner__button">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="banner__right">
                    {/* <img src={Background} alt="Banner Image" /> */}
                </div>
            </div>
        </section>
    )
}
