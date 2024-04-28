function discriptionOfCars(){
    let cars:any = {

    company : "toyota",
    model :"Camry",
    Color :"white",
    Year :2022,
    BattaryCapacity :"1.6 kWh to 2 kWh"

    }

    for(let car in cars){
        console.log (`${car} : ${cars[car]}`)
    }
}

discriptionOfCars()