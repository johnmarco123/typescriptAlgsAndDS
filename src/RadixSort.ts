//    V<- index 0
// 1234
function getIdx(num: number, idx: number): number {
    let divider = 10 ** idx;
    // If the idx is greater than the number, we simply return 0 so it moves
    // to the front of our sort slowly
    let numAtIdx = Math.floor(num / divider) % 10;
    return numAtIdx;
}

function counting_sort(arr: number[], idx: number): number[] {
    let tempArr: number[] = [];
    
    // Initialize temp array with all zeros
    for (let i = 0; i < 10; i++) {
        tempArr.push(0);
    }

    // Increment the temp array for every time it sees that num at the given
    // idx for example, 502 <- would add one to idx 2 of tempArr
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let digit = getIdx(num, idx);
        tempArr[digit]++;
    }

    // Now we increment each value by the one before it
    for (let i = 1; i < 10; i++) {
        tempArr[i] += tempArr[i - 1];
    }

    //Next we shift all the values to the right by one (first val should be 0)
    for (let i = 9; i >= 0; i--) {
        if (i === 0) {
            tempArr[i] = 0;
        } else {
            tempArr[i] = tempArr[i - 1];
        }
    }

    let sortedArr: number[] = [];
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let digit = getIdx(num, idx);
        let indexToPut = tempArr[digit];
        tempArr[digit]++
        sortedArr[indexToPut] = num;
    }

    return sortedArr;
}

export function radix_sort(arr: number[], highest_num: number): number[] {
    let idx = 0;
    let divider = 10 ** idx;
    while (divider <= highest_num) {
        arr = counting_sort(arr, idx);
        idx++;
        divider = 10 ** idx;
    }
    return arr;
}

