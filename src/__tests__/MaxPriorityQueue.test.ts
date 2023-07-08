import { MaxPriorityQueue } from "../MaxPriorityQueue"

test("add nodes check max, change key, check again", () => {
    let q = new MaxPriorityQueue();
    q.insert(7)
    q.insert(6)
    q.insert(5)
    q.insert(4)
    q.insert(3)
    q.insert(2)
    q.insert(1)
    expect(q.maximum()).toEqual(7);
    q.increase_key(6, 500)
    expect(q.maximum()).toEqual(500);
})

test("underflow, add one check max, extract max underflow", () => {
    let q = new MaxPriorityQueue();
    expect(() => {q.extract_max()}).toThrow();
    q.insert(5)
    expect(q.maximum()).toEqual(5);
    expect(q.extract_max()).toEqual(5);
    expect(() => {q.extract_max()}).toThrow();
})

test("add 5 elements, remove 3, add 1 remove 1", () => {
    let q = new MaxPriorityQueue();
    q.insert(19)
    q.insert(40)
    q.insert(26)
    q.insert(33)
    q.insert(47)
    expect(q.extract_max()).toEqual(47);
    expect(q.extract_max()).toEqual(40);
    expect(q.extract_max()).toEqual(33);
    q.insert(500);
    expect(q.maximum()).toEqual(500);

})


test("add nodes and check maximum", () => {
    let q = new MaxPriorityQueue();
    q.insert(19)
    q.insert(40)
    q.insert(26)
    q.insert(33)
    q.insert(47)
    q.insert(12)
})


