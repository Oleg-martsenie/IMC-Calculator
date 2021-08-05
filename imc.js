const calcular = document.getElementById('calcular');

function imc() {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if(name !== '' && height !== '' && weight !== '') {

        const valIMC = (weight / (height**2)).toFixed(1);

        let classfication = '';

        if(valIMC < 18.8) {
            classfication = 'Under Weight.';
        } else if (valIMC < 25 ){
            classfication = 'on your ideal weight';
        } else if (valIMC < 30) {
            classfication = 'Slightly Weight';
        } else if (valIMC < 35) {
            classfication = 'Obesity (1 degree)';
        } else if (valIMC < 40) {
            classfication = 'Obesity (2 degree)';
        } else if ( valIMC > 40) {
            classfication = 'Obesity (3 degree), Be Careful';
        }

        result.textContent = `${name} your IMC is ${valIMC} and you are ${classfication}`

    } else {
        result.textContent = 'Fill the Fields'
    }
}

calcular.addEventListener('click', imc);








//.value é so pra input:text e outros valores
// pra div é o textContent