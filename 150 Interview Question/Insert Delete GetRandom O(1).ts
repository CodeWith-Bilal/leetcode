class RandomizedSet {
    private map: Map<number, number>;
    private list: number[];

    constructor() {
        this.map = new Map();
        this.list = [];
    }

    insert(val: number): boolean {
        if (this.map.has(val)) return false;
        this.map.set(val, this.list.length);
        this.list.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.map.has(val)) return false;

        // Get index of the element to remove
        let index = this.map.get(val)!;
        let lastElement = this.list[this.list.length - 1];

        // Swap with the last element if it's not the same
        this.list[index] = lastElement;
        this.map.set(lastElement, index);

        // Remove the last element
        this.list.pop();
        this.map.delete(val);
        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.list.length);
        return this.list[randomIndex];
    }
}
