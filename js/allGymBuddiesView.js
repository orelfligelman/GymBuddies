//namespace the app
var app = app || {};
app.allGymBuddiesView = Backbone.View.extend({
	render: function(){
		this.collection.each(this.addGymBuddies, this);
		return this;
	},

	addGym: function(gymbuddies){
		var gymBuddiesView = new app.singleGymBuddiesView({model: gymbuddy});
		this.$el.append(gymBuddiesView.render().el);
	}
});