type Node<T> = {
    next?: Node<T>,
    value: T,
}

export class SinglyLinkedList<T>{
    head?: Node<T>;
    length: number;

    constructor() {
        this.head = undefined;
        this.length = 0
    }

    get_head(){
        return this.head?.value;
    }

    insert(item: T): void {
        this.length++;
        let node = {value: item, next: undefined} as Node<T>;

        if (!this.head) {
            this.head = node;
            return;
        } 

        node.next = this.head;
        this.head = node;
    }

    delete(item: T): T | undefined{
        let node = this.search(item);

        if (!node || this.length === 0) {
            return undefined;
        }

        this.length--;

        if (node === this.head) {
            this.head = this.head.next;
            node.next = undefined;
            return node.value;
        }

        let prev = this.prev_node(node);
        if (!prev) {
            throw new Error("This should never ever happen!");
        }

        prev.next = node.next;
        node.next = undefined;
        return node.value

    }

    search(item: T): Node<T> | null{
        if (!this.head) {
            return null;
        }

        let curr = this.head;
        while (curr) {

            if (curr.value === item) {
                return curr;
            }

            if (!curr.next) {
                break;
            }

            curr = curr.next;
        }
        return null;
    }

    private prev_node(node: Node<T>): Node<T> | undefined {
        let prev: Node<T> | undefined;
        let curr = this.head;

        while (curr) {
            if (curr === node && prev !== undefined) {
                return prev;
            }

            if (!curr.next) {
                break;
            }

            prev = curr;
            curr = curr.next;
        }
        return undefined
    }

     debug(){
        let list = "";
        let curr = this.head;
        while (curr) {
            list += curr.value + " ";
            curr = curr.next;
        }
        console.log(list.split(' ').join(' -> '));
    }

}

