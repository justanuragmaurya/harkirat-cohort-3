//Encoding

function toBytes(string){
    arr=[]
    for (let i = 0 ; i < string.length ; i++){
        arr.push(string.charCodeAt(i))
    }
    return arr;
}
console.log(toBytes("Anurag"));