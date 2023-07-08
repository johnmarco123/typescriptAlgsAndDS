// determining the amount of buckets is difficult, one way is to get the range
// and find the sqrt and ceil it
// for example, a array with a range of 100 would result in...
// sqrt(100) = ceil(10) buckets = 10

//In this function we assume the lowest number will be zero

// Here we use quick sort for our sorting algorithm
import { quick_sort } from "./QuickSort";
function sort(buckets: any[]) {
    for(let b = 0; b < buckets.length; b++) {
        let bucket = buckets[b];
        quick_sort(bucket);
    }
    return buckets;
}

export function bucket_sort(arr: number[], highest_num : number, lowest_num: number) {
    const range = highest_num - lowest_num;
    const bucket_amt = Math.ceil(Math.sqrt(range));
    const bucket_size = bucket_amt;
    let buckets: any[] = [];
    
    // Initialize sqrt arr.length amount of buckets
    for(let i = 0; i < bucket_amt; i++) {
        buckets.push([]);
    }

    //Put each number into its corresponding bucket
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let bucketIdx = Math.floor((num - lowest_num) / bucket_size);
        buckets[bucketIdx].push(num);
    }

    // Sort the buckets
    let sorted_buckets: number[][] = sort(buckets);

    let outputArray: number[] = [];
    for (let i = 0; i < sorted_buckets.length; i++) {
        for(let j = 0; j < sorted_buckets[i].length; j++) {
            outputArray.push(sorted_buckets[i][j]);
        }
    }

    return outputArray;
}
