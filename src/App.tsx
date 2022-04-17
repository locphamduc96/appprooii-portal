import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import ScrollToTop from './Component/ScrollToTop';
import AboutUsPage from './Page/AboutUs';
import CaseStudyPage from './Page/CaseStudy';
import ContactUsPage from './Page/ContactUs';
import HomePage from './Page/Home';
import NewsPage from './Page/News';
import ServicesPage from './Page/ServicesPage';
import AppStoreOptimisation from './Page/ServicesPage/AppStoreOptimisation';
import ValuePropotionDesign from './Page/ServicesPage/ValuePropotionDesign';
import './Style/app.scss';

function App() {
  return (
    <div className='body'>
      <BrowserRouter>
        <NavBar />
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutUsPage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route
              path='/services/value-propotion-design'
              element={<ValuePropotionDesign />}
            />
            <Route
              path='/services/app-store-optimisation'
              element={<AppStoreOptimisation />}
            />
            <Route path='/case-study' element={<CaseStudyPage />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/contact' element={<ContactUsPage />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;