import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Contact from "./pages/Contacts/Contacts";
import Trips from "./pages/Trips/Trips";
import Destinations from "./pages/Destinations/Destinations";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/destinations" element={<Destinations />} />
          <Route exact path="/trips" element={<Trips />} />
          <Route exact path="/contacts" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
