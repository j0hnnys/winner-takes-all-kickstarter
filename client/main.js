import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

FlowRouter.route('/', {
  action: function (params) {
    BlazeLayout.render("main", {
      area: "main"
    });
  }
});

Template.project.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.numBackers = new ReactiveVar(0);
});

Template.project.helpers({
  numBackers() {
    return Template.instance().numBackers.get();
  },
});
Template.project.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.numBackers.set(instance.numBackers.get() + 1);
  },
});

if (Meteor.isClient) {
  Template.main.helpers({
    projects: [
      {
        projectName: 'Oculus Rift',
        imageName: 'vr_oculus.png',
        priceTag: '$0.99',
        numBackers: '15',
        description: 'This is a short description.',
      },
      {
        projectName: 'FOVE',
        imageName: 'vr_fove.jpg',
        priceTag: '$1.00',
        numBackers: '12',
        description: 'This is a short description.',
      },
      {
        projectName: 'Wearality',
        imageName: 'vr_wearality.jpg',
        priceTag: '$69.69',
        numBackers: '31',
        description: 'This is a short description.',
      },
      {
        projectName: 'HTC Vive',
        imageName: 'vr_htc.jpg',
        priceTag: '$420.00',
        numBackers: '6',
        description: 'This is a short description.',
      },
      {
        projectName: 'HoloLense',
        imageName: 'vr_microsoft_hololense.jpg',
        priceTag: '$9001.69',
        numBackers: '18',
        description: 'This is a short description.',
      },
    ],
  });
}
