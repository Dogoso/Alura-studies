import { useState } from 'react'
import Cronometro from '../../components/cronometro'
import Formulario from '../../components/formulario'
import Lista from '../../components/lista'
import './style.css'

function App() {

  const [selected, setSelected] = useState()

  const [itens, setItens] = useState([])

  const setTask = (task) => {
    setSelected(task)
    setItens(oldItens => oldItens.map(item => ({
            ...item,
            selected: item.id === task.id ? true : false
    })));
  }

  return (
    <main className="App container alura-background-light mt-5 mb-5 p-5 rounded text-light">
      <div className="row d-flex justify-content-between">
        <section className="col-12 col-md-6">
          <Formulario setItens={setItens} />
          <Cronometro setSelected={setSelected} setItens={setItens} selected={selected} />
        </section>
        <section className="col-12 col-md-6">
          <Lista
            itens={itens}
            setTask={setTask}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
