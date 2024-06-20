import "./App.css";
import Header from "./Komponente/Header.jsx";
import Test from "./Komponente/Test.jsx";
import Kategorije from "./Komponente/Kategorije.jsx";
import Proizvodi from "./Komponente/Proizvodi.jsx";
function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Test />
        <Kategorije />
        <Proizvodi />
      </div>
    </div>
  );
}

export default App;
