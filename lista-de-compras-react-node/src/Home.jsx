import { useRef, useState } from "react";
import { v4 } from "uuid";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();

  function cliqueiNoBotao() {
    console.log(v4());
    setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos]);
  }

  return (
    <div>
      <h1>Comprar:</h1>
      <input placeholder="Produto..." type="text" ref={inputRef} />
      <button onClick={cliqueiNoBotao}>Adicionar a lista</button>

      {produtos.map((produto) => (
        <div key={produto.id}>{produto.nome}</div>
      ))}
    </div>
  );
}

export default Home;

//parei minuto 27:47 deste link: https://www.youtube.com/live/3wcjhAZoviA?si=0qFr1qaIfXwRewFH
