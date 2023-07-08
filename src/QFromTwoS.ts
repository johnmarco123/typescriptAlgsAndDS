import {Stack} from "./Stack";

export class Queue{
    arr: any[];
    input: Stack;
    output: Stack;

    constructor(capacity: number){
        this.input = new Stack(capacity);
        this.output = new Stack(capacity);
    }

    // O(1)
    is_empty(): boolean {
        return (this.input.is_empty() &&
                this.output.is_empty()) 
    }
    // O(n) if we have to shift stacks, otherwise it is
    // O(1)
    enqueue(item: any): void {
        if (this.input.is_empty()) this.shift_stacks();
        this.input.push(item);
    }

    // O(n) if we have to shift stacks, otherwise it is
    // O(1)
    dequeue(): any {
        if (this.output.is_empty()) this.shift_stacks();
        return this.output.pop()
    }

    // O(n)
    private shift_stacks(): void {
        let reciever: Stack; 
        let giver: Stack; 

        if (this.input.is_empty()) {
            reciever = this.input;
            giver = this.output;
        } else {
            reciever = this.output;
            giver = this.input;
        }

        while (!giver.is_empty()) {
            reciever.push(giver.pop());
        }
    }
}
