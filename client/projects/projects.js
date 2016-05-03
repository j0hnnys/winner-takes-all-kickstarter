
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
                dateCreated: Date.now()
            }, function (err) {
                console.log(err);
            });
        }
    });
}