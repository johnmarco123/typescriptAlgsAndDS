import { Hashmap } from "../Hashmap"

test("adding items", () => {
    let map = new Hashmap(10);
    map.set("one", 1);
    expect(map.get("one")).toEqual(1);
    map.set("one", 2);
    expect(map.get("one")).toEqual(2);
    map.set("two", 2);
    expect(map.get("two")).toEqual(2);
})

test("add 5, delete 5 check values map size 3", () => {
    let map = new Hashmap(3);
    map.set("val0", 0);
    map.set("val1", 1);
    map.set("val2", 2);
    map.set("val3", 3);
    map.set("val4", 4);
    expect(map.delete("val0")).toEqual(0);
    expect(map.delete("val1")).toEqual(1);
    expect(map.delete("val2")).toEqual(2);
    expect(map.delete("val3")).toEqual(3);
    expect(map.delete("val4")).toEqual(4);
})

test("add 5, change 3 delete 6 check, add 1 check", () => {
    let map = new Hashmap(3);
    map.set("val0", 0);
    map.set("val1", 1);
    map.set("val2", 2);
    map.set("val3", 3);
    map.set("val4", 4);
    map.set("val1", map.get("val1") + 1);
    map.set("val2", map.get("val2") + 1);
    map.set("val3", map.get("val3") + 1);
    expect(map.delete("val1")).toEqual(2);
    expect(map.delete("val2")).toEqual(3);
    expect(map.delete("val3")).toEqual(4);
    expect(map.delete("val4")).toEqual(4);
    expect(map.delete("val0")).toEqual(0);
    expect(map.delete("val123")).toBe(undefined);
    map.set("val500", 5000);
    expect(map.get("val500")).toBe(5000);
})
