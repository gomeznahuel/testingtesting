import { useState } from "react";
import { Router } from "./Router/Router";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Layout/Header/index";
import { Footer } from "./Layout/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
