
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Index from "./pages/Index/Index";
import About from "./pages/About/About";
import Courses from "./pages/Courses/Courses";
import SuccessStories from "./pages/SuccessStories/SuccessStories";
import Methodology from "./pages/Methodology/Methodology";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Navigation />
    <div className="page-content">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;