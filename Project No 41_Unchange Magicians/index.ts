import { log } from "console"

let magicians:string[]=['Denney','Hannes','Sam','Arain']

// copy orignal array

function orignalArr(ogAr:string[]){

     return ogAr.slice()
}

let copyOrignalMagicians =  orignalArr(magicians)

// custom array 
let phrases:string ="Welcome To The Great Magician"

function makeThemMGreat(ogAr:string[]){
     
    for(let i = 0 ; i < ogAr.length; i++){
         
        copyOrignalMagicians[i] =`${phrases} ${copyOrignalMagicians[i]}`
        
    }
    console.log(copyOrignalMagicians)
}

console.log('custom message');

makeThemMGreat(magicians)

console.log('orignal message'); 

console.log(orignalArr(magicians));




