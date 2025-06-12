const express = require('express');
const bodyParser = require('body-parser');
const personRoutes = require('./routes/person');
const classroomRoutes = require('./routes/classroom');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/persons', personRoutes);
app.use('/api/classrooms', classroomRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});