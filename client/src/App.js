import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./compoents/Footer";
import Main from "./compoents/Main";

// const houses = [
//   {
//     id: 1,
//     nameOfProperty: "Harsh",
//     location: "Malad",
//   },
//   {
//     id: 2,
//     nameOfProperty: "Altamash",
//     location: "Santacruz",
//   },
//   {
//     id: 3,
//     nameOfProperty: "Om Apartments",
//     location: "Borivali",
//   },
// ];

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
