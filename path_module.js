// PAth is built in module ,returns path related specific seprator
const path=require('path');

console.log(path.sep);


const filepath=path.join('/content','subcontent','test.txt');
console.log(filepath); //joins /content/subcontent/test.txt


const basenams=path.basename(filepath);
console.log(basenams); // return test.txt


const absoulate=path.resolve(__dirname,'content','subcontent'); 
console.log(absoulate); // reutrn /home/amanshah/Development/nodejs.local/jan18/content/subcontent , DONT PASS folder name with /,otherwise it will override