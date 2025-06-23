const fs = require('fs');
const csv = require('csv-parser');
const { MongoClient } = require('mongodb');

const MONGO_URI = 'mongodb://localhost:27017';
const DB_NAME = 'escuela';

async function readCSV(filePath, parseStudents = false) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => {
                if (parseStudents && data.Students) {
                    try {
                        data.Students = JSON.parse(data.Students);
                    } catch {
                        data.Students = [];
                    }
                }
                results.push(data);
            })
            .on('end', () => resolve(results))
            .on('error', (err) => reject(err));
    });
}

async function migrate() {
    const client = new MongoClient(MONGO_URI);
    try {
        await client.connect();
        const db = client.db(DB_NAME);

        const persons = await readCSV('./src/data/persons.csv');
        if (persons.length > 0) {
            await db.collection('persons').deleteMany({});
            await db.collection('persons').insertMany(persons);
            console.log(`Migrados ${persons.length} persons`);
        }

        const classrooms = await readCSV('./src/data/classrooms.csv', true);
        if (classrooms.length > 0) {
            await db.collection('classrooms').deleteMany({});
            await db.collection('classrooms').insertMany(classrooms);
            console.log(`Migrados ${classrooms.length} classrooms`);
        }

        console.log('Migración completada.');
    } catch (err) {
        console.error('Error en la migración:', err);
    } finally {
        await client.close();
    }
}

migrate();