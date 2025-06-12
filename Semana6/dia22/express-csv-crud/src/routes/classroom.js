const express = require('express');
const router = express.Router();
const ClassroomController = require('../controllers/classroomController');
const classroomController = new ClassroomController();

router.post('/', classroomController.createClassroom);
router.get('/:id', classroomController.getClassroom);
router.get('/:id/full', classroomController.getClassroomFull);
router.put('/:id', classroomController.updateClassroom);
router.delete('/:id', classroomController.deleteClassroom);
router.get('/full', classroomController.listClassroomsFull);

module.exports = router;