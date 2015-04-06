//namespace the app
var app = app || {};
app.singleGymView = Backbone.View.extend({

	className: "gym",

	template: _.template($("gymElement").html()),

	render: function(){
		var gymTemplate = this.template(this.model.toJSON());
		this.$el.html(gymTemplate);
		return this;
	}

});
