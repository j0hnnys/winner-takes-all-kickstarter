FlowRouter.route('/createProject', {
    action: function (params) {
        BlazeLayout.render("layout", {
            area: "createProject"
            });
    }
});
