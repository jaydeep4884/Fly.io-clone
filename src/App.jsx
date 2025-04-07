import "./App.css";
import "@fontsource/bricolage-grotesque";
import Header from "./sections/Header";
import Developers from "./sections/Developers";
import Footer from "./sections/Footer";
import Trusted from "./sections/Trusted";

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
