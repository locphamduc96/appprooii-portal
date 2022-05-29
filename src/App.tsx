import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import ScrollToTop from './Component/ScrollToTop';
import ScrollToTopButton from './Component/ScrollToTopButton';
import AboutUsPage from './Page/AboutUs';
import BlogPage from './Page/Blog';
import BlogDetailsPage from './Page/Blog/BlogDetails';
import CaseStudyPage from './Page/CaseStudy';
import ContactUsPage from './Page/ContactUs';
import HomePage from './Page/Home';
import ServicesPage from './Page/ServicesPage';
import ServicesPageRouter from './Page/ServicesPage/ServicesPageRouter';
import './Style/app.scss';

//  GITHUB pages use hash router
function App() {
  return (
    <div className='body'>
      {/* <HashRouter> */}
      <BrowserRouter>
        <NavBar />
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutUsPage />} />

            <Route path='/services' element={<ServicesPage />} />
            <Route path='/services/:name' element={<ServicesPageRouter />} />

            <Route path='/case-study' element={<CaseStudyPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/blog/:id' element={<BlogDetailsPage />} />
            <Route path='/contact' element={<ContactUsPage />} />
          </Routes>
        </ScrollToTop>
        <Footer />
        <ScrollToTopButton />
      </BrowserRouter>
      {/* </HashRouter> */}
    </div>
  );
}

export default App;
