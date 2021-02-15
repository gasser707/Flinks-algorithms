const longestUnique =(str) =>{
    if(str.length===0) return;
    let temp = [];
    let longest = [];
    let record ={};

    let i=0;
    let j=0;

    while(j<str.length){
        if(record[str[i+j]]){
            if (temp.length>longest.length){
                longest = [...temp];
            }
            record= {};
            temp= [];
            i++;
            j=i;
        }
        else{
            record[str[i+j]] =1;
            temp.push(str[i+j]);
            j++
        }
    }

    if(temp.length > longest.length) longest =[...temp]
    return longest.join('');
}

// console.log(longestUnique("pwwkew"))
//done



const binarySearch = (arr,target) =>{
    let start =0;

    let end = arr.length;

    while(start<=end){
        let mid = Math.floor((start+end)/2);

        if(arr[mid]==target) return mid
        else if(arr[mid]<target){
            start=mid+1;
        }
        else {
            end = mid-1
        }
    }

    return -1
}
// console.log(binarySearch([1,2,3,4,5],4))

const findPivot = (arr) =>{

    let start =0;

    let end = arr.length;

    //pivot will be the element that the number next to it is smaller than it 
    while(start<=end){
        let mid = Math.floor((start+end)/2);

        // console.log(arr[mid])
        if(arr[mid+1]<arr[mid]) return mid
        else{
            start=mid+1;
        }
    
    }

    return -1


}
//should be 7
// console.log(findPivot([4,5,6,7,0,1,2]))
//good we now found pivot with binary search

const searchRotated = (arr, target) =>{
    //O logn means binary search
    // since after rotating elements are no longer in ascending order we will have to perform Binary search twice
    // we have to find the index at which element was rotated then search in two sub arrays

    let pivotIdx = findPivot(arr);

    let a1 = arr.slice(0,pivotIdx+1);

    let a2 = arr.slice(pivotIdx+1)

    let result1 = binarySearch(a1, target)

    let result2 = binarySearch(a2, target)

    if(result1 != -1) return result1

    //have to add pivot index +1 to make account for the offset resulted from splitting

    //we used binary search three times 1- to find pivot index, then twice to search in the two arrays
    if (result2 != -1) return result2 + pivotIdx+1

    return -1
}

console.log(searchRotated([3,4,5,6,7,0,1,2],2))

//done