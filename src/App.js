import './App.css';
import Freecodecamplogo from './componentes/Freecodecamplogo';
import ListaDeTareas from './componentes/ListaDeTareas';



function App() {
  return (
    <div className="aplicacion-tareas">
      <Freecodecamplogo />
      <div  className='tareas-lista-principal'>
        <h1>Mis Tareas</h1> 
        <ListaDeTareas />        
      </div>
    </div>
  );
}

export default App;
