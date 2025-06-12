class PersonController {
    constructor(csvHandler) {
        this.csvHandler = csvHandler;
    }

    async createPerson(req, res) {
        const { id, name, surname, isTeacher, birthdate } = req.body;
        const persons = await this.csvHandler.readCSV();

        if (persons.find(person => person.Id === id)) {
            return res.status(400).json({ message: 'ID already exists' });
        }

        const newPerson = { Id: id, Name: name, Surname: surname, IsTeacher: isTeacher, Birthdate: birthdate };
        persons.push(newPerson);
        await this.csvHandler.writeCSV(persons);
        res.status(201).json(newPerson);
    }

    async getPerson(req, res) {
        const { id } = req.params;
        const persons = await this.csvHandler.readCSV();
        const person = persons.find(person => person.Id === id);

        if (!person) {
            return res.status(404).json({ message: 'Person not found' });
        }

        res.status(200).json(person);
    }

    async updatePerson(req, res) {
        const { id } = req.params;
        const { name, surname, isTeacher, birthdate } = req.body;
        const persons = await this.csvHandler.readCSV();
        const personIndex = persons.findIndex(person => person.Id === id);

        if (personIndex === -1) {
            return res.status(404).json({ message: 'Person not found' });
        }

        const updatedPerson = { Id: id, Name: name, Surname: surname, IsTeacher: isTeacher, Birthdate: birthdate };
        persons[personIndex] = updatedPerson;
        await this.csvHandler.writeCSV(persons);
        res.status(200).json(updatedPerson);
    }

    async deletePerson(req, res) {
        const { id } = req.params;
        const persons = await this.csvHandler.readCSV();
        const personIndex = persons.findIndex(person => person.Id === id);

        if (personIndex === -1) {
            return res.status(404).json({ message: 'Person not found' });
        }

        persons.splice(personIndex, 1);
        await this.csvHandler.writeCSV(persons);
        res.status(204).send();
    }

    async listPersons(req, res) {
        const persons = await this.csvHandler.readCSV();
        res.status(200).json(persons);
    }
}

module.exports = PersonController;