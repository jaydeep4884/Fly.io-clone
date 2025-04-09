import "./App.css";
import "@fontsource/bricolage-grotesque";
import Header from "./sections/Header";
import Developers from "./sections/Developers";
import Footer from "./sections/Footer";
import Trusted from "./sections/Trusted";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Framework from "./sections/Framework";
import Machine from "./sections/Machine";
import SendBox from "./sections/SendBox";

function App() {
  return (
    <div>
      <Header />
      <SendBox />
      <Developers />
      <Trusted />
      <Framework />
      <Machine />
      <Footer />
    </div>
  );
}

export default App;
