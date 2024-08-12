//Encoding

function toBytes(string){
    arr=[]
    for (let i = 0 ; i < string.length ; i++){
        arr.push(string.charCodeAt(i))
    }
    return arr;
}
console.log(toBytes("Anurag"));

// [65,110,117,114,97,103]p[3]