import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Offer from "./pages/Offer";
import Comments from "./pages/Comments";
import Faq from "./pages/Faq";
import Myths from "./pages/Myths";
import Facts from "./pages/Facts";
import Outline from "./pages/Outline";
import Packages from "./pages/Packages";
import Motorcycle from "./pages/Motorcycle";
import Competitors from "./pages/Competitors";
import Licence from "./pages/Licence";
import Advice from "./pages/Advice";
import Glp from "./pages/Glp";
import Testing from "./pages/Testing";
import Blog from "./pages/Blog";
import GlpCalendar from "./pages/GlpCalendar";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="what-we-offer" element={<Offer />} />
          <Route path="what-past-student-have-to-say" element={<Comments />} />
          <Route path="faq" element={<Faq />} />
          <Route path="faq/road-safety-myths" element={<Myths />} />
          <Route path="faq/fun-driving-car-facts" element={<Facts />} />
          <Route path="course-outline" element={<Outline />} />
          <Route path="course-packages" element={<Packages />} />
          <Route path="motorcycle-training" element={<Motorcycle />} />
          <Route path="our-competitors" element={<Competitors />} />
          <Route path="license-classes-in-b-c" element={<Licence />} />
          <Route path="driving-advice" element={<Advice />} />
          <Route path="glp-info" element={<Glp />} />
          <Route path="glp-theory-calendar" element={<GlpCalendar />} />
          <Route path="testing-advice" element={<Testing />} />
          <Route path="brush-up-on-motorcycle-safety-before-hitting-the-road" element={<Blog />} />
          <Route path="student-registration" element={<Register />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
