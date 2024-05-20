import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import Cards from "../components/Cards";
import { Tables } from "../components/Table";
import ImageSlider from "../components/ImageSlider";
import AccordionComponent from "../components/Accordion";
import ModalComponent from "../components/Model";

export const MainRoute = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/table" element={<Tables />} />
            <Route path="/image-slider" element={<ImageSlider />} />
            <Route path="/accordion" element={<AccordionComponent />} />
            <Route path="/model" element={<ModalComponent />} />
        </Routes>
    );
};
