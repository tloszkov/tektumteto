import './App.css'
import {Routes,Route} from "react-router-dom";
import About from "./pages/about/about.tsx";
import Contact from "./pages/contact/contact.tsx";
import Gallery from "./pages/gallery/gallery.tsx";
import Services from "./pages/services/sevices.tsx";
import Home from "./pages/home/home.tsx";
import Notfound from "@/pages/notfound/notfound.tsx";
import Header from "@/components/header/header.tsx";
import Footer from "@/components/footer/footer.tsx"
import Roofing from "@/pages/roofing/roofing.tsx";
import RoofRenovation from "@/pages/roofrenovation/roofRenovation.tsx";
import Carpentry from "@/pages/carpentry/carpentry.tsx";
import Tinning from "@/pages/tinning/tinning.tsx";
import RoofInsulation from "@/pages/roofinsultation/roofInsulation.tsx";
import RoofRepair from "@/pages/roofrepair/roofRepair.tsx";


function App() {
    console.log();
    return (
    <>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/roofing" element={<Roofing />}></Route>
            <Route path="/roofRenovation" element={<RoofRenovation />}></Route>
            <Route path="/roofRepair" element={<RoofRepair />}></Route>
            <Route path="/carpentry" element={<Carpentry />}></Route>
            <Route path="/tinning" element={<Tinning />}></Route>
            <Route path="/roofInsulation" element={<RoofInsulation />}></Route>
            <Route path="/*" element={<Notfound />}></Route>
        </Routes>
        <Footer></Footer>

    </>
  )
}

export default App
