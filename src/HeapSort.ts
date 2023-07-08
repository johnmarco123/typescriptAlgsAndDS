export function parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
}

export function right(idx: number): number {
    return 2 * idx + 2;
}

export function left(idx: number): number {
    return 2 * idx + 1;
}

export function exchange(arr: number[],
                         idx: number,
                         largest: number): void {

    let temp = arr[idx];
    arr[idx] = arr[largest];
    arr[largest] = temp;
}

// This approach starts at an index and heapifies down if need be
export function max_heapify(arr: number[],
                            parent_idx: number,
                            heap_size: number = arr.length) {

    let left_idx = left(parent_idx);
    let right_idx = right(parent_idx);
    let idx_of_greatest = parent_idx

    if (left_idx <= heap_size &&
        arr[left_idx] > arr[idx_of_greatest]) {

        idx_of_greatest = left_idx;
    }

    if (right_idx <= heap_size &&
        arr[right_idx] > arr[idx_of_greatest]) {
        
        idx_of_greatest = right_idx;
    }

    if (idx_of_greatest != parent_idx) {
        exchange(arr, parent_idx, idx_of_greatest);
        max_heapify(arr, idx_of_greatest, heap_size);
    }

}

export function make_max_heap(arr: number[]) {
    let i = arr.length >> 1;

    for(; i >= 0; i--) {
        max_heapify(arr, i);
    }
}

export function heap_sort(arr: any) {
    // 1. Make max heap
    make_max_heap(arr);
    // 2. set max heap size to be equal to array
    let heap_size = arr.length - 1; 

    // 6. repeat steps 3 - 5 till nothing left
    for(let i = arr.length - 1; i >= 1; i--) {
        // 3. first element is now biggest, exchange with element n
        exchange(arr, 0, i);
        // 4. reduce length of max heap by 1
        heap_size -= 1; 
        // 5. max heapify
        max_heapify(arr, 0, heap_size);
    }
}


