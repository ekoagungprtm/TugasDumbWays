function getOddOccurrence( ar, ar_size)
{
    let res = 0;
     
    for (let i = 0; i < ar_size; i++)    
        res = res ^ ar[i];
     
    return res;
}
 
    // driver code
 
    let arr = [ 1, 1, 2, 2, 2, 3, 3,
                4, 4, 5, 5, 6, 6 ];
    let n = arr.length;
 
    // Function calling
    console.log(getOddOccurrence(arr, n));
