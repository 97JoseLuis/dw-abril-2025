const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;
const CSV_FILE = path.join(__dirname, 'classrooms.csv');

app.use(express.json());

function readClassrooms() {
    return new Promise((resolve, reject) => {
        const results = [];
        if (!fs.existsSync(CSV_FILE)) return resolve([]);
        fs.createReadStream(CSV_FILE)
            .pipe(csv())
            .on('data', (data) => {
                data.Students = data.Students ? JSON.parse(data.Students) : [];
                resolve.push(data);
            })
            .on('end', () => resolve(results))
            .on('error', reject);
    });
}

function writeClassrooms(classrooms) {
    return new Promise((resolve, reject) => {
        const header = 'Id,Name,Teacher_id,Students\n';
        const rows = classrooms.map(c =>
            `${c.Id},${c.Name},${c.Teacher_id},"${JSON.stringify(c.Students)}"`
        );
        fs.writeFile(CSV_FILE, header + rows.join('\n'), err => {
            if (err) reject(err);
            else resolve();
        });
    });
}

app.post('/classrooms', async (req, res) => {
    const { Name, Teacher_id, Students } = req.body;
    if (!Name || !Teacher_id || !Array.isArray(Students)) {
        return res.status(400).json({ error: 'Invalid data' });
    }
    const classrooms = await readClassrooms();
    const newClassroom = {
        Id: uuidv4(),
        Name,
        Teacher_id,
        Students
    };
    classrooms.push(newClassroom);
    await writeClassrooms(classrooms);
    res.status(201).json(newClassroom);
});

app.get('/classrooms', async (_req, res) => {
    const classrooms = await readClassrooms();
    res.json(classrooms);
});

app.get('/classrooms/:id', async (req, res) => {
    const classrooms = await readClassrooms();
    const classroom = classrooms.find(c => c.Id === req.params.id);
    if (!classroom) return res.status(404).json({ error: 'Not found' });
    res.json(classroom);
});


app.put('/classrooms/:id', async (req, res) => {
    const { Name, Teacher_id, Students } = req.body;
    const classrooms = await readClassrooms();
    const idx = classrooms.findIndex(c => c.Id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    if (Name) classrooms[idx].Name = Name;
    if (Teacher_id) classrooms[idx].Teacher_id = Teacher_id;
    if (Students) classrooms[idx].Students = Students;
    await writeClassrooms(classrooms);
    res.json(classrooms[idx]);
});

app.delete('/classrooms/:id', async (req, res) => {
    const classrooms = await readClassrooms();
    const idx = classrooms.findIndex(c => c.Id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    const deleted = classrooms.splice(idx, 1)[0];
    await writeClassrooms(classrooms);
    res.json(deleted);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});