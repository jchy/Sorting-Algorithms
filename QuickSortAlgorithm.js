// Quick sort Implementation in JavScript

// Logic : 
// Choose a Pivot value 
// All the elements which are less than pivotValue, Put them left to the Pivote Element
// All the elements which are greater than pivotValue put them to the right of the Pivote Element

const partition = (arr, start, end) => {
    const pivotValue = arr[end];
    let pivotIndex = start;

    for(let i=start; i<end; i++) {
        if(arr[i] < pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex],arr[i]];
            pivotIndex++;
        }
    }
    [arr[pivotIndex], arr[end]] = [arr[end],arr[pivotIndex]];
    return pivotIndex;
}


// QuickSort Function
const QuickSort = (arr, start, end) =>{
    // Base condition for recursion
    if(start>=end)
        return;
    let index = partition(arr, start, end);
    QuickSort(arr, start,index-1);
    QuickSort(arr, index+1,end);
}

// Driver Code
const arr = [97,65,23,21,45,89,55,34,67];
var n = arr.length;
console.log("Array before sorting : ",arr);
// Calling quicksort function
QuickSort(arr,0,n-1);
console.log("Array after sorting : ",arr);
