import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';

export const Tasks = new Mongo.Collection('tasks');

// Template.body.helpers({
//   projects: [
//     { projectName: 'First Project' },
//     { projectName: 'Second Project' },
//     { projectName: 'Third Project' },
//     { projectName: 'Fourth Project' },
//     { projectName: 'Fifth Project' },
//   ],
// });

Meteor.startup(() => {
  // code to run on server at startup
});