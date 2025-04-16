import {Routes, Route, Navigate } from 'react-router-dom';
import About from '../components/About';
// import Projects from '../components/Projects';
// import Contact from '../components/Contact';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> */}
            <Route path="*" element={<Navigate to="/"/>} />

        </Routes>
    );
}

export default AppRouter;