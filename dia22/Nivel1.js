import express, { json } from 'express';
import { existsSync, createReadStream, writeFileSync } from 'fs';
import { join } from 'path';
import csv from 'csv-parser';
import { parse } from 'json2csv';

const app = express();
app.use(json());

const CSV_FILE = join(__dirname, 'persons.csv');
const FIELDS = ['Id', 'Name', 'Surname', 'IsTeacher', 'Birthdate'];

function readPersons() {
    return new Promise((resolve, reject) => {
        const results = [];
        if (!existsSync(CSV_FILE)) return resolve([]);
        createReadStream(CSV_FILE)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', reject);
    });
}

function writePersons(persons) {
    const csvData = parse(persons, { fields: FIELDS });
    writeFileSync(CSV_FILE, csvData, 'utf8');
}

app.get('/persons', async (req, res) => {
    const persons = await readPersons();
    res.json(persons);
});

app.get('/persons/:id', async (req, res) => {
    const persons = await readPersons();
    const person = persons.find(p => p.Id === req.params.id);
    if (!person) return res.status(404).json({ error: 'Person not found' });
    res.json(person);
});

app.post('/persons', async (req, res) => {
    const { Name, Surname, IsTeacher, Birthdate } = req.body;
    if (!Name || !Surname || !IsTeacher || !Birthdate) {
        return res.status(400).json({ error: 'Missing fields' });
    }
    const persons = await readPersons();
    let maxId = persons.reduce((max, p) => Math.max(max, parseInt(p.Id)), 0);
    const newPerson = {
        Id: String(maxId + 1),
        Name,
        Surname,
        IsTeacher: String(IsTeacher),
        Birthdate
    };
    persons.push(newPerson);
    writePersons(persons);
    res.status(201).json(newPerson);
});

app.put('/persons/:id', async (req, res) => {
    const { Name, Surname, IsTeacher, Birthdate } = req.body;
    const persons = await readPersons();
    const idx = persons.findIndex(p => p.Id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Person not found' });
    persons[idx] = {
        Id: persons[idx].Id,
        Name: Name ?? persons[idx].Name,
        Surname: Surname ?? persons[idx].Surname,
        IsTeacher: IsTeacher ?? persons[idx].IsTeacher,
        Birthdate: Birthdate ?? persons[idx].Birthdate
    };
    writePersons(persons);
    res.json(persons[idx]);
});

app.delete('/persons/:id', async (req, res) => {
    const persons = await readPersons();
    const idx = persons.findIndex(p => p.Id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Person not found' });
    const deleted = persons.splice(idx, 1)[0];
    writePersons(persons);
    res.json(deleted);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`CRUD API running on http://localhost:${PORT}`);
});