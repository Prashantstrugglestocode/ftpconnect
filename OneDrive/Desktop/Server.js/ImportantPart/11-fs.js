const { readFile, writeFile } = require('fs');

readFile('./content/text.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    const first = result;

    readFile('./content/text.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }

        const second = result;

        writeFile('./content/result-async.txt', `Here is the result: ${first}${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            
        });
        
    });
});
