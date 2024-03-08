const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const convert = (number) => {

    const romanNumerals = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    const numberConverted = [];

    romanNumerals.forEach(function (rn) {
        while (number >= rn[1]) {
            numberConverted.push(rn[0]);
            number -= rn[1];
        }
    });
    return numberConverted.join('');
}

const validateNumber = (number) => {
    
    let inputResponse = "";

    if (isNaN(number)) {
        output.innerText = "Please enter a valid number.";
    } else if (number <= 0) {
        output.innerText = "Please enter a number greater than or equal to 1.";
    } else if (number >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999.";
    } else {
        return true;
    }
    return false;

}

const clear = () => {
    output.innerText = "";
}

convertBtn.addEventListener('click', () => {
    validateAndConvert();
});

const validateAndConvert = () => {
    const numberInput = document.getElementById('number').value;
    const number = parseInt(numberInput, 10);
    
    clear();

    if (validateNumber(number)) {
        output.innerText = convert(number);
    }
};