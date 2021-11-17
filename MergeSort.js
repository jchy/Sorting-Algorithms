const Merge = (arr, left, mid, right)=>{
    var n1 = mid-left+1;
    var n2 = right-mid;

    var LeftArr = new Array(n1);
    var RightArr = new Array(n2);

    for(let i=0; i<n1; i++)
        LeftArr[i] = arr[left+i];

    for(let i=0; i<n2; i++)
        RightArr[i] = arr[mid+1+i];
    
    var i=0;
    var j=0;
    var k=left;

    while(i<n1 && j<n2){
        if(LeftArr[i]<=RightArr[j]){
            arr[k] = LeftArr[i];
            i++;
        }
        else{
            arr[k]=RightArr[j];
            j++;
        }
        k++;
    }
    while(i<n1){
        arr[k]=LeftArr[i];
        i++;
        k++;
    }
    while(j<n2){
        arr[k]=RightArr[j];
        j++;
        k++;
    }
}

const MergeSort=(arr,left,right)=>{
    if(left>=right){
        return;
    }
    var mid = Math.floor((left+right)/2);
    MergeSort(arr,left,mid);
    MergeSort(arr,mid+1,right);
    Merge(arr,left,mid,right);
}

// Driver Code
var arr = [11,3,6,5,2,7,9];
var n = arr.length;
console.log("Array before sorting : ",arr);
MergeSort(arr,0,n-1);
console.log("Array after sorting : ",arr);


