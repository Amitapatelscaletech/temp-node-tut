
// async with non blocking,here we use callback functions

const {readFile,writeFile}=require('fs');
console.log('first');

//why we use callbackfunctions,if one functions result we need to use in another function that is why

readFile('./content/first.txt','utf8',(err,result)=>{

    if(err){
        console.log(err)
        return
    }
    const first=result;
    writeFile('./content/result-aysnc.txt',`here is result : ${first}`,(err,result) => {
        if(err){
            console.log(err)
            return
        }

        console.log('second');
    })
})

console.log('third');

//OutPuts
/*
first
third
second
*/
// if there is n number of operation then it will not block next execution this is the difference between sync & async