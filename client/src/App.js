import "./App.css";
import MultiActionAreaCard from "./components/MultiActionAreaCard";
import Navbar from "./components/Navbar";

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
      <Navbar />
      {houses.map((house) => {
        return (
          <MultiActionAreaCard
            key={house.id}
            nameOfProperty={house.nameOfProperty}
            location={house.location}
          />
        );
      })}
    </>
  );
}

export default App;
