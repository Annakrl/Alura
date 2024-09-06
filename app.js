function todos() {

}
function pesquisar() { 
   // obtem a se;'ao HTML onde os resultados serao exibidos
   let section = document.getElementById("resultados-pesquisa");
 
   let campoPesquisa = document.getElementById ("campo-pesquisa").value

   if(campoPesquisa ==  "") {
      section.innerHTML = "<p2>Nada foi encontrado. procurure por: bedwars... </p2>"
         return
   }
  
   campoPesquisa = campoPesquisa.toLowerCase()

   console.log(campoPesquisa);
   //  para fins de depuracao, mostra a secao no console

   // inicializa uma string vazia para armazenar os resultados
   let resultados = "";
     let = tirulos = "";
     let descrição = "";
     // para cada dado dentro da lista de dados
    for (let dado of dados)  {
      titulo = dado.titulo.toLowerCase()
      descrição = dado.descrição. toLowerCase()
      if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa)) {
         // cria um novo elemento
         resultados += `
         <div class="item-resultado">
             <h2>
             ${dado.titulo}
           </h2>
            <p3 class="Sites-meta">${dado.descrição}</p3>
         <a href=${dado.link} target="_blank">Hylex</a>
            </div>
         `
         }
      }
      
      if (!resultados)  {
         resultados = "<p2>Nada foi encontrado</p2>"
      }
    
    section.innerHTML = resultados 
  }
   // console.log(dados); 
