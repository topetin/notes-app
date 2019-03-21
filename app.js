const notes = require('./notes.js')
const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'  
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function ({title, body}) {
        notes.addNote(title, body)
    }
})

yargs.command ({
    command: 'remove',
    describe: 'Remove a note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function({title}) {
        notes.removeNote(title)
    }
})

yargs.command ({
    command: 'list',
    describe: 'List all notes.',
    handler: function() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note.',
    handler: function ({title}) {
        notes.readNote(title)
    }
})

yargs.parse()