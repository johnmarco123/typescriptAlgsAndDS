import { insertion_sort } from "./InsertionSort";
import { bubble_sort } from "./BubbleSort";
import { heap_sort } from "./HeapSort";
import { quick_sort } from "./QuickSort";
import { counting_sort } from "./CountingSort";
import { radix_sort } from "./RadixSort";
import { bucket_sort } from "./BucketSort";

function test(sort: (...args: any) => void, arr: any, highest: any = undefined, lowest: any = undefined) {
    let start = performance.now();
    let timeout = false;
    try {
        
        if (highest !== undefined && lowest !== undefined) {
            sort(arr, highest, lowest);
        } else if (highest !== undefined ) {
            sort(arr, highest);
        } else {
            sort(arr);
        }

    } catch (e) {
        timeout = true;
    }

    let time: any = performance.now() - start;
    let name = sort.name;
    if (timeout) { time = "STACK OVERFLOW" }
    return {name: name, time: time}
}


function determine_winner(results: any[], arrSize: number, numSize: number): void {
    let fastestTime = Infinity;
    let winnerName = null
    let slowestTime = -Infinity;
    let loserName = null
    for(let i = 0; i < results.length; i++) {
        let time = results[i].time;

        if (typeof time === "string") {
            break;
        }

        let name = results[i].name;
        if (time < fastestTime) {
            fastestTime = time;
            winnerName = name;
        }

        if (time > slowestTime) {
            slowestTime = time;
            loserName = name;
        }
    }

    console.log("\n==================================================\n");
    console.log(`arrSize: ${arrSize} numSize: ${numSize}`);
    for(let i = 0; i < results.length; i++) {
        let time = results[i].time;
        let name = results[i].name;
        let outStr = `${time} ${name}`

        if (name === winnerName) {
            outStr += " <-------- FASTEST"
        } else if (name === loserName) {
            outStr += " <-------- SLOWEST"
        }

        console.log(outStr);
    }
}

let batch: number[] = [10, 100, 1_000, 10_000, 100_000];

batch.forEach(numSize => {
    batch.forEach(arraySize => {
        let nums:number[] = [];
        for (let i = 0; i < arraySize; i++) {
            let num = Math.floor(Math.random() * numSize);
            nums.push(num);
        }
        determine_winner(
            [
                test(insertion_sort, nums.slice()),
                test(bubble_sort, nums.slice()),
                test(heap_sort, nums.slice()),
                test(quick_sort, nums.slice()),
                test(counting_sort, nums.slice(), numSize),
                test(radix_sort, nums.slice(), numSize),
                test(bucket_sort, nums.slice(), numSize, 0),
            ],
            arraySize, numSize)
    })
})
