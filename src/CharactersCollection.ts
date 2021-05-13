export class CharactersCollection {
    constructor(public data: string) {}

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex:number, rightIndex:number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    }

    swap(leftIndex: number, rightIndex: number):void {
        const chracters = this.data.split('');

        const leftHand = chracters[leftIndex];
        chracters[leftIndex] = chracters[rightIndex];
        chracters[rightIndex] = leftHand;

        this.data = chracters.join('');
    }
}