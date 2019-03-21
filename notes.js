const fs = require('fs')

const readNote = (title) => {
    const notes = loadNotes()
    let note = notes.find(note => note.title === title)

    note ? console.log('Title: '+ note.title + '\n Body: ' + note.body) : console.log('Note not found')
}

const listNotes = function() {
    const notes = loadNotes()

    if (notes.length > 0) {
        for(let note of notes) {
            console.log('Title: '+ note.title + '\n Body: ' + note.body)
        }
    } else {
        console.log('No notes to list.')
    }
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        })
        console.log('New note added.')
    } else {
        console.log('Note duplicated, not added.')
    }

    saveNotes(notes)
}

const removeNote = function(title) {
    const notes = loadNotes()
    const noteToDelete = notes.find(note => note.title === title)

    if (noteToDelete != null) {
        saveNotes(notes.filter(note => note.title !== title))
        console.log('Note deleted')
    } else {
        console.log('Note not found.')
    }
}

const saveNotes = function(notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch (e) {
        return []
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}