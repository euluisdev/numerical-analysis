"use strict";
const addBtn = document.querySelector('#add-btn');
const clearBtn = document.querySelector('#clear-btn');
const analyzeBtn = document.querySelector('#analyze-btn');
const num = document.querySelector("#fnum");
const list = document.querySelector("#flist");
const resul = document.querySelector("#res");
// this handles null values
if (!addBtn || !clearBtn || !analyzeBtn || !num || !list || !resul) {
    throw new Error("Um ou mais elementos não foram encontrados no DOM.");
}
;
let value = [];
// this conditions values between 0 and 100
const isNumb = (n) => {
    if (Number(n) >= 1 && Number(n) <= 99) {
        return true;
    }
    else {
        return false;
    }
};
// checks if the number is in the list
const inList = (n, l) => {
    if (l.indexOf(Number(n)) !== -1) {
        return true;
    }
    else {
        return false;
    }
};
// parses the list and adds the result
const analyze = () => {
    if (value.length === 0) {
        alert("Adicione valores antes de Analisar");
    }
    else {
        let tot = value.length;
        let bigger = value[0];
        let smaller = value[0];
        let sum = 0;
        let average = 0;
        for (let pos in value) {
            sum += value[parseInt(pos)];
            if (value[parseInt(pos)] > bigger) {
                bigger = value[parseInt(pos)];
            }
            if (value[parseInt(pos)] < smaller) {
                smaller = value[parseInt(pos)];
            }
        }
        average = sum / tot;
        resul.innerHTML = "";
        resul.innerHTML += `<p>Ao todo temos ${tot} Números cadastrados.</p>`;
        resul.innerHTML += `<p>O maior valor encontrado foi ${bigger}.</p>`;
        resul.innerHTML += `<p>O menor valor informado foi ${smaller}.</p>`;
        resul.innerHTML += `<p>Somando os valores cadastrados, temos: ${sum}.</p>`;
        resul.innerHTML += `<p>A média dos valores cadastrados é: ${average}.</p>`;
    }
};
// Adds the number to the 'value' list
const add = () => {
    if (isNumb(num.value) && !inList(num.value, value)) {
        value.push(Number(num.value));
        // Creates a new HTML option, and adds it to the list
        let item = document.createElement("option");
        item.text = `Valor ${num.value} adicionado!`;
        list.appendChild(item);
        resul.innerHTML = "";
    }
    else {
        alert("Valor inválido ou já encontrado na lista");
    }
    num.value = "";
    num.focus();
};
// clear all
const clear = () => {
    if (value.length === 0) {
        alert('Adicione um valor!');
    }
    else {
        resul.innerHTML = 'Resultado..';
        list.innerHTML = '';
        value = [];
    }
    ;
};
// add click event to buttons
addBtn.addEventListener('click', add);
clearBtn.addEventListener('click', clear);
analyzeBtn.addEventListener('click', analyze);
