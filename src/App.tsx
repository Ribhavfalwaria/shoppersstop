
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {  
  return (
   <BrowserRouter>
    <section>
   <Header />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/shop" element={<Shop />}>
        </Route>
      </Routes>
      <Footer/>
    </section>
    </BrowserRouter>
   
  );
}

export default App;
