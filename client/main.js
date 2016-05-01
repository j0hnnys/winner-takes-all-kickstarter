FlowRouter.route('/', {
  action: function (params) {
    BlazeLayout.render("main", {
      area: "main"
    });
  }
});

if (Meteor.isClient) {
  Template.main.helpers({
    projects: [
      {
        projectName: 'Oculus Rift',
        imageName: '"vr_oculus.png"',
        priceTag: '$0.99',
        numBackers: '15',
      },
      {
        projectName: 'FOVE',
        imageName: '"vr_fove.jpg"',
        priceTag: '$1.00',
        numBackers: '12',
      },
      {
        projectName: 'Wearality',
        imageName: '"vr_wearality.jpg"',
        priceTag: '$69.69',
        numBackers: '31',
      },
      {
        projectName: 'HTC Vive',
        imageName: '"vr_htc.jpg"',
        priceTag: '$420.00',
        numBackers: '6',
      },
      {
        projectName: 'HoloLense',
        imageName: '"vr_microsoft_hololense.jpg"',
        priceTag: '$9001.69',
        numBackers: '18',
      },
    ],
  });
}