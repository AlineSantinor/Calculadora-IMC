 
 const calcular = document.getElementById('calcular');
 
 function imc () {
    const nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value; 
    const resultado = document.getElementById('resultado');
    
    if (nome !== '' && altura !== '' && peso !== '') {
         if (altura > 3){
           altura = altura / 100;
        }
            const valorIMC = (peso / (altura * altura)).toFixed(1);

            let classificacao = '';

                if (valorIMC <18.5){
                    classificacao= 'abaixo do peso.';
                }else if (valorIMC <25) {
                    classificacao = 'peso ideal';
                }else if (valorIMC < 30){
                    classificacao ='levemente acima do peso';
                }else if (valorIMC < 35){
                    classificacao = `com obesidade grau I.`;
                }else if (valorIMC <40){
                    classificacao = `obesidade grau II.`;
                }else if (valorIMC <45){
                    classificacao= `com obesidade grau III.`;
                }else{
                    classificacao2 = `confira seus dados!! Contém erro!`;
                }

                resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
                resultado.textContent = `${nome} ${classificacao2}`;
    }else {
        resultado.textContent = 'Preencha todos os campos!';
    } 
}
 calcular.addEventListener('click', imc);
