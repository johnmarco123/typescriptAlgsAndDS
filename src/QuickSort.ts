function partition(arr: number[], lo: number, hi: number): number {
    let pivot = arr[hi];
    let idx = lo - 1;
    for(let i = lo; i < hi; i++){
        if (arr[i] <= pivot) {
            idx++;
            let temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    return idx;
}

function qs(arr: number[], lo: number, hi: number) {
    if (lo >= hi) {
        return;
    }

    const pivot_idx = partition(arr, lo, hi);
    qs(arr, lo, pivot_idx - 1);
    qs(arr, pivot_idx + 1, hi);
}

export function quick_sort(arr: number[]) {
    qs(arr, 0, arr.length - 1);
}
