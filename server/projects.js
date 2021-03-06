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
        },
        "likeProject": function (projectId) {
            var project = Projects.findOne({_id: projectId});
            if (!project.current) {
                project.current = 0;
            }
            project.current += 1;
            Projects.update(project._id, project);
        }
    });
}