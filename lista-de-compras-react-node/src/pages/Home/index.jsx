import { useRef, useState } from "react";
import { v4 } from "uuid";
import { AddButton, Container, Product, Trashbutton } from './styles'

function Home() {
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();

  function cliqueiNoBotao() {
    console.log(v4());
    setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos]);
    inputRef.current.value = ''
  }

  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))
  }

  return (
    <Container>
      <h1>Comprar:</h1>
      <input placeholder="Produto..." type="text" ref={inputRef} />
      <AddButton onClick={cliqueiNoBotao}>Adicionar a lista</AddButton>

      {produtos.map((produto) => (
        <Product key={produto.id}>
          <p>{produto.nome}</p>
          <Trashbutton onClick={ () => deletarProduto(produto.id)}>🗑️</Trashbutton>
        </Product>
      ))}
    </Container>
  );
}

export default Home;

//parei minuto 01:14 deste link: https://www.youtube.com/live/3wcjhAZoviA?si=0qFr1qaIfXwRewFH
