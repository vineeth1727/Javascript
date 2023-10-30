/*function unoCareerInt(a,b)
{
    return (a|10)
}
let n =unoCareerInt(14.56,1)

console.log(n)*/


/*let table=9
let start=1
let end=10
while(start<=end){
    console.log(table+"*"+ start +"="+(table*start))
    start++
}
function design(data)

{
    if(data == '*')
        console.log("*****")
    else if(data == '$')
        console.log("$$$$$$$$$$$$$")
    else if(data == '.')
        console.log(".............")
    else if(data == '-')
        console.log("-------------")

}
design('*')
function isprime(num){
    count=0;
    for(i=1;i<=num;i++){
        if(num%i==0)
        count++;
    }
    if(count==2)
    return true
else return false
}
for(k=1,count=0;k<=100;k++){
    if(isprime(k)==true){
    console.log(k)
    count++
    if(count==7){
        break;
    }
    }
}*/
function myRoundOff(num,r){
    let p=1;
   for(let i=1;i<=r+1;i++){
       p = p*10;
   }

   // 1 * 10 * 10 * 10---- 1000
   
  let m = num * p
   p = p / 10
   p = p | 0
   m = m | 0// 12456
   let last = m % 10
   m = m / 10 // 12456 /10 -----1245.6
   m = m | 0
   if(last >5) m++ // 1246
   m = m / p // 12.46

   return m
}

console.log(myRoundOff(1.4567895,2))


