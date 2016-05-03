Projects = new Mongo.Collection('projects');

FlowRouter.route('/createProject', {
    action: function (params) {
        BlazeLayout.render("createProject", {
            area: "createProject"
        });
    }
});


if (Meteor.isServer) {
    
    Meteor.publish('projects', function () {
        return Projects.find({});
    });
    
    Meteor.methods({
        'createProject': function (projectObj) {
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

if (Meteor.isClient) {
    
    Meteor.subscribe('projects');
    
    Template.createProject.events({
        'submit .form-submit': function (event) {
            event.preventDefault();
            
            Meteor.call('createProject', {
                title: event.target.formTitle.value,
                description: event.target.formDescription.value,
                goal: parseFloat(event.target.formGoal.value),
                dateCreated: Date.now()
            }, function (err) {
                console.log(err);
            });
        }
    });
}