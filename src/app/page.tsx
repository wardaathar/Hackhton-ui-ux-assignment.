
import Hero from '../app/components/Hero';
import CheckoutPage from './components/checkout';
import Chef from "./components/chef";
import FoodCategory from './foodcatagery/page';



export default function Home() {
  return (

    <main>

      <Hero />
      <FoodCategory/>
      <Chef />
      <CheckoutPage />


    </main>

  );
}
