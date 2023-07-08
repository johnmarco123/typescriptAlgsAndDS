function counting_sort(arr, highest_num){
    let countArr= [];
    for(let i = 0; i <= highest_num; i++) {
        countArr.push(0);
    }
        console.log(`step 1: ${countArr}`);
    for(let i = 0; i < arr.length; i++) {
        let value = arr[i];
        countArr[value]++;
    }

        console.log(`step 2: ${countArr}`);
    for(let i = 1; i <= highest_num; i++) {
        countArr[i] += countArr[i - 1];
    }

        console.log(`step 3: ${countArr}`);
    for(let i = highest_num; i >= 0; i--) {
        let newVal = countArr[i - 1];
        if (i === 0) {
            newVal = 0;
        }
        countArr[i] = newVal;
    }

        console.log(`step 4: ${countArr}`);
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        let oldArrVal = arr[i];
        let idx = countArr[oldArrVal];
        countArr[oldArrVal]++;
        newArr[idx] = oldArrVal;
    }

        console.log(`step 5: ${countArr}`);
        console.log(`step 6: ${newArr}`);
    return newArr;
}
counting_sort([8, 1, 2, 2, 3], 8)














