function calculateIMC(){
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    if (peso !== '' && peso !== ''){
        var bmi = peso / ((altura / 100) ** 2);
        var result = document.getElementById('result');
        result.innerHTML = 'Tu IMC es:' + bmi.toFixed(2);

        if (bmi < 18.5){
            result.innerHTML += ' - Bajo Peso';
        } else if (bmi < 25){
            result.innerHTML += ' - Peso Normal';
        }else if (bmi < 30){
            result.innerHTML += ' - Sobrepeso';
        }else {
            result.innerHTML += ' - Obesidad';
        }
    }
}