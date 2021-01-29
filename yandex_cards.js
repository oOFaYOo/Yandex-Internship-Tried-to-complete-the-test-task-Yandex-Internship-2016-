// Использование только в Google Chrome.
// Входные данные принимаются в виде строк.
// Первая строка "город отправления",
// вторая строка "город прибытия",
// третья строка "подробное описание способа путешествия, транспорта, номера места и тд".

"use strict";

const from = document.getElementById("from");
const to = document.getElementById("to");
const about = document.getElementById("about");
const add_path = document.getElementById("add_path");
const added = document.getElementById("added");
const final_path = document.getElementById("final_path");
const get_path = document.getElementById("get_path");

let unsortedDirections = [];

class OneDirection {
    constructor(from, to, about) {
        this.from = from;
        this.to = to;
        this.about = about;
    }
}

add_path.onclick = () => {
    if (from.value !== "" && to.value !== "" && about.value !== "") {
        unsortedDirections.push(new OneDirection(from.value.toLowerCase(), to.value.toLowerCase(), about.value));
        added.innerHTML = added.innerHTML + `<p>- ${about.value}</p>`;
        from.value = "";
        to.value = "";
        about.value = "";
    } else {
        alert("Пожалуйста, заполните пустые поля");
        console.log("Пожалуйста, заполните пустые поля");
    }
};

get_path.onclick = () => {
    if(unsortedDirections.length === 0 && from.value !== "" && to.value !== "" && about.value !== ""){
        final_path.innerHTML = final_path.innerHTML + `<p>${about.value}</p>`;
    }
    let sortedDirections = sorting(unsortedDirections);
    from.value = "";
    to.value = "";
    about.value = "";
    added.innerHTML = "";
    for (let val of sortedDirections) {
        final_path.innerHTML = final_path.innerHTML + `<p>${val.about}</p>`;
    }
};

function sorting(arr) {
    let unsortedArr = arr.slice();
    let resultArr = [];
// find first element of result arr
    for (let i = 0; i < unsortedArr.length; i++) {
        let counter = 0;
        for (let j = 0; j < unsortedArr.length; j++) {
            if (unsortedArr[i].from === unsortedArr[j].to) {
                counter = counter + 1;
            }
        }
        if (counter === 0) {
            resultArr.push(unsortedArr[i]);
            unsortedArr[i] = null;
            break;
        }
    }
    unsortedArr = unsortedArr.filter(item => item !== null);
//---------------------------------
    for (let i = 0; i < resultArr.length; i++) {
        for (let j = 0; j < unsortedArr.length; j++) {
            if (resultArr[i].to === unsortedArr[j].from) {
                resultArr.push(unsortedArr[j]);
            }
        }
    }
    return resultArr;
}

