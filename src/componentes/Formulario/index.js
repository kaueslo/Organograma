import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import "./Formulario.css";

const Formulario = () => {
const itens =[
  "Teste1",
  "Teste2",
  "Teste2",
  "Teste3",
  "Teste4",
  "Teste5"
]

const aoSalvar = (evento) => {
  evento.preventDefault();
  console.log("Form foi submetido");
}

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa obrigatorio={true} label="Time" itens={itens} />
        <Botao> 
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
