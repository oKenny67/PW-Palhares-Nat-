const modal = document.getElementById("modal");
const tabela = document.getElementById("tabelaFuncionarios");

function abrirModal(){
  modal.style.display = "flex";
}

function fecharModal(){
  modal.style.display = "none";

  document.getElementById("nome").value = "";
  document.getElementById("funcao").value = "";
  document.getElementById("salario").value = "";
}

function salvar(){

  const nome = document.getElementById("nome").value;

  if(nome === ""){
    alert("Digite um nome!");
    return;
  }

  const linha = `
    <tr>
      <td>${nome}</td>

      <td class="acoes">
        <button onclick="editar(this)">✏️</button>
      </td>

      <td class="acoes">
        <button onclick="excluir(this)">🗑️</button>
      </td>
    </tr>
  `;

  tabela.innerHTML += linha;

  fecharModal();
}

function excluir(botao){
  botao.parentElement.parentElement.remove();
}

function editar(botao){

  const linha = botao.parentElement.parentElement;

  const nomeAtual = linha.children[0].innerText;

  const novoNome = prompt("Editar nome:", nomeAtual);

  if(novoNome !== null){
    linha.children[0].innerText = novoNome;
  }
}

window.onclick = function(event){

  if(event.target == modal){
    fecharModal();
  }

}
console.log("tobibo");