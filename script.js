function inserir(numero) {
    let valor = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = valor + numero;
}

function limpar() {
    document.getElementById('resultado').innerHTML = ' '
}

function voltar() {
    let ultimoNumero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = ultimoNumero.substring(0, ultimoNumero.length -1);
}

function calcular() {
    let conta = document.getElementById('resultado').innerHTML;
    if(conta) {
        document.getElementById('resultado').innerHTML = eval(conta);
    }
}