const addBtn = document.querySelector('#add-btn');
const clearBtn = document.querySelector('#clear-btn');
const analyzeBtn = document.querySelector('#analyze-btn')
const num = document.querySelector("#fnum");
const list = document.querySelector("#flist");
const resul = document.querySelector("#res");

let value = [];

const isNumb = (n) => {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    };
};

const inList = (n, l) => {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    };
};

const analyze = () => {
    if (value.length === 0) {
        alert("Adicione valores antes de Finalizar");
    } else {
        let tot = value.length;
        let bigger = value[0];
        let smaller = value[0];
        let sum = 0;
        let average = 0;
        
        for (let pos in value) {
            sum += value[pos];
            if (value[pos] > bigger)
                bigger = value[pos];
            if (value[pos] < smaller)
                smaller = value[pos];
        };

        average = sum / tot;
        resul.innerHTML = "";
        resul.innerHTML += `<p>Ao todo temos ${tot} Números cadastrados.</p>`;
        resul.innerHTML += `<p>O maior valor encontrado foi ${bigger}.</p>`;
        resul.innerHTML += `<p>O menor valor informado foi ${smaller}.</p>`;
        resul.innerHTML += `<p>Somando os valores cadastrados, temos: ${sum}.</p>`;
        resul.innerHTML += `<p>A média dos valores cadastrados é: ${average}.</p>`;
    };
};

const add = () => {
    if (isNumb(num.value) && !inList(num.value, value)) {
        value.push(Number(num.value));

        let item = document.createElement("option");
        item.text = `Valor ${num.value} adicionado!`;
        list.appendChild(item);
        resul.innerHTML = "";
    } else {
        alert("Valor inválido ou já encontrado na lista");
    };
    num.value = "";
    num.focus();
};

const clear = () => {
    resul.innerHTML = 'Resultado..';
    list.innerHTML = '';
    value = [];
};

addBtn.addEventListener('click', add);
clearBtn.addEventListener('click', clear);
analyzeBtn.addEventListener('click', analyze);