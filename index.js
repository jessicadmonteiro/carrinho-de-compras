const productsCart = [
    {
        id: 1,
        nome: "Uva Crimson",
        valor: 20.98,
    },
    {
        id: 2,
        nome: "Vinho Canção",
        valor: 25.99,
    },
    {
        id: 3,
        nome:"Água de coco",
        valor: 8.99,
    },
    {
        id: 4,
        nome:"Mamão",
        valor: 9.99,
    },
    {
       id: 5,
       nome: "Água tônica",
       valor: 17.99
    },

]

const tBody = document.querySelector("body")

function somaDosProdutos(listaArray){
    let soma = 0
    for(let i = 0; i < listaArray.length; i ++){
         soma = soma + listaArray[i].valor
    }
    return soma
}

function criarProduto(item){

    let tagMain          = document.createElement("main")
    let tagSection       = document.createElement("section")
    let tagUltotal       = document.createElement("ul")
    let tagLiTotal       = document.createElement("li")
    let tagH4Total       = document.createElement("h4")
    let tagPTotal        = document.createElement("p")
    let tagDivBotao      = document.createElement("div")
    let tagButton        = document.createElement("button")
    let tagH2            = document.createElement("h2")
    let tagDiv           = document.createElement("div")
    let tagH4Div         = document.createElement("h4")
    let tagPDiv          = document.createElement("p")
    let tagUlProduto     = document.createElement("ul")

    tagH2.innerText        = "Virtual Market"
    tagH4Div.innerText     = "Item"
    tagPDiv.innerText      = "Valor"
    tagH4Total.innerText   = "Total"
    tagPTotal.innerText    = 0.00
    tagButton.innerText    = "Finalizar compra"
   
    for(let i = 0; i < item.length; i++){
        let nome  = item[i].nome
        let valor = item[i].valor
        
        let tagLiProduto     = document.createElement("li")
        let tagH4Produto     = document.createElement("h4")
        let tagPproduto      = document.createElement("p")
        
        tagDiv.classList.add("itensValor")
        tagUlProduto.classList.add("listaDeProduto")
        tagUltotal.classList.add("totalEfinalizar")
        tagDivBotao.classList.add("botao")
    
        tagH4Produto.innerText = nome
        tagPproduto.innerText  = valor
        
        tagUlProduto.appendChild(tagLiProduto)
        tagLiProduto.appendChild(tagH4Produto)
        tagLiProduto.appendChild(tagPproduto)
    
    }
tagButton.addEventListener("click", function(){
    tagPTotal.innerText = somaDosProdutos(productsCart)
})

    tagMain.appendChild(tagH2)
    tagMain.appendChild(tagDiv)
    tagDiv.appendChild(tagH4Div)
    tagDiv.appendChild(tagPDiv)
    tagMain.appendChild(tagUlProduto)
    tagMain.appendChild(tagSection)
    tagSection.appendChild(tagUltotal)
    tagUltotal.appendChild(tagLiTotal)
    tagLiTotal.appendChild(tagH4Total)
    tagLiTotal.appendChild(tagPTotal)
    tagSection.appendChild(tagDivBotao)
    tagDivBotao.appendChild(tagButton)

    return tagMain
}
criarProduto(productsCart)
tBody.appendChild(criarProduto(productsCart))