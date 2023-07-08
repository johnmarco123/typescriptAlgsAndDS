import {RingBuffer} from "../RingBuffer";

test("empty when initialized", () => {
    let r = new RingBuffer(5);
    expect(r.is_empty()).toBe(true);
});

test("empty, push back, not empty", () => {
    let r = new RingBuffer(5);
    expect(r.is_empty()).toBe(true);
    r.push_back(1);
    expect(r.is_empty()).toBe(false);
});

test("2 push backs, pop back, return value", () => {
    let r = new RingBuffer(5);
    r.push_back(1);
    r.push_back(2);
    expect(r.pop_back()).toEqual(2);
});

test("2 push fronts, pop front, return value", () => {
    let r = new RingBuffer(5);
    r.push_front(1);
    r.push_front(2);
    expect(r.pop_front()).toEqual(2);
});

test("2 push fronts, pop back, return value", () => {
    let r = new RingBuffer(3);
    r.push_front(1);
    r.push_front(2);
    expect(r.pop_back()).toEqual(1);
});

test("2 push backs, pop front, return value", () => {
    let r = new RingBuffer(3);
    r.push_back(1);
    r.push_back(2);
    expect(r.pop_front()).toEqual(1);
});

test("pop back empty ring buffer", () => {
    let r = new RingBuffer(3);
    expect(() => {r.pop_back()}).toThrow("Underflow!");
});


test("pop front empty ring buffer", () => {
    let r = new RingBuffer(3);
    expect(() => {r.pop_front()}).toThrow("Underflow!");
});


test("2 push front, 3 pop back, throw underflow", () => {
    let r = new RingBuffer(3);
    r.push_front(1);
    r.push_front(2);
    r.pop_back();
    r.pop_back();
    expect(() => {r.pop_back()}).toThrow("Underflow!");
});

test("2 push back, 3 pop front, throw underflow", () => {
    let r = new RingBuffer(3);
    r.push_back(1);
    r.push_back(2);
    r.pop_front();
    r.pop_front();
    expect(() => {r.pop_front()}).toThrow("Underflow!");
});

test("push past capacity should double capacity", () => {
    let r = new RingBuffer(3);
    expect(r.arr).toEqual([null, null, null]);
    r.push_back(1);
    r.push_back(2);
    r.push_back(3);
    r.push_back(4);
    expect(r.arr).toEqual([1, 2, 3, 4, null, null]);
});

test("full integration chaos test", () => {
    let r = new RingBuffer(1);
    r.push_back(1);
    r.push_back(2);
    r.push_back(3);
    r.push_back(4);
    r.push_back(5);
    r.push_back(6);
    r.push_back(7);
    expect(r.pop_front()).toEqual(1);
    expect(r.pop_back()).toEqual(7);
    expect(r.pop_front()).toEqual(2);
    expect(r.pop_back()).toEqual(6);
    expect(r.pop_front()).toEqual(3);
    expect(r.pop_back()).toEqual(5);
    expect(r.pop_front()).toEqual(4);
    expect(() => {r.pop_front()}).toThrow("Underflow!");
    r.push_front("I AM IMORTAL");
    r.push_front(1);
    expect(r.pop_front()).toEqual(1);
    r.push_front(2);
    expect(r.pop_back()).toEqual("I AM IMORTAL");
    r.push_front(3);
    expect(r.pop_back()).toEqual(2);
    r.push_front(4);
    expect(r.pop_back()).toEqual(3);
    r.push_front(5);
    expect(r.pop_back()).toEqual(4);
    r.push_front(6);
    expect(r.pop_back()).toEqual(5);
    r.push_front(7);
    expect(r.pop_back()).toEqual(6);
});
