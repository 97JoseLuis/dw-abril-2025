const express = require('express');
const router = express.Router();
const PersonController = require('../controllers/personController');
const personController = new PersonController();

// Create a new person
router.post('/', personController.createPerson);

// Get a person by ID
router.get('/:id', personController.getPerson);

// Update a person by ID
router.put('/:id', personController.updatePerson);

// Delete a person by ID
router.delete('/:id', personController.deletePerson);

// List all persons
router.get('/', personController.listPersons);

module.exports = router;