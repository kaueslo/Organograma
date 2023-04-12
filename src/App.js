import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Item from './componentes/Item';

function App() {

  const itens = [
    {
      nome: 'Nevoa',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Areia',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Folha',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Pedra',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Nuvem',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Chuva',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  //Banner é um component q foi importado

  /*
    Esse é um exemplo de um hooks para armazenamento
  */
  const [usuarios, setUsuarios] = useState([])

  //Esse set é o armazenamento do novo usuário do sistema
  //debugger é o método pra debugar o sistema, ele para e conseguimos ver oq tá sendo passado ao sistema
  const aoNovoUsuarioAdicionado = (usuario) => {
    //debugger
    setUsuarios([...usuarios, usuario])
  }

  function deletarColaborador(){
    console.log('deletando colaborador')
  }

  //chamando os itens dinâmico
  return (
    <div className="App">
      <Banner />
      <Formulario itens={itens.map(itens => itens.nome)} aoUsuarioCadastrado={usuario => aoNovoUsuarioAdicionado(usuario)}/>
      {itens.map(item => <Item 
        key={item.nome} 
        nome={item.nome} 
        corPrimaria={item.corPrimaria} 
        corSecundaria={item.corSecundaria} 
        usuarios={usuarios.filter(usuario => usuario.item === item.nome)}
        aoDeletar={deletarColaborador}
      />)}
    </div>
  );
}

export default App;
