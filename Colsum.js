let matrix=[
    [3,7,5,1],
    [6,7,8,4],
    [5,5,3,8]]

let csum=[0,0,0,0]
for (let c=0;c<4;c++){
    for (let r=0;r<3;r++){
        csum[c]=csum[c]+matrix[r][c]// 0,0,1,0
    }
}
for(let i=0;i<4;i++){
console.log("col:"+(i+1)+" "+csum[i])
}