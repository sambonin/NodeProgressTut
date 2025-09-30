const { readfile } = require('fs');
const { resourceLimits } = require('worker_threads');

console.log('starting the task');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task ');
})

console.log('starting next task');
