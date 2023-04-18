import './App.css';
// import './App.scss';

import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import MobileMenu from './Components/MobileMenu/MobileMenu';
import HeroSection from './Components/HeroSection/HeroSection';
import Slider from './Components/Slider/Slider';



function App() {
  return (
    <div className="App">

      <Header />
      <Menu />
      <Slider />
      <HeroSection />
    </div>
  );
}

export default App;
