// Использование только в Google Chrome.

"use strict";

import {sortCards} from "./api_sortCards.js";

const from = document.getElementById("from");
const to = document.getElementById("to");
const transport = document.getElementById("transport");
const fromPlace = document.getElementById("from_place");
const toPlace = document.getElementById("to_place");
const numOfSeat = document.getElementById("num_of_seat");
const addPath = document.getElementById("add_path");
const added = document.getElementById("added");
const finalPath = document.getElementById("final_path");
const getPath = document.getElementById("get_path");

let unsortedCards = [];

class Card {
    constructor(from, to, fromPlace, toPlace, transport, numOfSeat) {
        this.from = from.toLowerCase();
        this.to = to.toLowerCase();
        this.fromPlace = fromPlace;
        this.toPlace = toPlace;
        this.transport = transport;
        this.numOfSeat = numOfSeat;
    }
}

addPath.onclick = () => {
    if (from.value !== "" &&
        to.value !== "" &&
        transport.value !== "" &&
        fromPlace.value !== "" &&
        toPlace.value !== "" &&
        numOfSeat.value !== "") {
        unsortedCards.push(new Card(from.value, to.value, fromPlace.value, toPlace.value, transport.value, numOfSeat.value));
        added.innerHTML = added.innerHTML + `<p>- Начало пути в городе ${formatWordToSentenceStandard(from.value)}. Отправление из ${fromPlace.value}. Используемый транспорт ${transport.value.toLowerCase()}. Сиденье №${numOfSeat.value}. Прибытие в ${toPlace.value} города ${formatWordToSentenceStandard(to.value)}.</p>`;
        from.value = "";
        to.value = "";
        fromPlace.value = "";
        toPlace.value = "";
        transport.value = "";
        numOfSeat.value = "";
    } else {
        let errorMessage = "Пожалуйста, заполните пустые поля";
        alert(errorMessage);
        console.log(errorMessage);
    }
};

getPath.onclick = () => {
    finalPath.innerHTML = "";
    if(unsortedCards.length === 0 &&
        from.value !== "" &&
        to.value !== "" &&
        transport.value !== "" &&
        fromPlace.value !== "" &&
        toPlace.value !== "" &&
        numOfSeat.value !== ""){
        finalPath.innerHTML = finalPath.innerHTML + `<p>- Начало пути в городе ${formatWordToSentenceStandard(from.value)}. Отправление из ${fromPlace.value}. Используемый транспорт ${transport.value.toLowerCase()}. Сиденье №${numOfSeat.value}. Прибытие в ${toPlace.value} города ${formatWordToSentenceStandard(to.value)}.</p>`;
    }
    let sortedCards = sortCards(unsortedCards);
    from.value = "";
    to.value = "";
    fromPlace.value = "";
    toPlace.value = "";
    transport.value = "";
    numOfSeat.value = "";
    added.innerHTML = "";
    for (let card of sortedCards) {
        finalPath.innerHTML = finalPath.innerHTML + `<p>- Начало пути в городе ${formatWordToSentenceStandard(card.from)}. Отправление из ${card.fromPlace}. Используемый транспорт ${card.transport.toLowerCase()}. Сиденье №${card.numOfSeat}. Прибытие в ${card.toPlace} города ${formatWordToSentenceStandard(card.to)}.</p>`;
    }
    sortedCards = [];
};

function formatWordToSentenceStandard(string) {
    return string[0].toUpperCase()+string.slice(1);
}

