import Pricing from './pages/Pricing';
import Blogs from './pages/Blogs';
import AICustomerService from './pages/blog/AICustomerService';
import TwentyFourSevenCallAnswering from './pages/blog/TwentyFourSevenCallAnswering';
import ManageBusinessCalls from './pages/blog/ManageBusinessCalls';
import BilingualAnswering from './pages/blog/BilingualAnswering';
import VirtualReceptionists from './pages/blog/VirtualReceptionists';
import ChooseAnsweringService from './pages/blog/ChooseAnsweringService';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import CallAnsweringService from './pages/CallAnsweringService';
import BilingualAnsweringService from './pages/BilingualAnsweringService';
import CallHandlingService from './pages/CallHandlingService';
import AfterHoursAnsweringService from './pages/AfterHoursAnsweringService';
import AIReceptionist from './pages/AIReceptionist';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmallBusinesses from './pages/SmallBusinesses';
import Plumbing from './pages/Plumbing';
import HVAC from './pages/HVAC';
import Construction from './pages/Construction';
import Accounting from './pages/Accounting';
import RealEstate from './pages/RealEstate';
import LawFirms from './pages/LawFirms';
import PropertyManagement from './pages/PropertyManagement';
import HomeServices from './pages/HomeServices';
import Electricians from './pages/Electricians';
import AllIndustries from './pages/AllIndustries';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div style={{minHeight: '80vh'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/call-answering-service" element={<CallAnsweringService />} />
          <Route path="/bilingual-answering-service" element={<BilingualAnsweringService />} />
          <Route path="/call-handling-service" element={<CallHandlingService />} />
          <Route path="/after-hours-answering-service" element={<AfterHoursAnsweringService />} />
          <Route path="/ai-receptionist" element={<AIReceptionist />} />
          <Route path="/small-businesses" element={<SmallBusinesses />} />
          <Route path="/plumbing" element={<Plumbing />} />
          <Route path="/hvac" element={<HVAC />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/law-firms" element={<LawFirms />} />
          <Route path="/property-management" element={<PropertyManagement />} />
          <Route path="/home-services" element={<HomeServices />} />
          <Route path="/electricians" element={<Electricians />} />
          <Route path="/all-industries" element={<AllIndustries />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/ai-customer-service" element={<AICustomerService />} />
          <Route path="/blog/24-7-call-answering" element={<TwentyFourSevenCallAnswering />} />
          <Route path="/blog/manage-business-calls" element={<ManageBusinessCalls />} />
          <Route path="/blog/bilingual-answering" element={<BilingualAnswering />} />
          <Route path="/blog/virtual-receptionists" element={<VirtualReceptionists />} />
          <Route path="/blog/choose-answering-service" element={<ChooseAnsweringService />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
