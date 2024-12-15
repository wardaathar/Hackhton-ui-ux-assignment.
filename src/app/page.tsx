
import Hero from '../app/components/Hero';
import CheckoutPage from './components/checkout';
import Chef from "./components/chef";
import FoodCategory from './foodcatagery/page';
import MenuPage from "./components/Menupage";




export default function Home() {
  return (

    <main>

      <Hero />
      <FoodCategory/>
      <MenuPage/>
      <Chef />
      <CheckoutPage />


    </main>

  );
}
