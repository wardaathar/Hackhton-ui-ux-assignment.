import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from '@/components/Hero';
import MainContent from "@/components/MainContent";
import CheckoutPage from "./Checkoutpage/page";
import Page404 from "./Page404/page";
import SignupPage from "./Signuppage/page";
import SignInPage from "./SignInpage/page";


export default function Home() {
  return (
   
        <main>
          <Header/>
          <Hero/>
         <Footer/>
         <MainContent/>
         <CheckoutPage/>
         <SignInPage/>
         <SignupPage/>
         <Page404/>
        
          
        </main> 
  
  );
}
