//namespace the app
var app = app || {};
app.gym = Backbone.Model.extend({

	defaults: {
	img: "images/mr_potato_head_on_a_treadmill.jpg"
	},

	initialize: function(){
		this.on('change', function(){
			console.log('whoop')l
		});
	}
});
