import Cars from "./components/Cars";
import CarCompanies from "./pages/CarCompanies";
import CarSuggestionBanner from "./pages/CarSuggestionBanner";
import Cities from "./pages/Cities";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";

export default function Home() {
  return (
    <>
    <HomePage/>
    <Services/>
    <CarCompanies/>
    <CarSuggestionBanner/>
    <Cities/>
    <Cars/>
    </>
  );
}
