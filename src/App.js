import './App.css';
import { Footer } from './Componenetes/Footer';
import { Nosotros } from './Componenetes/Nosotros';
import { Nuestropanes } from './Componenetes/Nuestropanes';
import { Panreferencia } from './Componenetes/Panreferencia';
import { Portada } from './Componenetes/Portada';
import { Seccionmenu } from './Componenetes/Seccionmenu';

function App() {
  return (
    <div className="App">
      <Portada />
      <Nosotros />
      <Panreferencia />
      <Nuestropanes />
      <Seccionmenu />
      <Footer />
    </div>
  );
}

export default App;
