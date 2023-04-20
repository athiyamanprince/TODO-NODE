const express = require('express');
const router = express.Router();
const Todo = require('../models/todoDb');

// GET all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST new todo
router.post('/', async (req, res) => {
  try {
    const { id,title } = req.body;
    const todo = await Todo.create({ id,title });
    res.status(200).json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Patch update todo

router.put('/', async (req, res) => {
  try {
    const {id,title} = req.query; 

    const todo = await Todo.update({ title }, { where: { id } });
    if (!todo) {
      return res.status(404).send({ error: 'Todo not found' });
    }else{res.json(todo);}

  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: 'Server error' });
  }
});



// DELETE remove todo
router.delete('/', async (req, res) => {
  try {
    const { id } = req.query;
    await Todo.destroy({ where: { id } });
    res.json({ msg: 'Todo deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;