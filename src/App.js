import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {
  //Banner é um component q foi importado

  /*
    Esse é um exemplo de um hooks para armazenamento
  */
  const [usuarios, setUsuarios] = useState([])

  //Esse set é o armazenamento do novo usuário do sistema
  const aoNovoUsuarioAdicionado = (usuario) => {
    console.log(usuario)
    setUsuarios([...usuarios, usuario])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoUsuarioCadastrado={usuario => aoNovoUsuarioAdicionado(usuario)}/>
    </div>
  );
}

export default App;
