function resultadoIMC(){
    var altura = document.getElementById('altura').value;
    var peso = document.querySelector('#peso').value;

    altura = parseFloat(altura)
    peso = parseFloat(peso)
    altura /= 100

    var resultado = peso / (altura * altura)
    var total = resultado.toFixed(1)

    var retorno = document.querySelector('.resultado');
    retorno.textContent = 'seu imc: ' + total

}
