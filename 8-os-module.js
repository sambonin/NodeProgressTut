const { log } = require('console')
const os = require('os')

// info on current user 
const user = os.userInfo()
console.log(user)

//method returns the system uptime in secons 
console.log(`The system uptime is: ${os.uptime} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);