//Procurar o botão
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener("click", cloneField)

//Executar uma ação
function cloneField(){
  //Duplicar os campos, que campo?
  const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //O tru pega todos os filhos dentro

  //Limpar os campos, que campos?
  const fields = newFieldContainer.querySelectorAll("input")


  //Para cada campo limpar 
  fields.forEach(function(field){
    //Pega o field do momento
    field.value=""
  })

  //colocar na página, onde?
  document.querySelector("#schedule-items").appendChild(newFieldContainer)

}
