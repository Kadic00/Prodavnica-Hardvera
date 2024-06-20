import "./App.css";
import Header from "./Komponente/Header.jsx";
import Test from "./Komponente/Test.jsx";
import Kategorije from "./Komponente/Kategorije.jsx";
function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Test />
        <Kategorije />
      </div>
    </div>
  );
}

export default App;
