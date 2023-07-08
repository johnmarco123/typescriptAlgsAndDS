import { counting_sort } from "../CountingSort";

test("100 random numbers of range 0 - 100", () => {
    let arr1:number[] = [];
    let arr2:number[] = [];
    let i = -1;
    while (++i < 100) {
        let n = Math.floor(Math.random() * 100);
            arr1[i] = arr2[i] = n;
    }

    let result = counting_sort(arr1, 100);
    expect(result).toEqual(arr2.sort((a,b)=>a-b));
});

test("1000 random numbers in range 0 - 1000", () => {
    let arr1:number[] = [];
    let arr2:number[] = [];
    let i = -1;
    while (++i < 1000) {
        let n = Math.floor(Math.random() * 1000);
            arr1[i] = arr2[i] = n;
    }

    let result = counting_sort(arr1, 1000);
    expect(result).toEqual(arr2.sort((a,b)=>a-b));
});
