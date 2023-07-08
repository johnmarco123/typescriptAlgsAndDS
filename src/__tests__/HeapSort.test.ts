import * as heap from "../HeapSort";

test("right node", () => {
    let parent1 = 0;
    expect(heap.right(parent1)).toEqual(2);
    let parent2 = 1;
    expect(heap.right(parent2)).toEqual(4);
    let parent3 = 2;
    expect(heap.right(parent3)).toEqual(6);
})

test("left node", () => {
    let parent1 = 0;
    expect(heap.left(parent1)).toEqual(1);
    let parent2 = 1;
    expect(heap.left(parent2)).toEqual(3);
    let parent3 = 2;
    expect(heap.left(parent3)).toEqual(5);
})

test("parent node", () => {
    let child1 = 2;
    expect(heap.parent(child1)).toEqual(0);
    let child2 = 4;
    expect(heap.parent(child2)).toEqual(1);
    let child3 = 9;
    expect(heap.parent(child3)).toEqual(4);
})

test("swap elements in an array", () => {
    let arr = [5, 16, 2, 4, 10, 11, 132];
    heap.exchange(arr, 5, 1);
    expect(arr).toEqual([5, 11, 2, 4, 10, 16, 132])
    heap.exchange(arr, 5, arr.length - 1);
    expect(arr).toEqual([5, 11, 2, 4, 10, 132, 16])
})

test("max heapify", () => {
    let arr = [5, 16, 2, 4, 10, 11, 132];
    heap.max_heapify(arr, 2);
    expect(arr).toEqual([5, 16, 132, 4, 10, 11, 2])
    heap.max_heapify(arr, 1);
    expect(arr).toEqual([5, 16, 132, 4, 10, 11, 2])
    heap.max_heapify(arr, 0);
    expect(arr).toEqual([132, 16, 11, 4, 10, 5, 2])
})

test("max make heap", () => {
    let arr = [5, 16, 2, 4, 10, 11, 132];
    heap.make_max_heap(arr);
    expect(arr).toEqual([132, 16, 11, 4, 10, 5, 2])
})

test("100 random numbers", () => {
    let arr1:number[] = [];
    let arr2:number[] = [];
    let i = -1;
    while (++i < 100) {
        let n = Math.floor(Math.random() * 100);
        arr1[i] = arr2[i] = n;
    }

    heap.heap_sort(arr1)
    expect(arr1).toEqual(arr2.sort((a,b)=>a-b));
});
