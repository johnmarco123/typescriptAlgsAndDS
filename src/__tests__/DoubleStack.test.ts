import {DoubleStack} from "../DoubleStack";

test("Is empty when created", () => {
    const s = new DoubleStack(10)
    expect(s.is_empty()).toEqual(true);
})

test("empty, push, not empty", () => {
    const s = new DoubleStack(10)
    expect(s.is_empty()).toEqual(true);
    s.push(5);
    expect(s.is_empty()).toEqual(false);
})

test("pop on empty throws underflow error", () => {
    const s = new DoubleStack(10)
    expect(() => {s.pop()}).toThrow("Underflow!");
})

test("push pop pop should throw underflow error", () => {
    const s = new DoubleStack(10)
    s.push(5);
    s.pop();
    expect(() => {s.pop()}).toThrow("Underflow!");
})

test("5 pushes check if array is correct", () => {
    const s = new DoubleStack(7);
    s.push(1);
    s.push(2);
    s.push(3);
    s.push(4);
    s.push(5);
    expect(s.arr).toEqual([1, 3, 5, null, null, 4, 2]);
})

test("3 push 3 pop correct values", () => {
    const s = new DoubleStack(10)
    s.push(1);
    s.push(2);
    s.push(3);
    expect(s.pop()).toEqual(3);
    expect(s.pop()).toEqual(2);
    expect(s.pop()).toEqual(1);
    expect(s.is_empty()).toEqual(true);
})

test("push till full, push again and throw error", () => {
    const s = new DoubleStack(5)
    s.push(1);
    s.push(2);
    s.push(3);
    s.push(4);
    s.push(5);
    expect(() => {s.push(6)}).toThrow("Overflow!");
})

test("cannot push null into stack", () => {
    const s = new DoubleStack(5)
    expect(() => {s.push(null)}).toThrow("Cannot push null!");
})


test("Full integration test", () => {
    const s = new DoubleStack(9)
    s.push('hi');
    s.push(2);
    s.push(3);
    s.push(4);
    s.push(5);
    s.push(6);
    expect(s.pop()).toEqual(6);
    s.push(11);
    expect(s.pop()).toEqual(11);
    expect(s.pop()).toEqual(5);
    expect(s.pop()).toEqual(4);
    s.push('nine');
    expect(s.pop()).toEqual('nine');
    expect(s.pop()).toEqual(3);
    expect(s.pop()).toEqual(2);
    expect(s.pop()).toEqual('hi');
    expect(() => {s.pop()}).toThrow("Underflow!");
})
