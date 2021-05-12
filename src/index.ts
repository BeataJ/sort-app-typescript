import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10,3,-5,0])
const solter = new Sorter(numbersCollection);
solter.sort();
console.log(numbersCollection.data);