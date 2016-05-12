import { Projects } from '../imports/projects.js';

FlowRouter.route('/winner', {
    subscriptions: function () {
        this.register('projects', Meteor.subscribe('projects'));
    },
    action: function (params) {
        BlazeLayout.render("winner", {
            area: "winner",
        });
    }
});

if (Meteor.isClient) {
    
    Meteor.subscribe('projects');
    
    Template.winner.helpers({
        'winningProject': function () {
            var project = Projects.findOne({}, {sort: {current: -1}});
            console.log('Winner: ' + project);
            return Projects.findOne({}, {sort: {current: -1}});
        }
    });
}

