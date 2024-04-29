const Note = require('../models/Note.js');
const noteRouter = require('express').Router();


noteRouter.post('/create',async (req, res) => {
    try {
        const noteData = req.body;
        const note = await Note.findOne(noteData);
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
        const note = await Note.findByIdAndDelete(id);
      return  res.status(200).send(note);
    } catch (error) {
        console.log(error.message);
       return res.status(400).send(JSON.stringify({error:error.message}));
    }
    
});

module.exports = noteRouter;