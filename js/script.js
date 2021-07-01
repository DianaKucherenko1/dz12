let quest = +prompt('Введите число');

function minDiv(num){
    if (typeof num !== "number" || Number.isNaN(num) || num < 1){
        return NaN;
    }

    for (let i = 2; i < num - 1; i++){
        if(num % i === 0){
            return i;
        }
    }

    return num;
}

const result = minDiv(quest);

console.log(result);