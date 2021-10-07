import NavBar from "./components/NavBar/NavBar";
import ExpoMain from "./components/ExpoMain/ExpoMain";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ExpoMain
        tittle="La maquina de Magritte"
        type="Exposición Temporal"
        date="14.09.21-10.01.22"
        picture="https://www.renemagritte.org/images/paintings/the-false-mirror.jpg"
      />
    </div>
  );
}

export default App;
