import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection'

const numbersCollection = new NumbersCollection([10,3,-5,0])
const charactersCollection = new CharactersCollection('beata')
const solter = new Sorter(numbersCollection);
const solter1 = new Sorter(charactersCollection)
solter.sort();
solter1.sort()
console.log(numbersCollection.data);
console.log(charactersCollection.data);