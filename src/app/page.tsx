
import Hero from '../app/components/Hero';
import Chef from "./components/chef";
import FoodCategory from './components/Food';
import MenuPage from "./components/Menupage";
import MenuCom from './components/Shop';
import About from './components/About';




export default function Home() {
  return (

    <main>
      <Hero />
      <About />
      <MenuCom />
      <FoodCategory />
      <MenuPage />
      <Chef />



    </main>

  );
}
