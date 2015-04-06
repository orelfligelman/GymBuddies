var planetFitness = new app.gym({
	name: "Planet Fitness",
	location:
	img: "images/planetfitness.jpg",
	link: "planetFitness"
});
var nysc = new app.gym({
	name: "NYSC",
	location:
	img: "images/nysc.jpg",
	link: "nysc"
});

var equinox = new app.gym({
	name: "Equinox",
	location:
	img: "images/equinox.jpg",
	link: "equinox"
});

var gymGroup = new app.GymsCollection([
	planetFitness, nysc, equinox
	]);

var gymGroupView = new app.allGymsView({collection: gymGroup });

$('allGyms').html(gymGroupView.render().el);