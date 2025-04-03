import { useState } from 'react'
import Menu from './components/Menu';
import Cuerpo from './components/Principal.jsx';
import Formulario from './components/Formulario.jsx';
import Flayer2 from './components/Flayer2.jsx';
import Flayer3 from './components/Flayer3.jsx';
import Flayer4 from './components/Flayer4.jsx';
import Pie from './components/Pie.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <Menu/>
            <Cuerpo/>
            <Flayer2/>
            <Formulario/>
            <Flayer3/>
            <Flayer4/>
            <Pie/>
    </>
  )
}

export default App
