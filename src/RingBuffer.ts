//when exceeding length, we will create a new RingBuffer with double
//the size of the old one
export class RingBuffer {
    tail: number;
    head: number;
    arr: any[];
    capacity: number;
    length: number;

    constructor(capacity: number) {
        this.head = this.tail = 0;
        this.arr = new Array(capacity).fill(null);
        this.capacity = capacity;
        this.length = 0; 
    }

    // O(1)
    push_back(item: any): void {
        if (this.length == this.capacity) {
            this.double_capacity();
        }
        this.length++;

        this.arr[this.tail] = item;
        this.increase_tail();
    }

    // O(1)
    pop_back(): any {
        if (this.is_empty()) {
            throw new Error("Underflow!");
        }

        this.length--;
        this.decrease_tail();

        const value = this.arr[this.tail];
        this.arr[this.tail] = null;
        return value
    }

    // O(1)
    push_front(item: any): void {
        if (this.length == 0) {
            this.push_back(item);
            return;
        } else if (this.length == this.capacity) {
            this.double_capacity();
        }

        this.length++;
        this.increase_head();
        this.arr[this.head] = item;


    }

    // O(1)
    pop_front(): any {
        if (this.is_empty()) {
            throw new Error("Underflow!");
        }
        this.length--;
        const value = this.arr[this.head];
        this.arr[this.head] = null;

        this.decrease_head();
        return value
     }


    // O(1)
    is_empty(){
        return this.length == 0
    }

    // O(n) since we have to read through the entire old list
    // once
    private double_capacity(): void {
        const new_capacity = this.capacity * 2
        const new_length = this.length; 

        let newArr = Array(new_capacity).fill(null);

        for (let i = 0; i < this.capacity; i++) {
            let out = this.pop_front();
            newArr[i] = out
        }

        this.arr = newArr;
        this.capacity = new_capacity;
        this.length = new_length
        this.head = 0;
        this.tail = new_length;

    }
    private increase_head(): void {
        this.head = this.head == 0 ? this.capacity - 1 : this.head - 1;
    }

    private decrease_head(): void {
        this.head = this.head == this.capacity - 1  ? 0 : this.head + 1;
    }

    private increase_tail(): void {
        this.tail = this.tail == this.capacity - 1  ? 0 : this.tail + 1;
    }

    private decrease_tail(): void {
        this.tail = this.tail == 0 ? this.capacity - 1 : this.tail - 1;
    }
    debug():void {
        console.log(this.arr, this.length);
    }
}

// PERFORMANCE TESTING
// let arr: any = [];
// let buf = new RingBuffer(10_000_000);
// for(let i = 0; i < 4; i++) {
//     console.log("==================================================");
//     [100, 1_000, 10_000, 100_000].forEach(y => {
//         let start = performance.now()
//         for (let i = 0; i < y; i++) {
//             arr.push(i);
//         }
//
//         for (let i = 0; i < y; i++) {
//             arr.shift();
//         }
//
//         console.log(`Array ${y} ${performance.now() - start}`)
//     });
//     console.log("\n");
//
//     [100, 1_000, 10_000, 100_000].forEach(y => {
//         let start = performance.now()
//         for (let i = 0; i < y; i++) {
//             buf.push_back(i);
//         }
//         for (let i = 0; i < y; i++) {
//             buf.pop_front()
//         }
//         console.log(`RingBuffer ${y} ${performance.now() - start}`)
//     })
// }
