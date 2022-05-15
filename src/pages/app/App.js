import Cronometro from '../../components/cronometro';
import Formulario from '../../components/formulario'
import Lista from '../../components/lista'
import './style.css'

function App() {
  return (
    <main className="App container alura-background-light mt-5 p-5 rounded text-light">
      <div className="row d-flex justify-content-between">
        <section className="col-12 col-md-6">
          <Formulario/>
          <Cronometro/>
        </section>
        <section className="col-12 col-md-6">
          <Lista/>
        </section>
      </div>
    </main>
  );
}

export default App;
