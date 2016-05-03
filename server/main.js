import { Meteor } from 'meteor/meteor';
import '../imports/mangos.js'

Meteor.startup(() => {
  // code to run on server at startup
});

if (Meteor.isServer) {
  Meteor.methods({
    "goCreateProject": function() {
      FlowRouter.go('/');
    }
  });
}