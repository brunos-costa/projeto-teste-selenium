
// Máscara Para número de cartão. Aplica espaço a cada 4 números
function mascaraCartaoCredito(numero) {
    return numero.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
}

function mascaraMesAno(valor) {
    const numeros = valor.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

  const mes = numeros.slice(0, 2);
  const ano = numeros.slice(2, 6);

  let dataMascarada = '';

  if (mes) {
    dataMascarada += mes;
    if (mes.length === 2 && ano) {
      dataMascarada += '/' + ano;
    }
  }

  return dataMascarada;
}
  
let numeroCartao = document.querySelector("#cc-number")
let dataValidade = document.querySelector("#cc-expiration")

numeroCartao.addEventListener("keyup", ()=>{
    numeroCartao.value = mascaraCartaoCredito(numeroCartao.value)
})

dataValidade.addEventListener("keyup",()=>{
    dataValidade.value = mascaraMesAno(dataValidade.value)
})