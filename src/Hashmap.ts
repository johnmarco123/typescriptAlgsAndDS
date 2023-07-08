type node<T> = {
    key: T,
    value: T,
    next?: node<T>;
    prev?: node<T>;
}


export class Hashmap<T> {
    arr: (node<T> | undefined)[];
    m: number;
    A: number;

    constructor(m: number) {
        this.m = m;
        this.arr = Array(m);
        this.A = Math.random();
    }

    set(key: string | number, value: any) {
        let idx = this.hash(key);

        // If we attempt to set a node that is already there
        if (this.getNode(key)) {
            let node = this.getNode(key) as node<T>;
            node.value = value;
            return;
        }

        let curr = this.arr[idx];
        let node = {
            key: key,
            value: value,
            next: undefined,
            prev: undefined,
        } as node<T>;

        if (curr) {
            while(curr.next) {
                curr = curr.next;
            }
            curr.next = node;
            node.prev = curr;
        } else {
            this.arr[idx] = node;
        }
    }

    get(key: string | number): any {
        return this.getNode(key)?.value;
    }

    delete(key: string | number): T | undefined {
        let node = this.getNode(key) as node<T>;
        let hash = this.hash(key);

        if (!node) {
            return undefined;
        }
        // node is in middle
        if (node.next && node.prev) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.prev = node.next = undefined;

        // node is head
        } else if (node.next) {
            node.next.prev = undefined;
            this.arr[hash] = node.next;
            node.next = undefined;

            // node is tail
        } else if (node.prev) {
            node.prev.next = undefined;
            node.prev = undefined;

        } else  {
            this.arr[hash] = undefined;
        }

        return node.value;
    }
    //
    //
    // // Division method -- k mod m 
    // let division_method = key % m;
    //
    // // Multiplication method floor(m(kA mod 1)
    // const A = 0.51823;
    // let multiplication_method = Math.floor(m * (key * A % 1));
    // we use the multiplication method with a random bit shift
    // and a string converter i made myself
    private hash(key: string | number): number {
        if (typeof key === "string") {
            let sum: number = 0;
            for(let i = 0; i < key.length; i++) {
                sum *= key.charCodeAt(i);
                sum <<= 1;
            }
            key = sum;
        } 
        return Math.floor(this.m * (key * this.A % 1));
    }

    private getNode(key: string | number): node<T> | undefined {
        let idx = this.hash(key);
        let curr: node<T> | undefined = this.arr[idx];
        while(curr) {
            if (curr.key === key) {
                return curr
            }
            curr = curr.next;
        }
        return undefined;
    }

    print() {
        let counter = 0;
        for(let i = 0; i < this.arr.length; i++) {
            if (this.arr[i]) {
                let curr = this.arr[i] as node<T> | undefined;
                let outStr = "";
                while(curr) {
                    outStr += `[${curr.key}, ${curr.value}] -> `
                    curr = curr.next;
                    counter++;
                }
                console.log(outStr);
            } 
        }
        console.log(`size: ${counter}`);
    }
}
