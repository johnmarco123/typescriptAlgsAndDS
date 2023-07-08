export class MaxPriorityQueue<T> {
    arr: any[];
    size: number;

    constructor() {
        // This will be fixed size for this implamentation
        this.arr = [];
        this.size = 0;
    }

    // O(1)
    maximum(): T | undefined {
        return this.arr[0];
    }

    // O(lg n)
    extract_max(): T {
        if (this.size < 1) {
            throw new Error("Heap underflow");
        }

        let max = this.arr[0];
        this.arr[0] = this.arr[this.size - 1];
        this.size--;
        this.max_heapify(0);
        return max;
    }

    // O(lg n)
    max_heapify(idx: number) {
        let l = this.left(idx);
        let r = this.right(idx);
        let largest = idx;

        if (this.arr[r] > this.arr[largest] && l <= this.size) {
            largest = r;
        }


        if (this.arr[l] > this.arr[largest] && l <= this.size) {
            largest = l;
        }

        if (largest != idx) {
            this.exchange(idx, largest);
            this.max_heapify(largest);
        }

    }

    // O(lg n)
    increase_key(idx: number, key: number): void {
        if (key < this.arr[idx]) {
            throw new Error("New key is smaller than current key");
        }

        this.arr[idx] = key;

        while (idx > 0 && this.arr[this.parent(idx)] < this.arr[idx]) {
            this.exchange(idx, this.parent(idx));
            idx = this.parent(idx);
        }
    }

    // O(lg n)
    insert(key: number) {
        this.arr[this.size] = -Infinity;
        this.increase_key(this.size, key);
        this.size++;
    }

    private left(idx: number): number {
        return 2 * idx + 1
    }

    private right(idx: number): number {
        return 2 * idx + 2
    }

    private parent(idx: number): number {
        return ~~((idx - 1) / 2)
    }

    private exchange(idx1: number, idx2: number) {
        let temp = this.arr[idx1];
        this.arr[idx1] = this.arr[idx2];
        this.arr[idx2] = temp;
    }

}
