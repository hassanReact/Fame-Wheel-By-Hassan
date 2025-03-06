import Cars from "./components/Cars";
import BrowseCars from "./pages/BrowseCars";
import CarBanner from "./pages/CarBanner";
import CarCompanies from "./pages/CarCompanies";
import CarInspection from "./pages/CarInspection";
import CarSuggestionBanner from "./pages/CarSuggestionBanner";
import Cities from "./pages/Cities";
import FuelCategory from "./pages/FuelCategory";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import VideoPage from "./pages/VideoPage";

export default function Home() {
  return (
    <>
    <HomePage/>
    <Services/>
    <CarCompanies/>
    <CarSuggestionBanner/>
    <Cities/>
    <Cars title="Featured Users Cars" car={{
        id: 0,
        name: "",
        price: "",
        location: "",
        image: "",
        featured: false
      }} index={0}/>
      <FuelCategory/>
      <CarInspection/>
      <BrowseCars/>
      <CarBanner/>
      <VideoPage/>
    </>
  );
}
