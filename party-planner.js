Events = new Mongo.Collection("events");

// Events.insert({name: "Test two", userId: "Sxj8zoDww6FGmPA6B" });

if (Meteor.isClient) {
  // Meteor.subscribe('events');
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
