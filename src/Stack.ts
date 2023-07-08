export class Stack{
    top: number;
    arr: any[];
    max_length: number;

    constructor(max_length: number){
        // since we index at 0, we must reduce max length by 1 to 
        // account
         this.max_length = max_length - 1;
         this.arr = [];
         this.top = -1;
    }

    // O(1)
    is_empty() {
        return this.top < 0;
    }

    // O(1)
    push(x: any): void {
        if (this.is_full()) {
            throw new Error("Overflow!");
        }

        this.top++;
        this.arr[this.top] = x;
    }

    // O(1)
    peek(): any {
        return this.is_empty() ? null : this.arr[this.top];
    }

    // O(1)
    pop(): any {
        if (this.is_empty()) {
            throw new Error("Underflow!");
        }
        const element = this.arr[this.top];
        this.top--;
        return element;
    }

    private is_full(): boolean {
        return this.top >= this.max_length; 
    }

}

