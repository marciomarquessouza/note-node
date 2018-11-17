const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');
const jsonExamples = require('./jsonExamples.js')

const titleOptions = {
  describe: "Note title",
  demand: true,
  alias: "t",
};
const bodyOptions = {
  describe: "Note body",
  demand: true,
  alias: "b",
} ;
const argv =  yargs
              .command('add','Add a new note.', {
                title: titleOptions,
                body: bodyOptions,
              })
              .command('list','List all notes')
              .command('read','read one specific note', {
                title: titleOptions,
              })
              .command('remove','Delete a specific note', {
                  title: titleOptions,
              })
              .help()
              .argv;

const commands = {
  ADD: () => {
    let note = notes.addNote(argv.title, argv.body);
    if (_.isUndefined(note)) {
      console.log("Command wasn't executed - duplicated title");
    } else {
      notes.logNote(note);
    }
    notes.getAll();
  },
  LIST: () => {
    const noteList = notes.getAll();
    console.log(`Printing ${noteList.length} notes:`);
    noteList.forEach(note => notes.logNote(note));
  },
  READ: () => {
    const note = notes.getNote(argv.title);
    if (note) {
      notes.logNote(note);
    } else {
      console.log(`Note ${argv.title} was not found`);
    }
  },
  REMOVE: () => {
    const removed = notes.removeNote(argv.title);
    const message = removed ? `Note with title ${argv.title} was removed.` : `Note with title ${argv.title} wasn't found.`;
    console.log(message);
  },
  JSON_STRINGIFY: () => {
    jsonExamples.stringify(argv.object);
  },
  JSON_PARSE: () => {
    jsonExamples.parse(argv.text);
  },
  NOT_RECOGNIZE: () => {
    console.log("Command wasn't regognized");
  },
};

argv._.map(command =>
  (commands[command.toUpperCase()] || commands.NOT_RECOGNIZE)());
