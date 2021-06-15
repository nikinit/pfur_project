import React from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import DeleteSection from "./components/DeleteSection";
import AddSection from "./components/AddSection";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <DeleteSection />
      <AddSection />
      <Footer />
    </div>
  );
}

export default App;
