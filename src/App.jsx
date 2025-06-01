import { useRef } from "react";
import "./App.css";
import Hero from "../components/hero";
import Search from "../components/search";
import Stats from "../components/stats";
import Boost from "../components/boost";
import Footer from "../components/footer";

function App() {
  const inputRef = useRef(null);

  return (
    <>
      <Hero scrollToSearch={()=>inputRef.current.focus() } />
      <Search refProp={inputRef}/>
      <Stats />
      <Boost />
      <Footer />
    </>
  );
}

export default App;
