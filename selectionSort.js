// Selection sort repeatedly selects the next smallesdst element and put it at the beginning of the arr 
//  Hence it is called selection sort 

const selectionSort = (arr)=>{
    const n = arr.length;
    for(let i=0; i<n-1; i++){
        let minIndex = i;
        for(let j =i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];
    }
    return arr;
}

const arr = [5,4,3,2,1,0];
console.log(selectionSort(arr));