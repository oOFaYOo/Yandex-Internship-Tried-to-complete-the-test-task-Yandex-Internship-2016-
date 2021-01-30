"use strict";

//Функция сортировки принимает массив объектов, содержащих обязательные свойства "from" и "to", значения которых имеют один регистр.

// Или же массив объектов, созданных из класса "Card", который представлен ниже. С обязательно заданными параметрами свойств "from" и "to".

// class Card {
//     constructor(from, to, fromPlace, toPlace, transport, numOfSeat) {
//         this.from = from.toLowerCase();
//         this.to = to.toLowerCase();
//         this.fromPlace = fromPlace;
//         this.toPlace = toPlace;
//         this.transport = transport;
//         this.numOfSeat = numOfSeat;
//     }
// }

//Итоговый вариант функции сортировки. Оптимизированный. Сложность О(n);

export function sortCards(cards) {
    const unsortedCards = cards.slice();
    const sortedCards = [];
// find first element of result array
    let numberOfCard = 0;
    for (let i = 0; i < unsortedCards.length; i++) {
        let card = unsortedCards[numberOfCard];
        let counter = 0;
        if (card.from === unsortedCards[i].to) {
            counter = counter + 1;
        }
        if (i === unsortedCards.length - 1) {
            if (counter === 0) {
                sortedCards.push(card);
                numberOfCard = 0;
                break;
            }
            numberOfCard = numberOfCard + 1;
            i = -1;
        }
    }
//-------------------------------------------------------
    for (let i = 0; i < unsortedCards.length; i++) {
        if (sortedCards[numberOfCard].to === unsortedCards[i].from) {
            sortedCards.push(unsortedCards[i]);
            numberOfCard = numberOfCard + 1;
            i = -1;
        }
    }
    return sortedCards;
}


//Первый вариант функции сортировки. До оптимизации. Сложность О(n^2);

// export function sortCards(cards) {
//     const unsortedCards = cards.slice();
//     const sortedCards = [];
// // find first element of result array
//     for (let i = 0; i < unsortedCards.length; i++) {
//         let counter = 0;
//         for (let j = 0; j < unsortedCards.length; j++) {
//             if (unsortedCards[i].from === unsortedCards[j].to) {
//                 counter = counter + 1;
//             }
//         }
//         if (counter === 0) {
//             sortedCards.push(unsortedCards[i]);
//             break;
//         }
//     }
// //---------------------------------
//     for (let i = 0; i < sortedCards.length; i++) {
//         for (let j = 0; j < unsortedCards.length; j++) {
//             if (sortedCards[i].to === unsortedCards[j].from) {
//                 sortedCards.push(unsortedCards[j]);
//             }
//         }
//     }
//     return sortedCards;
// }
