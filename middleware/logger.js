const date = new Date
console.log(date)


const currentHour = date.getHours()
console.log(currentHour)

const currentDay = date.getDay()
console.log(currentDay)

const logger =(req, res, next) =>{
    if (currentHour>8 && currentHour<17 && currentDay>=1 && currentDay<6){
        next()
    }
     else{
            res.send("<h1> sorry we are closed !</h1>")
        }
    
}

module.exports = logger 