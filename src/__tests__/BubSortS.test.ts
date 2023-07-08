import { bubble_sort_stack } from "../BubSortS";
import { Stack } from "../Stack";

test("5, 1, 2, 1, 1, 9, 3, 3, 54, 2, 3", () => {
    let cap = 50;
    let a = new Stack(cap);
    let b = new Stack(cap);
    a.push(5);
    a.push(1);
    a.push(2);
    a.push(1);
    a.push(1);
    a.push(9);
    a.push(3);
    a.push(3);
    a.push(54);
    a.push(2);
    a.push(3);
    bubble_sort_stack(a, b);
    expect(a.pop()).toEqual(1);
    expect(a.pop()).toEqual(1);
    expect(a.pop()).toEqual(1);
    expect(a.pop()).toEqual(2);
    expect(a.pop()).toEqual(2);
    expect(a.pop()).toEqual(3);
    expect(a.pop()).toEqual(3);
    expect(a.pop()).toEqual(3);
    expect(a.pop()).toEqual(5);
    expect(a.pop()).toEqual(9);
    expect(a.pop()).toEqual(54);
});

test("5, 9, 1, 12, 2", () => {
    let cap = 50;
    let a = new Stack(cap);
    let b = new Stack(cap);
    a.push(5)
    a.push(9)
    a.push(1)
    a.push(12)
    a.push(2)
    bubble_sort_stack(a, b);
    expect(a.pop()).toEqual(1);
    expect(a.pop()).toEqual(2);
    expect(a.pop()).toEqual(5);
    expect(a.pop()).toEqual(9);
    expect(a.pop()).toEqual(12);
});
