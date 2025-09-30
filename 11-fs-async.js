const {readFile, writeFile } = require('fs');
console.log('start')
readFile('./content/first.txt', "utf8", (err, result) => {
    if (err) {
        console.log('erro is there ')
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=> {
        if (err) {
        console.log('erro is there ')
        return
    }
    const second = result
    writeFile(
        './content/result-async.txtx',
        `heres is the second result ${first}, ${second}`
        ,(err, result)=> {
            if(err) {
                console.log('error was found 1')
            }
            console.log('done with this task');
        })
    })
});
console.log('starting next task')
