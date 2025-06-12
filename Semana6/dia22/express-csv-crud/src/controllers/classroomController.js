const classroomCsvHandler = require('../utils/classroomCsvHandler');
const personCsvHandler = require('../utils/csvHandler');

class ClassroomController {
    async createClassroom(req, res) {
        const { id, name, teacher_id, students } = req.body;
        const classrooms = await classroomCsvHandler.readCSV();

        if (classrooms.find(c => c.Id === id)) {
            return res.status(400).json({ message: 'ID already exists' });
        }

        const newClassroom = {
            Id: id,
            Name: name,
            Teacher_id: teacher_id,
            Students: Array.isArray(students) ? students : []
        };
        classrooms.push(newClassroom);
        await classroomCsvHandler.writeCSV(classrooms);
        res.status(201).json(newClassroom);
    }

    async getClassroom(req, res) {
        const { id } = req.params;
        const classrooms = await classroomCsvHandler.readCSV();
        const classroom = classrooms.find(c => c.Id === id);

        if (!classroom) {
            return res.status(404).json({ message: 'Classroom not found' });
        }

        res.status(200).json(classroom);
    }

    async updateClassroom(req, res) {
        const { id } = req.params;
        const { name, teacher_id, students } = req.body;
        const classrooms = await classroomCsvHandler.readCSV();
        const idx = classrooms.findIndex(c => c.Id === id);

        if (idx === -1) {
            return res.status(404).json({ message: 'Classroom not found' });
        }

        const updatedClassroom = {
            Id: id,
            Name: name,
            Teacher_id: teacher_id,
            Students: Array.isArray(students) ? students : []
        };
        classrooms[idx] = updatedClassroom;
        await classroomCsvHandler.writeCSV(classrooms);
        res.status(200).json(updatedClassroom);
    }

    async deleteClassroom(req, res) {
        const { id } = req.params;
        const classrooms = await classroomCsvHandler.readCSV();
        const idx = classrooms.findIndex(c => c.Id === id);

        if (idx === -1) {
            return res.status(404).json({ message: 'Classroom not found' });
        }

        classrooms.splice(idx, 1);
        await classroomCsvHandler.writeCSV(classrooms);
        res.status(204).send();
    }

    async listClassrooms(req, res) {
        const classrooms = await classroomCsvHandler.readCSV();
        res.status(200).json(classrooms);
    }

    async getClassroomFull(req, res) {
        const { id } = req.params;
        const classrooms = await classroomCsvHandler.readCSV();
        const persons = await personCsvHandler.readCSV();
        const classroom = classrooms.find(c => c.Id === id);

        if (!classroom) {
            return res.status(404).json({ message: 'Classroom not found' });
        }

        const teacher = persons.find(p => p.Id === classroom.Teacher_id);

        const students = classroom.Students.map(studentId =>
            persons.find(p => p.Id === String(studentId))
        ).filter(Boolean);

        res.status(200).json({
            Id: classroom.Id,
            Name: classroom.Name,
            Teacher: teacher || null,
            Students: students
        });
    }

    async listClassroomsFull(req, res) {
        const { name, teacher_id } = req.query;
        const classrooms = await classroomCsvHandler.readCSV();
        const persons = await personCsvHandler.readCSV();

        let filtered = classrooms;
        if (name) {
            filtered = filtered.filter(c => c.Name.toLowerCase().includes(name.toLowerCase()));
        }
        if (teacher_id) {
            filtered = filtered.filter(c => c.Teacher_id === teacher_id);
        }

        const result = filtered.map(classroom => {
            const teacher = persons.find(p => p.Id === classroom.Teacher_id);
            const students = classroom.Students.map(studentId =>
                persons.find(p => p.Id === String(studentId))
            ).filter(Boolean);

            return {
                Id: classroom.Id,
                Name: classroom.Name,
                Teacher: teacher || null,
                Students: students
            };
        });

        res.status(200).json(result);
    }
}

module.exports = ClassroomController;