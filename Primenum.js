function isprime(num){
    let count=0;
    for(i=1;i<=num;i++){
        if(num%i==0)
        count++;
    }
    if(count==2)
    return true
else 
return false
}
for(k=1,count=0;k<=100;k++){
    if(isprime(k)==true){
    console.log(k)
    count++;
    if(count==7){
        break
    }
    }
}