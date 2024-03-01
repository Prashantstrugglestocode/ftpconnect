const os = require('os');

//info about the user

// const user = os.userInfo()
//console.log(user)

//method returns the system uptime in seconds 

//console.log(`The system uptime is ${os.uptime()}`);


// const currentOS = {
//     name : os.type(),
//     release : os.release(),
//     totalme : os.totalmem()
// }
// console.log(currentOS)

const _ = require('lodash'); // it is a convention to name it _

const items = [1,[2,3],[3,32,10]];
const newItems = _.flattenDeep(items);
console.log(newItems);

//
