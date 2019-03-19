const fs = require('fs');

const getNotes = function() {
    return 'Your notes...';
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note){
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        console.log('New note added.');
        
    } else {
        console.log('Note duplicated, not added.');
    }

    saveNotes(notes);
}

const removeNote = function(title) {
    const notes = loadNotes();
    const noteToDelete = notes.find(note => note.title === title);

    if (noteToDelete != null) {
        saveNotes(notes.filter(note => note.title !== title));
        console.log('Note deleted');
        
    } else {
        console.log('Note not found.');
    }
}

const saveNotes = function(notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson);
    }
    catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}