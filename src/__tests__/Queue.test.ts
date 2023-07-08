import {Queue} from "../Queue";

test("Is empty when created", () => {
    const s = new Queue(5)
    expect(s.is_empty()).toEqual(true);
})

test("Empty. Enqueue. Not empty", () => {
    const s = new Queue(5)
    expect(s.is_empty()).toEqual(true);
    s.enqueue(2)
    expect(s.is_empty()).toEqual(false);
})

test("Dequeue when empty. throw underflow error", () => {
    const s = new Queue(3)
    expect(() => {s.dequeue()}).toThrow("Underflow!");
})

test("Enqueue, two dequeues, throw underflow error", () => {
    const s = new Queue(3)
    s.enqueue(5)
    s.dequeue()
    expect(() => {s.dequeue()}).toThrow("Underflow!");
})

test("Enqueue past capacity, throw overflow error", () => {
    const s = new Queue(3)
    s.enqueue(5)
    s.enqueue(5)
    s.enqueue(5)
    expect(() => {s.enqueue(99)}).toThrow("Overflow!");
})

test("Enqueue, dequeue return correct value", () => {
    const s = new Queue(3)
    s.enqueue(5)
    expect(s.dequeue()).toEqual(5);
})

test("2Enqueue, 2dequeue return correct values", () => {
    const s = new Queue(3)
    s.enqueue('first')
    s.enqueue('last')
    expect(s.dequeue()).toEqual('first');
    expect(s.dequeue()).toEqual('last');
})

test("enqueue till full capacity, dequeue, enqueue", () => {
    const s = new Queue(3)
    s.enqueue(0)
    s.enqueue(1)
    s.enqueue(2)
    s.dequeue()
    s.enqueue(3)
    expect(s.dequeue()).toEqual(1);
})

test("3 enqueue 3 dequeue 4 enqueue throw overflow", () => {
    const s = new Queue(3)
    s.enqueue(0)
    s.enqueue(1)
    s.enqueue(2)
    s.dequeue()
    s.dequeue()
    s.dequeue()
    s.enqueue(0)
    s.enqueue(1)
    s.enqueue(2)
    expect(() => {s.enqueue(4)}).toThrow("Overflow!");
})

// this.arr shouldn't usually be accessible, but we keep it accessible to 
// test to ensure we aren't utalizing array growth at all
test("full of nulls when created", () => {
    const s = new Queue(5)
    expect(s.arr).toEqual([null, null, null, null, null]);
})

test("Doesn't use js array growing. It wraps around the array", () => {
    const s = new Queue(3)
    s.enqueue(1)
    s.enqueue(2)
    s.enqueue(3)
    expect(s.arr).toEqual([1, 2, 3]);
    s.dequeue()
    expect(s.arr).toEqual([null, 2, 3]);
    s.dequeue()
    expect(s.arr).toEqual([null, null, 3]);
    s.enqueue(8)
    expect(s.arr).toEqual([8, null, 3]);
    s.dequeue()
    expect(s.arr).toEqual([8, null, null]);
    s.enqueue(18)
    expect(s.arr).toEqual([8, 18, null]);
    s.dequeue()
    expect(s.arr).toEqual([null, 18, null]);
})


