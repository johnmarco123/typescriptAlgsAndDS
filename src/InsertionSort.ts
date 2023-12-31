// O(n^2)
export function insertion_sort(arr: any) {
    for(let i = 0; i < arr.length; ++i) {
        for(let j = i; j >= 0; --j) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            } else {
                break;
            }
        }
    }
}
