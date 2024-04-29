const Note = require('../models/Note.js');
const User = require('../models/User.js');
const noteRouter = require('express').Router();


noteRouter.get('/',async (req, res) => {
    try {
        const notes = await Note.find();
      return  res.status(200).send(notes);
    } catch (error) {
        console.log(error.message);
       return res.status(400).send(JSON.stringify({error:error.message}));
    }
    
});
noteRouter.post('/create/:id',async (req, res) => {
    try {
        const userId = req.params.id;
        const noteData = req.body;
        noteData.owner = userId;
        const note = await Note.create(noteData);
        const user = await User.findById(userId);
        user.notes.push(note._id);
        const updateUser = await User.findByIdAndUpdate(userId,user);
      return  res.status(200).send(note);
    } catch (error) {
        console.log(error.message);
       return res.status(400).send(JSON.stringify({error:error.message}));
    }
    
});
noteRouter.put('/edit/:id',async (req, res) => {
    try {
        const id = req.params.id;
        const noteData = req.body;
        const note = await Note.findByIdAndUpdate(id,noteData);
      return  res.status(200).send(note);
    } catch (error) {
        console.log(error.message);
       return res.status(400).send(JSON.stringify({error:error.message}));
    }
    
});
noteRouter.delete('/delete/:id',async (req, res) => {
    try {
        const id = req.params.id;
        const note = await Note.findById(id);
        const ownerId = note.owner;
        const owner = await User.findById(ownerId);
        console.log(owner)
        owner.notes = owner.notes.filter(noteId => noteId !== id);
        const updateUser = await User.findByIdAndUpdate(owner._id,owner);
        const deletedNote = await Note.findByIdAndDelete(id);
      return  res.status(200).send(deletedNote);
    } catch (error) {
        console.log(error.message);
       return res.status(400).send(JSON.stringify({error:error.message}));
    }
    
});

module.exports = noteRouter;