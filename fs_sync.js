// FS Builtin file module sync with blocking,async with nonblocking


const { readFileSync,writeFileSync } = require('fs'); 

const firstRead = readFileSync('./content/first.txt','utf8');
const secondRead = readFileSync('./content/second.txt','utf8'); 
console.log('first');
//console.log(firstRead,secondRead);
console.log('second');

writeFileSync('./content/result-sync.txt',`This is just ${firstRead},${secondRead}`,{flag:'a'}); // It will create file if not exist ,and write content and third opetion for append else it overwrrite
console.log('third');


//OutPuts
/*
first
second
third*/
// if there is n number of operation then it will block next execution