let num =[9, 4, 9, 6, 6,7, 4]

let dup =[]
for(let i=0;i<num.length;i++){
    dup[i] = num[i]
    let count=0
    let isPrev = false
   
    for(let k=0;k<i;k++){
        if(num[i] == num[k]) isPrev = true
    }
    if(isPrev == false){
        for(let j=i+1;j<num.length;j++){
            if(num[i] == num[j]) {
                count++
                break
            }
        }
        if(count == 0) {
            console.log("res--->"+num[i])
            break
        }
    }
    
}
console.log("ends")