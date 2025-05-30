import express from "express";
import { createReadStream, writeFile } from "fs";
import csv from "csv-parser";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = 3000;
const CSV_FILE = "classrooms.csv";

app.use(express.json());

const readCSV = (callback) => {
    const results = [];
    createReadStream(CSV_FILE)
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", () => callback(results));
};

const writeCSV = (data, callback) => {
    const headers = "Id,Name,Teacher_id,Students\n";
    const rows = data.map(classroom => 
        `${classroom.Id},${classroom.Name},${classroom.Teacher_id},"${classroom.Students}"`
    ).join("\n");
    writeFile(CSV_FILE, headers + rows, callback);
};

app.post("/classrooms", (req, res) => {
    readCSV((classrooms) => {
        const newClassroom = {
            Id: uuidv4(),
            Name: req.body.Name,
            Teacher_id: req.body.Teacher_id,
            Students: req.body.Students.join(","),
        };
        classrooms.push(newClassroom);
        writeCSV(classrooms, () => res.status(201).json(newClassroom));
    });
});

app.get("/classrooms", (_req, res) => {
    readCSV((classrooms) => res.json(classrooms));
});

app.get("/classrooms/:id", (req, res) => {
    readCSV((classrooms) => {
        const classroom = classrooms.find(c => c.Id === req.params.id);
        classroom ? res.json(classroom) : res.status(404).send("Classroom not found");
    });
});

app.put("/classrooms/:id", (req, res) => {
    readCSV((classrooms) => {
        const index = classrooms.findIndex(c => c.Id === req.params.id);
        if (index !== -1) {
            classrooms[index] = {
                Id: req.params.id,
                Name: req.body.Name,
                Teacher_id: req.body.Teacher_id,
                Students: req.body.Students.join(","),
            };
            writeCSV(classrooms, () => res.json(classrooms[index]));
        } else {
            res.status(404).send("Classroom not found");
        }
    });
});

app.delete("/classrooms/:id", (req, res) => {
    readCSV((classrooms) => {
        const filteredClassrooms = classrooms.filter(c => c.Id !== req.params.id);
        if (filteredClassrooms.length < classrooms.length) {
            writeCSV(filteredClassrooms, () => res.status(204).send());
        } else {
            res.status(404).send("Classroom not found");
        }
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));