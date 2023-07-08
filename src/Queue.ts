export class Queue{
    arr: any[];
    private head: number 
    private tail: number;
    private capacity: number;

    constructor(capacity: number){
        this.capacity = capacity
        this.arr = new Array(capacity).fill(null);
        this.head = 0;
        this.tail = 0;
    }

    // O(1)
    is_empty(): boolean {
        return this.tail == this.head
    }

    // O(1)
    enqueue(item: any): void {
        if (this.is_full()) {
            throw new Error("Overflow!");
        }

        this.arr[this.tail % this.capacity] = item;
        this.tail++;
    }

    dequeue(): any {
        if (this.is_empty()) {
            throw new Error("Underflow!");
        }
        let deleted_value = this.arr[this.head % this.capacity];
        this.arr[this.head % this.capacity] = null;
        this.head++;
        return deleted_value;
    }

    private is_full() {
        return this.tail % this.capacity == this.head % this.capacity 
               && this.tail > this.head;
    }

}
