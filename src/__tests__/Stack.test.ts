import { Stack } from "../Stack";

test("Empty stack", () => {
    const s = new Stack(10);
    expect(s.is_empty()).toEqual(true);

});

test("Peeking and pushing", () => {
    const s = new Stack(10);
    s.push(5)
    expect(s.peek()).toEqual(5);
    s.push(6)
    expect(s.peek()).toEqual(6);
    s.pop();
    s.pop();
    expect(s.peek()).toEqual(null);
})

test("Pop an item", () => {
    const s = new Stack(10);
    s.push(5)
    expect(s.pop()).toEqual(5);
    s.push(6)
    expect(s.pop()).toEqual(6);
    s.push(7)
    s.push(8)
    expect(s.pop()).toEqual(8);
    expect(s.pop()).toEqual(7);
})

test("Overflow check", () => {
    const s = new Stack(3);
    s.push(1)
    s.push(2)
    s.push(3)
    expect(() => {s.push("PLZFAIL")}).toThrow("Overflow!");
})

test("Underflow check", () => {
    const s = new Stack(3);
    s.push(2)
    s.pop();
    expect(() => {s.pop()}).toThrow("Underflow");
})

test("Integration test", () => {
    const s = new Stack(10);
    expect(s.is_empty()).toEqual(true);
    s.push(22);
    s.push('foo');
    expect(s.pop()).toEqual('foo');
    expect(s.pop()).toEqual(22);
    expect(s.is_empty()).toEqual(true);
    s.push('foooooooo');
    expect(s.is_empty()).toEqual(false);
    s.push("baaaar")
    expect(s.peek()).toEqual("baaaar");
    expect(s.pop()).toEqual('baaaar');
    expect(s.pop()).toEqual('foooooooo');
    expect(s.is_empty()).toEqual(true);
})

