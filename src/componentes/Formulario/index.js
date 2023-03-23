import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import "./Formulario.css";

const Formulario = (props) => {
const itens =[
  "Nevoa",
  "Areia",
  "Folha",
  "Pedra",
  "Nuvem",
  "Chuva"
]
const [nome, setNome] = useState('')
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [item, setItem] = useState('')

        //let valor = ''

        /*
        o Hook vai retornar um array com os dois valores
        valor = valor em si doq eu quero / setValor = uma forma de definir esse valor
        Exemplo:
        const [valor, setValor] = useState('')
        */

//esse props.aoUsuarioCadastrado tá passando o objeto pro app.js, pro submit dele
const aoSalvar = (evento) => {
  evento.preventDefault();
  console.log("Form foi submetido => ", nome, cargo, imagem, item);
  props.aoUsuarioCadastrado({
    nome,
    cargo,
    imagem,
    item
  })
}

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card</h2>
        <CampoTexto 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite seu nome" 
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite seu cargo" 
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
          label="Imagem" 
          placeholder="Digite o endereço da imagem" 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
          obrigatorio={true} 
          label="Time" 
          itens={itens} 
          valor={item}
          aoAlterado={valor => setItem(valor)}
        />
        <Botao> 
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
