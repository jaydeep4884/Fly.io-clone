import "./App.css";
import "@fontsource/bricolage-grotesque";
import Header from "./sections/Header";
import Developers from "./sections/Developers";
import Footer from "./sections/Footer";
import Trusted from "./sections/Trusted";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Header />
      <Trusted />
      <Developers />
      <Footer />
    </div>
  );
}

export default App;
