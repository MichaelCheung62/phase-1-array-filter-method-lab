/*
 1.define function 
 2.determine how many parameters
 3.find,map,filter& reduce - methods for manipulating arrays
*/

const findMatching = (drivers,name) => {
     return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())

}



const fuzzyMatch = (drivers,name) => {
    return drivers.filter(driver => driver[0] === name[0])

}
const matchName = (drivers,name) => {
    return drivers.filter(driver => driver.name === name)
}