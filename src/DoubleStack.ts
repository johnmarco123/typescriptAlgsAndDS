export class DoubleStack {
    capacity: number;
    arr: any[];
    top1: number;
    top2: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.arr = Array(capacity).fill(null);
        this.top1 = -1;
        this.top2 = capacity;
    }

    is_empty(): boolean {
        return this.top2 == this.capacity && this.top1 == -1;
    }

    // O(1)
    push(item: any): void {

        if (this.arr[this.top1 + 1] !== null) {
            throw new Error("Overflow!");
        } else if (item === null) {
            throw new Error("Cannot push null!")
        }

        if (this.top1 > this.capacity - this.top2 - 1) {
            this.top2--;
            this.arr[this.top2] = item;
        } else {
            this.top1++;
            this.arr[this.top1] = item;
        }
    }

    // O(1)
    pop() {
        if (this.is_empty()) {
            throw new Error("Underflow!");
        }
        let out: any;

        if (this.top1 > this.capacity - 1 - this.top2) {
            out = this.arr[this.top1];
            this.arr[this.top1] = null;
            this.top1--;
        } else {
            out = this.arr[this.top2];
            this.arr[this.top2] = null;
            this.top2++;
        }
        return out;
    }

    private debug(): void {
        console.log(this.arr);
    }

}
