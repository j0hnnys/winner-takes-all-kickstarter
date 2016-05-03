import { Mongo } from 'meteor/mongo';

export const Projects = new Mongo.Collection('projects');

if (Meteor.isServer) {
    
    Meteor.publish('projects', function () {
        return Projects.find({});
    });
    
    Meteor.methods({
        "createProject": function (projectObj) {
            console.log(projectObj);
            var newProject = Projects.insert({
                title: projectObj.title,
                description: projectObj.description,
                goal: projectObj.goal
            });
            FlowRouter.go("/");
        }
    });
}