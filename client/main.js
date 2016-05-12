import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ProjectDB } from '../imports/mangos.js'
import { Projects } from '../imports/projects.js';

FlowRouter.route('/', {
  subscriptions: function () {
    this.register('projects', Meteor.subscribe('projects'));
  },
  action: function (params) {
    BlazeLayout.render("main", {
      area: "main"
    });
  }
});

if (Meteor.isClient) {
  
  Meteor.subscribe('projects');
  
  Template.project.onCreated(function helloOnCreated() {
    // Initialize numBackers variable
    this.numBackers = new ReactiveVar(0);
  });

  Template.project.helpers({
    //Getter for number of backers
    numBackers() {
      return Template.instance().numBackers.get();
    },
  });

  Template.project.events({
    'click .back-button'(event, instance) {
      // Increment the number of backers when "Back this Project" button is clicked
      instance.numBackers.set(instance.numBackers.get() + 1);
    },
    'click .unback-button'(event, instance) {
      // Increment the number of backers when "Back this Project" button is clicked
      instance.numBackers.set(instance.numBackers.get() - 1);
    },
  });

  Template.main.helpers({
    'projects': function () {
      return Projects.find({});
    }
  });

  Template.main.events({
    'click .create-project-button': function (event) {
      event.preventDefault();
      
      Meteor.call("goCreateProject", {}, function (err) {
        if (err) {
          console.log('Error going to create project page');
          console.log(err);
        }
        FlowRouter.go('/createProject');
      });
    },
    'click .winner-button': function (event) {
      event.preventDefault();
      FlowRouter.go('/winner');
    }
  });

}
