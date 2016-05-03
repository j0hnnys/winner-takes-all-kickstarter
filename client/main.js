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

var localProjects
Meteor.startup(function(){
  localProjects = projects.find({});
  console.log(localProjects);
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
        console.log(err);
        FlowRouter.go('/createProject');
      });
    }
  });

}

// How to test DB:
// > meteor mongo
// > <copy all the stuff below into here>

// db.ProjectDB.insert({
//   projectName: 'Oculus Rift',
//   imageName: 'vr_oculus.png',
//   priceTag: '$0.99',
//   numBackers: 15,
//   description: 'This is a short description.',
// });
// db.ProjectDB.insert({
//   projectName: 'FOVE',
//   imageName: 'vr_fove.jpg',
//   priceTag: '$1.00',
//   numBackers: 12,
//   description: 'This is a short description.',
// });
// db.ProjectDB.insert({
//   projectName: 'Wearality',
//   imageName: 'vr_wearality.jpg',
//   priceTag: '$69.69',
//   numBackers: 31,
//   description: 'This is a short description.',
// });
// db.ProjectDB.insert({
//   projectName: 'HTC Vive',
//   imageName: 'vr_htc.jpg',
//   priceTag: '$420.00',
//   numBackers: 6,
//   description: 'This is a short description.',
// });
// db.ProjectDB.insert({
//   projectName: 'HoloLense',
//   imageName: 'vr_microsoft_hololense.jpg',
//   priceTag: '$9001.69',
//   numBackers: 18,
//   description: 'This is a short description.',
// });