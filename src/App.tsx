import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Games from './components/Games';
import Sport from './components/Sport';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToSection from './components/ScrollToSection';
import Menu from './pages/Menu';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Games />
      <Sport />
      <Reviews />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToSection />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;