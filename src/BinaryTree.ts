type Node<T> = {
    value: T,
    left?: Node<T>, 
    right?: Node<T>, 
    parent?: Node<T>, 
}

export class BinaryTree<T> {
    root?: Node<T>;

    constructor() {
        this.root = undefined;
    }

    post_order_tree_walk() {
        return this.walk("post", [], this.root);
    }

    pre_order_tree_walk() {
        return this.walk("pre", [], this.root);
    }

    in_order_tree_walk() {
        return this.walk("in", [], this.root);
    }

    search_recursive(val: T, curr?: Node<T>): Node<T> | undefined {

        if(!curr || val === curr.value) {
            return curr;
        }

        if (val < curr.value) {
            return this.search_recursive(val, curr.left);
        } else {
            return this.search_recursive(val, curr.right);
        }
    }

    search_iterative(val: T, curr?: Node<T>): Node<T> | undefined {
        while (curr && val !== curr.value) {
            if (val < curr.value) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }
        return curr;
    }


    // The next biggest value after the given node = successor
    // If the current is not to the right of the parent, this means
    // the parent is to the right of current, therefore it is the first 
    // successor!
    successor(curr: Node<T>): Node<T> | undefined {
        if (curr.right) {
            return this.minimum(curr.right);
        }

        let parent: Node<T> | undefined = curr?.parent;
        while (parent && curr === parent.right) {
            curr = parent;
            parent = parent?.parent;
        }
        return parent;
    }

    // The next smallest value after the given node = predecessor
    predecessor(curr: Node<T>): Node<T> | undefined {
        if (curr.left) {
            return this.maximum(curr.left);
        }

        let parent: Node<T> | undefined = curr.parent;

        while (parent && curr === parent.left) {
            curr = parent;
            parent = parent?.parent;
        }
        return parent;
    }
    // Traverse the tree from the top till we find an appropriate spot to insert
    // the new node
    insert(val: T) {
        let parent = undefined as Node<T> | undefined;
        let curr = this.root as Node<T> | undefined;

        const node = {
            value: val,
            left: undefined, 
            right: undefined, 
            parent: undefined, 
        } as Node<T>

        while (curr) {
            parent = curr;
            if (node.value < curr.value) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }

        if (!parent) {
            this.root = node // The tree was empty
        } else if (node.value < parent.value) {
            parent.left = node;
            node.parent = parent;
        } else {
            parent.right = node;
            node.parent = parent;
        }
    }

    minimum(curr?: Node<T>): Node<T> | undefined {
        while (curr?.left) curr = curr.left;
        return curr;
    }

    // Replaces one subtree as a child of its parent with another subtree 
    transplant(subTree1: Node<T>, subTree2: Node<T>) {
        if (subTree1.parent === undefined) {
            // We make stree2 the new root
            this.root = subTree2;
        } else if (subTree1 === subTree1.parent.left) {
            subTree1.parent.left = subTree2;
        } else {
            subTree1.parent.right = subTree2;
        }
        if (subTree2) {
            subTree2.parent = subTree1.parent;
        }

    }

    delete(node: Node<T>): T {
        if (node.left === undefined && node.right) {
            this.transplant(node, node.right);
        } else if (node.right === undefined && node.left) {
            this.transplant(node, node.left);
        } else {
            let y = this.minimum(node.right) as Node<T>;
            if (y?.parent !== node && y) {
                this.transplant(y, y.right as Node<T>)
                y.right = node.right as Node<T>;
                y.right.parent = y;
            }
            this.transplant(node, y as Node<T>)
            y.left = node.left as Node<T>
            y.left.parent = y;
        }
        return node.value;
    }

    maximum(curr?: Node<T>): Node<T> | undefined {
        while (curr?.right !== undefined) {
            curr = curr.right;
        }
        return curr;
    }


    private walk(order: String, tree: T[], curr?: Node<T>) {
        if (curr) {
            if(order === "pre") {
                tree.push(curr.value)
            };

            this.walk(order, tree, curr.left as Node<T>);

            if(order === "in") {
                tree.push(curr.value);
            }

            this.walk(order, tree, curr.right as Node<T>);

            if(order === "post") {
                tree.push(curr.value);
            }
        }
        return tree;
    }

    draw_tree() {
        // startInsertAt(idx) copies the array at that idx
        let out = this.in_order_tree_walk();
        let count: number = 0;
        let count_should_be: number = 1;
        let temp: T[] = [];
        for (let i = 0; i < out.length; i++) {
            temp.push(out[i]);
            count++;
            // count = 1, 2, 4, 8
            if (count === count_should_be) {
                count = 0;
                count_should_be *= 2;
                console.log(temp.toString());
                temp = [];
            }
        }
        if (temp) {
            console.log(temp.toString());
        }
    }
}
let f = new BinaryTree();
f.insert(5);
f.insert(6);
f.insert(7);
f.insert(8);
f.insert(9);
f.insert(10);
f.insert(11);
f.insert(12);
f.insert(13);
f.insert(14);
f.insert(15);
f.insert(16);
f.insert(17);
f.insert(18);
f.insert(19);
f.insert(20);
f.draw_tree();
let node1: any = f.search_iterative(10, f.root);
f.delete(node1)
f.draw_tree();
