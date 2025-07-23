//leetcode 150 interview question
//https://leetcode.com/problems/find-median-from-data-stream/
class MedianFinder {
    private left: number[]; // Max heap (invert values to simulate)
    private right: number[]; // Min heap

    constructor() {
        this.left = [];
        this.right = [];
    }

    addNum(num: number): void {
        // Push to max heap (invert sign to simulate max heap)
        this.pushHeap(this.left, -num);
        
        // Balance: move max of left to right
        this.pushHeap(this.right, -this.popHeap(this.left));

        // Maintain size invariant: left can have one more than right
        if (this.right.length > this.left.length) {
            this.pushHeap(this.left, -this.popHeap(this.right));
        }
    }

    findMedian(): number {
        if (this.left.length > this.right.length) {
            return -this.left[0];
        }
        return (-this.left[0] + this.right[0]) / 2;
    }

    private pushHeap(heap: number[], val: number): void {
        heap.push(val);
        this.heapifyUp(heap, heap.length - 1);
    }

    private popHeap(heap: number[]): number {
        const top = heap[0];
        const end = heap.pop();
        if (heap.length > 0 && end !== undefined) {
            heap[0] = end;
            this.heapifyDown(heap, 0);
        }
        return top;
    }

    private heapifyUp(heap: number[], index: number): void {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (heap[index] < heap[parent]) {
                [heap[index], heap[parent]] = [heap[parent], heap[index]];
                index = parent;
            } else break;
        }
    }

    private heapifyDown(heap: number[], index: number): void {
        const length = heap.length;
        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left < length && heap[left] < heap[smallest]) smallest = left;
            if (right < length && heap[right] < heap[smallest]) smallest = right;

            if (smallest !== index) {
                [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
                index = smallest;
            } else break;
        }
    }
}
