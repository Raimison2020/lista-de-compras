let totalValue = 0

function addItem() {
    // Obtém as referências aos campos de entrada de texto
    const itemInput = document.getElementById("item")
    const valueInput = document.getElementById("value")
    const quantidadeInput = document.getElementById("quantidade")

    // Obtém o texto digitado pelo usuário (item e valor)
    const itemText = itemInput.value.trim()
    const valueText = parseFloat(valueInput.value.trim())
    const quantidade = parseInt(quantidadeInput.value.trim(), 10)

    // Verifica se ambos os campos não estão vazios e se o valor é um número válido
    if(itemText && !isNaN(valueText) && !isNaN(quantidade) && quantidade > 0) {
        
        const totalItemValue = valueText * quantidade

        // Cria um novo elemento de lista (<li>) com o texto formatado
        const listItem = document.createElement("li")

        // Cria o elemento de texto do item
        const itemTextElement = document.createElement("div")
        itemTextElement.textContent = `${itemText} - ${valueText.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
        itemTextElement.classList.add("item-text")
        // listItem.textContent = `${itemText} - R$ ${valueText.toFixed(2)}` //Formatação sem configuração da moeda local BR
        
        // Cria o elemento de quantidade
        const quantityElement = document.createElement("div")
        quantityElement.textContent = `${quantidade} UN - ${totalItemValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
        quantityElement.classList.add("item-quantity")
        
        const itemContainer = document.createElement("div")
        itemContainer.classList.add("item-container")
        itemContainer.appendChild(itemTextElement)
        itemContainer.appendChild(quantityElement)

        const divButton = document.createElement("div")
        const deleteButton = document.createElement("button")
        divButton.appendChild(deleteButton)
        deleteButton.textContent = "Remover"
        deleteButton.classList.add("btn-remove")
        deleteButton.onclick = function() {
            removeItem(listItem, totalItemValue)
        }

        // Adiciona o texto do item e a quantidade ao item da lista
        listItem.appendChild(itemContainer)
        listItem.appendChild(divButton)

        // Obtém a referência à lista de compras
        const shoppingList = document.getElementById("shopping-list")
        // Adiciona o novo item à lista
        shoppingList.appendChild(listItem)

        // Atualiza o valor total
        totalValue += totalItemValue
        // document.getElementById("total-value").textContent = `Valor Total: R$ ${totalValue.toFixed(2)}`
        document.getElementById("total-value").textContent = `Total: ${totalValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
        
        // Limpa os campos de entrada
        itemInput.value = ""
        valueInput.value = ""
        quantidadeInput.value = ""

    }

}

function removeItem(listItem, totalItemValue) {
       
    if(!isNaN(totalItemValue)) {
        totalValue -= totalItemValue
        document.getElementById("total-value").textContent = `Total: ${totalValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
        listItem.remove()
    }
}