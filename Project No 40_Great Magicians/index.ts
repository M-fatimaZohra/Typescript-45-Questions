import { log } from "console"

let magicians:string[]=['Denney','Hannes','Sam','Arain']

function summonMagicians(){

    return magicians
      
}
magicians = summonMagicians()

console.log(summonMagicians());

let phrases:string ="Welcome To The Great Magician"

function makeThemMGreat(){
     
    for(let i = 0 ; i < magicians.length; i++){
         
        magicians[i] =`${phrases} ${magicians[i]}`
        
    }
}

makeThemMGreat()

console.log(magicians)



