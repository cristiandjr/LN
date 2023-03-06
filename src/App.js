import { Header } from "./components/Header/Header";
import HeaderMobile from "./components/Header/HeaderMobile";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div id="wrap">
      <Header />
      <HeaderMobile />
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
