var app = app || {};
app.Router = Backbone.Router.extend({
	routes: {
		"": "noCopy",
		"gym":"gymMessage",
		"gymBuddy":"gymBuddyMessage"
	},
	noCopy: function(){
		$("#copy").html("");
	},
	gymMessage: function(){
		$("#copy").html("gym1");
	},
	gymBuddyMessage: function(){
		$("#copy").html("gymBuddy2")
	}
});