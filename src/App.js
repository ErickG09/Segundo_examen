// Segundo examen parcial: calculadora de divisas
// Erick Guevara Morales

// Crear una app en react que haga lo siguiente: 
// permite al usuario convertir entre las siguientes divisas:

// MXN 
// USD 
// EUR 
// BTC 
// ETH 
// DOGE 

// Crea un nuevo respositorio para el examen 
// Añade al profesor: mozta

import './App.css';
import Menu from './componentes/segundo_examen2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 style={{color: 'cyan'}}>Calculadora de divisas</h1>
       <Menu/>
    
      </header>
    </div>
  );
}

export default App;
