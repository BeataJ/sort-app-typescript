"use strict";
var Solter = /** @class */ (function () {
    function Solter(collection) {
        this.collection = collection;
    }
    Solter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
            }
        }
    };
    return Solter;
}());
var solter = new Solter([10, 3, -5, 0]);
solter.sort();
console.log(solter.collection);
