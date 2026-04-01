import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Rooms from './sections/Rooms';
import Services from './sections/Services';
import Location from './sections/Location';
import Booking from './sections/Booking';
import Promotions from './sections/Promotions';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Services />
        <Location />
        <Booking />
        <Promotions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
