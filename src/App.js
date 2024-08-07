import "./App.css";
import Header from "./Components/Heater";
import Footer from "./Components/Footer";
import Explore from "./Components/Explore";
import GTZ from "./Components/GTZ";
import Popular from "./Components/Popular";
import Collections from "./Components/Collections";

function App() {
  return (
    <>
      <Header />
      <Collections />
      <Popular />
      <GTZ />
      <Explore /> 
      <Footer />
    </>
  );
}

export default App;
