
mocha.setup('bdd');

import {sortCards} from "./api_sortCards.js";

describe ("testing sortCard function", function () {

    it ("Sorts an array of maps (objects) from the city of departure to the city of arrival", function () {
        let a = {from: "m", to: "s"};
        let b = {from: "s", to: "t"};
        let c = {from: "e", to: "m"};
        let arrOfCards = [a, b, c];
        let result = [c, a, b];
        chai.assert.deepEqual(sortCards(arrOfCards), result);
    })

});

mocha.run();