
FlowRouter.route('/createProject', {
    action: function (params) {
        BlazeLayout.render("createProject", {
            area: "createProject"
        });
    }
});


if (Meteor.isClient) {
    
    Meteor.subscribe('projects');
    
    Template.createProject.events({
        'submit .projectForm': function (event) {
            event.preventDefault();
            
            Meteor.call("createProject", {
                title: event.target.formTitle.value,
                description: event.target.formDescription.value,
                goal: parseFloat(event.target.formGoal.value),
                current: 0,
                dateCreated: Date.now()
            }, function (err) {
                if (err) {
                    console.log('Error creating project');
                }
                FlowRouter.go('/');
            });
        }
    });
    
    Template.projectListing.events({
        'click .like-button': function (event) {
            event.preventDefault();
            
            var projectId = event.target.value;
            
            Meteor.call("likeProject", projectId, function (err) {
                if (err) {
                    console.log('Error supporting project');
                    console.log(err);
                }
            });
        }
    });
}