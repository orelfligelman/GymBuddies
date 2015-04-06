var gymBuddy1 = new app.gymBuddy({
	name: "Orel",
	img: "images/orel.jpg",
	link: "gymBuddy1"
});

var gymBuddy2 = new app.gymBuddy({
	name: "Ikey",
	img: "images/ikey.jpg",
	link: "gymBuddy2"
});

var gymBuddy3 = new app.gymBuddy({
	name: "Ter",
	img: "images/ter.jpg",
	link: "gymBuddy3"
});

var gymBuddy4 = new app.gymBuddy({
	name: "Brandee",
	img: "images/brandee.jpg",
	link: "gymBuddy4"
});

var gymBuddy5 = new app.gymBuddy({
	name: "Mishelle",
	img: "images/mishelle.jpg",
	link: "gymBuddy5"
});
var gymBuddy6 = new app.gymBuddy({
	name: "Sam",
	img: "images/sam.jpg",
	link: "gymBuddy6"
});


var gymBuddiesGroup = new app.GymBuddiesCollection([
	gymBuddy1, gymBuddy2, gymBuddy3, gymBuddy4, gymBuddy5, gymBuddy6
	]);

var gymBuddiesGroupView = new app.allGymBuddiesView({collection: gymBuddiesGroup });

$('allGymBuddies').html(gymBuddiesGroupView.render().el);
