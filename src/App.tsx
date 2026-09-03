import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import Games from './components/Games';
import Sport from './components/Sport';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToSection from './components/ScrollToSection';


function App() {
  return (
    <>
      <Header />
      <ScrollToSection />

      <main>
        <Hero />
        <About />
        <MenuSection />
        <Games />
        <Sport />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;