Meteor.publish('events', function(){
	var currentUser = this.userId;
	if (currentUser == null) {
		return [];	
	}
	else {
		return Events.find({userId: currentUser});
	}
});