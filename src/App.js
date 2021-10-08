import NavBar from "./components/NavBar/NavBar";
import ExpoMain from "./components/ExpoMain/ExpoMain";
import Marquee from "./components/Marquee/Marquee";
import "./App.scss";

const pictures = [
  "http://4.bp.blogspot.com/-52X2y4FUZkU/VCw-II9bO5I/AAAAAAAAga8/g1zWfgV2oCQ/s1600/carpaccio-joven-caballero-thyssen17-detalle-del-mismo.jpg",
  "http://4.bp.blogspot.com/-52X2y4FUZkU/VCw-II9bO5I/AAAAAAAAga8/g1zWfgV2oCQ/s1600/carpaccio-joven-caballero-thyssen17-detalle-del-mismo.jpg",
  "http://4.bp.blogspot.com/-52X2y4FUZkU/VCw-II9bO5I/AAAAAAAAga8/g1zWfgV2oCQ/s1600/carpaccio-joven-caballero-thyssen17-detalle-del-mismo.jpg",
  "http://4.bp.blogspot.com/-52X2y4FUZkU/VCw-II9bO5I/AAAAAAAAga8/g1zWfgV2oCQ/s1600/carpaccio-joven-caballero-thyssen17-detalle-del-mismo.jpg",
];

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
      <Marquee pics={pictures} tittle="hey" text="aloha" />
    </div>
  );
}

export default App;
