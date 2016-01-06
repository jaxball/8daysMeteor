Template.myEvent.helpers({
	myEvents: function() {
		return Events.find({"userId": Meteor.userId()});
	} 
});

Template.myEvent.events({
	'submit .new-event': function(event, template) {
		event.preventDefault();

		var name = event.target.name.value;
		var event = event.target.event.value;
		// event.target.name.value = "";
		// event.target.event.value = "";

		Events.insert({name: name, userId: Meteor.userId(), event: event}, function(){
			console.log("Event added successfully.");
			// $(".form-control")[0].reset();
			template.find(".new-event").reset();
			// return CoffeeAlerts.success(message);
		});
	}
});