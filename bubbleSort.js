// Bubble sort is a sorting algorithm in which at each iteration the 
// heavier element is put at the end ot the array and each of this 
// iteration is called pass 

const bubbleSort = (arr) =>{
    const n = arr.length;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1],arr[j]];
        }
    }
  }
 return arr;
}

const arr = [5,4,3,2,1];
console.log(bubbleSort(arr));
