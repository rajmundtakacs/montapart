import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Apartments from './pages/Apartments';
import ApartmentDetail from './pages/ApartmentDetail';
import Hotels from './pages/Hotels';
import Programs from './pages/Programs';
import Attractions from './pages/Attractions';
import Transfer from './pages/Transfer';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/apartments/:slug" element={<ApartmentDetail />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
