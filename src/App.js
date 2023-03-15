import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  //Banner é um component q foi importado
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
    </div>
  );
}

export default App;
