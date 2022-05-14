import Formulario from '../components/formulario'
import Lista from '../components/lista'
import './style.css'

function App() {
  return (
    <main className="App container alura-background-light mt-5 p-5 rounded text-light">
      <div className="row d-flex justify-content-between">
        <Formulario/>
        <Lista/>
      </div>
    </main>
  );
}

export default App;
