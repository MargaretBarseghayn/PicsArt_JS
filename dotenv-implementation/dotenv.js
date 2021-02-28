// read .env file
// process each line
// fill values into process.env

const fs = require('fs');

const fileData = fs.readFileSync('dotenv-implementation/.env', 'utf-8');
const lineArr = fileData.split('\n');

function config() {
    for (let line of lineArr) {
        if (line.length !== 0 && line[0] !== '#' && line.includes('=')) {
            let pair = line.split('=');
            let convertedValue;
            if (pair[1] === 'true' || pair[1] === 'false') {
                convertedValue = (pair[1] === 'true')
            } else if (!isNaN(+pair[1])) {
                convertedValue = +pair[1];
            } else {
                pair[1] = pair[1].trim();
                if ((pair[1][0] === '\'' && pair[1].endsWith('\'')) ||
                    (pair[1][0] === '\"' && pair[1].endsWith('\"'))) {
                    convertedValue = pair[1].slice(1, -1)
                } else {
                    convertedValue = pair[1]
                }
            }
            if (convertedValue && convertedValue.length) {
                process.env[pair[0]] = convertedValue;
            }
        }
    }
}

module.exports = {config}

