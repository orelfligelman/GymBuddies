//namespace the app
var app = app || {};
app.gymBuddy = Backbone.Model.extend({

	defaults: {
	img: "images/mr_potato_head_on_a_treadmill.jpg"
	},

	initialize: function(){
		this.on('change', function(){
			console.log('whoop');
			//swipe events
		});
		this.on('swiperight', "#list li" function(event){
			var listitem = $(this),
			dir = event.type === "swipeleft" ? "left" : "right",
			transition = $.support.cssTransform3d ? dir : false;
			like(listitem);
		});
		function like(listitem){
			//add transition from css
			listitem.addClass(transition).on("webKitTransitioned transitionend otransitionend", function(){
			listitem.remove();
			$("#list").listview("refresh").find(".border-bottom").removeClass("border-bottom");
			})
			.prev("li").children("a").addClass("border-bottom").end().end().children(".ui-btn").removeClass("ui-btn-active");
		}
		this.on('swipeleft', function(){
			console.log('nay');
		});



	},
});
