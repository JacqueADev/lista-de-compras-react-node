import { useRef, useState } from "react";
import { v4 } from "uuid";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();

  function cliqueiNoBotao() {
    console.log(v4());
    setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos]);
  }

  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))
  }

  return (
    <div>
      <h1>Comprar:</h1>
      <input placeholder="Produto..." type="text" ref={inputRef} />
      <button onClick={cliqueiNoBotao}>Adicionar a lista</button>

      {produtos.map((produto) => (
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <button onClick={ () => deletarProduto(produto.id)}>🗑️</button>
        </div>
      ))}
    </div>
  );
}

export default Home;

//parei minuto 27:47 deste link: https://www.youtube.com/live/3wcjhAZoviA?si=0qFr1qaIfXwRewFH
