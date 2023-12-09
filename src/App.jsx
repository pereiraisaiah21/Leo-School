
import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import { WatchOurCourses } from './components/WatchOurCourses/WatchOurCourses'
import { OurPopularCourses } from './components/OurPopularCourses/OurPopularCourses'
import { ClientMatter } from './components/ClientMatter/ClientMatter'
import { Testimonial } from './components/Testimonial/Testimonial'
import { FAQ } from './components/FAQ/FAQ';
import { Newsletter } from './components/Newsletter/Newsletter'
import { Footer } from './components/Footer/Footer'

import './App.css'
import 'swiper/css'

/**
 * 
 * @returns 
 */

function App() {

    return (
        <>

            <Header />
            <Banner />
            <WatchOurCourses />
            <OurPopularCourses />
            <ClientMatter />
            <Testimonial />
            <FAQ />
            <Newsletter />
            <Footer />

        </>
    )
}

export default App
