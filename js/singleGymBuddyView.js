//namespace the app
var app = app || {};
app.singleGymBuddyView = Backbone.View.extend({

	className: "gymBuddies",

	template: _.template($("gymBuddiesElement").html()),

	render: function(){
		var gymBuddyTemplate = this.template(this.model.toJSON());
		this.$el.html(gymBuddyTemplate);
		return this;
		}
	events: {
		'swiperight': 'like',
		'swipeleft' : 'dislike'
	},
	like: function(){
		//store the event in the db
		//if user has also liked, indicate so
		//load in the next pic
		this.$el.
	},
	dislike: function(){
		//store the event in the db
		//load in the next pic
	}
});
