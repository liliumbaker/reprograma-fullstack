const button = document.querySelector(".transacao__button");
button.addEventListener("click", function(event){
    event.preventDefault();

    const tabela = document.querySelector(".extrato__table");
    const inputName = document.querySelector("#transacaoInputName");
    const inputMoney = document.querySelector("#transacaoInputMoney");
    const inputData = document.querySelector("#transacaoInputDate");

    const linha = document.createElement("tr");

    const colunaNome = document.createElement("td");
    const colunaNomeInput = document.createTextNode(inputName.value);
    if (inputName.value === "") {
        const mensagem =  document.createElement("p");
        const mensagemnulo = document.createElement("preencha");
        mensagem.appendChild(mensagemnulo);


    }
    colunaNome.appendChild(colunaNomeInput);

    const colunaMoney = document.createElement("td");
    const colunaMoneyInput = document.createTextNode(inputMoney.value);
    colunaMoney.appendChild(colunaMoneyInput);

    const colunaData = document.createElement("td");
    const colunaDataInput = document.createTextNode(inputData.value);
    colunaData.appendChild(colunaDataInput);

    linha.appendChild(colunaNome);
    linha.appendChild(colunaMoney);
    linha.appendChild(colunaData);
    tabela.appendChild(linha);

    
});