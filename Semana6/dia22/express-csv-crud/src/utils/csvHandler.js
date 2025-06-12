const fs = require('fs');
const csv = require('csv-parser');
const { parse } = require('json2csv');

const csvFilePath = './src/data/persons.csv';

const readCSV = () => {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(csvFilePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
};

const writeCSV = (data) => {
    const csvData = parse(data);
    fs.writeFileSync(csvFilePath, csvData);
};

const findPersonById = async (id) => {
    const persons = await readCSV();
    return persons.find(person => person.Id === id);
};

module.exports = {
    readCSV,
    writeCSV,
    findPersonById
};