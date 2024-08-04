import crypto from "crypto"


while(true){
    let input =  1
    
    const hash = crypto.createHash('sha256').update(input.toString()).digest('hex');
    console.log(input)
    
    if(hash.startsWith("0000")){
        console.log(input)
        break
    }

    input = input + 1
}
