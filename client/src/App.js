import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Mainblock from "./components/Main/Mainblock";
import MultiActionAreaCard from "./components/MultiActionAreaCard";
import Footer from "./components/Footer/Footer";

const houses = [
  {
    id: 1,
    nameOfProperty: "Harsh",
    location: "Malad",
  },
  {
    id: 2,
    nameOfProperty: "Altamash",
    location: "Santacruz",
  },
  {
    id: 3,
    nameOfProperty: "Om Apartments",
    location: "Borivali",
  },
];

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Mainblock />
      <MultiActionAreaCard />
      <Footer />
    </>
  );
}

export default App;
