import { BinaryTree } from "../BinaryTree";

test("inserting nodes and cheking post, pre and in order walks", () => {
    let tree = new BinaryTree();
    tree.insert(4);
    tree.insert(3);
    tree.insert(8);
    tree.insert(1);
    tree.insert(6);
    tree.insert(9);
    tree.insert(7);
    tree.insert(0);
    tree.insert(2);
    tree.insert(5);
    expect(tree.pre_order_tree_walk()).toEqual([4, 3, 1, 0, 2, 8, 6, 5, 7, 9]);
    expect(tree.post_order_tree_walk()).toEqual([0, 2, 1, 3, 5, 7, 6, 9, 8, 4]);
    expect(tree.in_order_tree_walk()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

//         4 
//       3     8 
//      1     6  9 
//     0 2   5 7 
//          

test("get correct predesesor and and successor", () => {
    let tree = new BinaryTree();
    tree.insert(4);
    tree.insert(3);
    tree.insert(8);
    tree.insert(1);
    tree.insert(6);
    tree.insert(9);
    tree.insert(7);
    tree.insert(0);
    tree.insert(2);
    tree.insert(5);
    let node = tree.search_iterative(6, tree.root);
    if (node) {
        expect(tree.successor(node)?.value).toEqual(7);
        expect(tree.predecessor(node)?.value).toEqual(5);
    }
});

//         4 
//       3     8 
//      1     6  9 
//     0 2   5 7 
//          

test("deleting values", () => {
    let tree = new BinaryTree();
    tree.insert(4);
    tree.insert(3);
    tree.insert(8);
    tree.insert(1);
    tree.insert(6);
    tree.insert(9);
    tree.insert(7);
    tree.insert(0);
    tree.insert(2);
    tree.insert(5);
    let node = tree.search_iterative(1, tree.root);
    if (node) {
        tree.delete(node);
        let result = tree.in_order_tree_walk();
        expect(result).toEqual([0, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
});

