import {Queue} from "../QFromTwoS";

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
