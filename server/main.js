import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';

export const Tasks = new Mongo.Collection('tasks');

Meteor.startup(() => {
  // code to run on server at startup
});