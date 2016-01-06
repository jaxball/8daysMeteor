Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.route('/', {
    template: 'myEvent',
    waitOn: function() { return Meteor.subscribe('events'); }
});

// Goal #3 for the day is to add a route for individual events, be sure to include
// a parameter for the event id to do the lookup and use findOne. Make sure to 
// set the data context for the event in the data block of the router setup. You 
// should also create your default route (/) to load the myEvents template.



Router.map(function() {
  this.route('events', {
  	name: 'events',
    path: '/search/:_id',
    waitOn: function() { return Meteor.subscribe('events')},
    data: function() {
      var currentEvent = this.params._id;
      console.log(currentEvent);
      return Events.findOne({_id: currentEvent});
      // return {
      //   events: Events.findOne({_id: currentEvent})

      // };
    }
  });
});
	