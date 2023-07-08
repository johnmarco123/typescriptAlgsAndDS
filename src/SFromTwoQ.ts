import {Queue} from "./Queue";

export class Stack{
    arr: any[];
    queue1: Queue;
    queue2: Queue;

    constructor(capacity: number){
        this.queue1 = new Queue(capacity);
        this.queue2 = new Queue(capacity);
    }

    // O(1)
    is_empty(): boolean {
        return (this.queue1.is_empty() &&
                this.queue2.is_empty()) 
    }

    // if its empty then O(1) otherwise its O(n^2) since we 
    // call shift twice
    push(item: any): void {
        if (!this.queue1.is_empty()){
            this.shift_to_queue2();
            this.queue1.enqueue(item);
            this.shift_to_queue1();
            return
        };
            this.queue1.enqueue(item);
    }

    // O(1)
    pop(): any {
        return this.queue1.dequeue()
    }

    private shift_to_queue1 (): void {
        while (!this.queue2.is_empty()) {
            this.queue1.enqueue(this.queue2.dequeue());
        }
    }

    private shift_to_queue2 (): void {
        while (!this.queue1.is_empty()) {
            this.queue2.enqueue(this.queue1.dequeue());
        }
    }
}
