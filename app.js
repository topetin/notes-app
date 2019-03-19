const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.version('1.1.0');

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
    handler: function (argv) {
        console.log('Title: ', argv.title);
        console.log('Body; ', argv.body);
    }
});

yargs.command ({
    command: 'remove',
    describe: 'Remove a note.',
    handler: function() {
        console.log('Removing the note.');
    }
});

yargs.command ({
    command: 'list',
    describe: 'List all notes.',
    handler: function() {
        console.log('Listing all notes.');
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note.',
    handler: function () {
        console.log('Fetching a note.');
    }
});

console.log(yargs.argv);