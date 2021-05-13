import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';


const numbersCollection = new NumbersCollection([10,3,-5,0])
numbersCollection.sort();
const charactersCollection = new CharactersCollection('beata');
const linkedList = new LinkedList();
linkedList.add(78);
linkedList.add(-10);
linkedList.add(-4);
linkedList.add(12)
// const solter = new Sorter(numbersCollection);
// const solter1 = new Sorter(charactersCollection)
// const solter2 = new Sorter(linkedList);
// solter.sort();
// solter1.sort()
// solter2.sort()
console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();