import Aside from "@/Components/Aside";
import AsideMac from "@/Components/AsideMac";
import Categories from "@/Components/Categories";
import Events from "@/Components/Events";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Popular from "@/Components/Popular";
import Tarif from "@/Components/Tarif";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Aside />
      <Popular />
      <Events />
      <AsideMac />
      <Tarif />
    </>
  );
}
