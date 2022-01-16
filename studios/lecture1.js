// Declare and Initialize Variables
const date = "Monday 2019-03-18"
const time = "10:05:34 AM"
const astronautCount = 7
const astronautStatus = "ready"
const averageAstronautMassKg = 80.7
const crewMassKg = astronautCount * averageAstronautMassKg
const fuelMassKg = 760000
const shuttleMassKg = 74842.31
const totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
const fuelTempCelsius = -225
const fuelLevel = 1
const weatherStatus = "clear"

// Write code to generate the LC04 report here:
let line = "----------------------------"

console.log(line)
console.log("> LC04 LAUNCH CHECKLIST")
console.log(line)
console.log("Date: " + date)
console.log(`Time: ${time}`)
console.log()
console.log(line)
console.log("> ASTRONAUT INFO")
console.log(line)
console.log("* count: " + astronautStatus)
console.log()
console.log(line)
console.log("* Fuel temp celsius: " + fuelTempCelsius + " C")
console.log("* Fuel level: " + (fuelLevel * 100) + "%")
console.log()
console.log(line)
console.log("> MASS DATA")
console.log(line)
console.log("* Crew mass: " + crewMassKg)
console.log("* Fuel mass: " + fuelMassKg)
console.log("* Shuttle mass: " + shuttleMassKg)
console.log("* Total mass: " + totalMassKg)
console.log()
console.log(line)
console.log("> FLIGHT PLAN")
console.log(line)
console.log("* weather: " + weatherStatus)
console.log()
console.log(line)
console.log("> OVERALL STATUS")
console.log(line)
console.log("* Clear for takeoff: YES")

