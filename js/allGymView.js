//namespace the app
var app = app || {};
app.allGymsView = Backbone.View.extend({
	render: function(){
		this.collection.each(this.addGym, this);
		return this;
	},

	addGym: function(gym){
		var gymView = new app.singleGymView({model: gym});
		this.$el.append(gymView.render().el);
	}
});