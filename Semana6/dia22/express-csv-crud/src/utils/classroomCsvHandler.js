const fs = require('fs');
const csv = require('csv-parser');
const { parse } = require('json2csv');

const csvFilePath = './src/data/classrooms.csv';

const readCSV = () => {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(csvFilePath)
            .pipe(csv())
            .on('data', (data) => {
                if (data.Students) {
                    try {
                        data.Students = JSON.parse(data.Students);
                    } catch {
                        data.Students = [];
                    }
                } else {
                    data.Students = [];
                }
                results.push(data);
            })
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
};

const writeCSV = (data) => {
    const dataToWrite = data.map(c => ({
        ...c,
        Students: JSON.stringify(c.Students)
    }));
    const csvData = parse(dataToWrite);
    fs.writeFileSync(csvFilePath, csvData);
};

module.exports = {
    readCSV,
    writeCSV
};