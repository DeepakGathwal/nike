import Head from "next/head";
import {CustomerReview} from "../../components/pageCompmanets/reviewcustomer";
import {Footer} from "../../components/pageCompmanets/footer";
import { SpecialOffer } from "../../components/pageCompmanets/specialOffer";
import { Suscribe } from "../../components/pageCompmanets/suscribe";
import { Services } from "../../components/pageCompmanets/services";
import { Navbar } from "../../components/pageCompmanets/navbar";
import { Hero } from "../../components/pageCompmanets/hero";
import { Products } from "../../components/pageCompmanets/products";
import { Quality } from "../../components/pageCompmanets/quality";

export default function Home() {
  return (
   
   <main className="relative">
<Navbar/>
    <section className="xl:padding-1 wide:padding-r padding-b">
   <Hero/>
    </section>
    <section className="padding">
   <Products/>
    </section>
    <section className="padding">
   <Quality/>
    </section>
    <section className="padding-x padding-10">
    <Services/>
    </section>
    <section className="padding">
  <SpecialOffer/>
      </section>
    <section className="bg-pale-blue padding">
 <CustomerReview/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
    <Suscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
  <Footer/>
    </section>
   </main>
   
  )
}