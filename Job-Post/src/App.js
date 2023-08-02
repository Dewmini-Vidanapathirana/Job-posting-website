
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Main from './components/LandingPage/Main';
import Navbar from './components/Navbar';
import ScrollToTop from "react-scroll-to-top";
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/LandingPage/About';
import Job from './components/LandingPage/Job';
import AdminsHome from './components/Admin/AdminsHome';
import PostAjob from './components/Admin/PostAjob';
import { ToastContainer } from 'react-toastify';
import ContactUs from './components/LandingPage/ContactUs';


function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/job" element={<Job />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="Admin/postajob" element={<PostAjob />} />
          <Route path="/admin" element={<AdminsHome />} />

        </Routes>
        <ScrollToTop smooth />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
