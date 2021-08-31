// let swapped;
// function bubbleSort(arr){
//     swapped = false;
//     let final = arr.length-1;
//     for(let i = 0, j=1; i < final; i++, j++){
//         if(arr[i] > arr[j]) {
//             swapped = true;
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//     }
//     final--;

// }


// console.log(bubbleSort([23,12,18,22,21,1,13, 25]));

function bubbleSort(arr){
    let swapped;
    do{
        swapped=false;
        for(let i = 0; i < arr.length; i++){
            if(arr[i+1] && arr[i] > arr[i+1]){
                [arr[i], arr[i+1]]= [arr[i+1], arr[i]]
                swapped = true;
            }
        }
    } while(swapped)
    return arr;
}

console.log(bubbleSort([23, 12, 18, 22, 21, 1, 13, 25 ]));