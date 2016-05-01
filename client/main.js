FlowRouter.route('/', {
  action: function (params) {
    BlazeLayout.render("main", {
      area: "main"
      });
  }
});

if (Meteor.isClient) {

}
