
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {  
  return (
   <HashRouter>
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
    </HashRouter>
   
  );
}

export default App;
