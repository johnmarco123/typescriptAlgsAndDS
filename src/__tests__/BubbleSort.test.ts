import { bubble_sort } from "../BubbleSort";

test("100 random numbers", () => {
    let arr1:number[] = [];
    let arr2:number[] = [];
    let i = -1;
    while (++i < 100) {
        let n = Math.floor(Math.random() * 100);
        arr1[i] = arr2[i] = n;
    }
    bubble_sort(arr1)
    expect(arr1).toEqual(arr2.sort((a,b)=>a-b));
});
