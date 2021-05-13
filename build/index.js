"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var charactersCollection = new CharactersCollection_1.CharactersCollection('beata');
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(78);
linkedList.add(-10);
linkedList.add(-4);
linkedList.add(12);
// const solter = new Sorter(numbersCollection);
// const solter1 = new Sorter(charactersCollection)
// const solter2 = new Sorter(linkedList);
// solter.sort();
// solter1.sort()
// solter2.sort()
console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
