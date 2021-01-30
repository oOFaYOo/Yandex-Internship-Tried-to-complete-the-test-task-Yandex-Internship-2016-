"use strict";

// Функция сортировки принимает массив объектов,, созданных из класса "Card", который представлен ниже. С обязательно заданными параметрами свойств "from" и "to".

export class Card {
    constructor(from, to, fromPlace, toPlace, transport, numOfSeat) {
        this.from = from.toLowerCase();
        this.to = to.toLowerCase();
        this.fromPlace = fromPlace;
        this.toPlace = toPlace;
        this.transport = transport;
        this.numOfSeat = numOfSeat;
    }
}

export function sortCards(cards) {
    const unsortedCards = cards.slice();
    const sortedCards = [];
// find first element of result array
    for (let i = 0; i < unsortedCards.length; i++) {
        let counter = 0;
        for (let j = 0; j < unsortedCards.length; j++) {
            if (unsortedCards[i].from === unsortedCards[j].to) {
                counter = counter + 1;
            }
        }
        if (counter === 0) {
            sortedCards.push(unsortedCards[i]);
            break;
        }
    }
//---------------------------------
    for (let i = 0; i < sortedCards.length; i++) {
        for (let j = 0; j < unsortedCards.length; j++) {
            if (sortedCards[i].to === unsortedCards[j].from) {
                sortedCards.push(unsortedCards[j]);
            }
        }
    }
    return sortedCards;
}
