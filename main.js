
const data = [
	"Data": [{
		"id": "A",
		"Front": "The boat is on the lake. You",
		"Right": "swim",
		"Left": "fall",
		"Bottom": "hop",
		"Top": "turn",
		"image": null
	}, {
		"id": "swim",
		"Front": "swim towards it briskly.",
		"Right": null,
		"Left": null,
		"Bottom": null,
		"Top": null,
		"image": null
	}, {
		"id": "fall",
		"Front": "fall asleep on the pier.",
		"Right": null,
		"Left": null,
		"Bottom": null,
		"Top": null,
		"image": null
	}, {
		"id": "hop",
		"Front": "hop in the kayak and paddle for it.",
		"Right": null,
		"Left": null,
		"Bottom": null,
		"Top": null,
		"image": null
	}, {
		"id": "turn",
		"Front": "turn and dissappear into the cabin.",
		"Right": null,
		"Left": null,
		"Bottom": null,
		"Top": null,
		"image": null
	}]
];

var count = Object.keys(data).length;

let cube = document.querySelector('#kyub');

function up() {
  cube.style.transform = 'rotateX(90deg)';
}

function down() {
  cube.style.transform = 'rotateX(-90deg)';
}

function left() {
  cube.style.transform = 'rotateY(-90deg)';
}

function right() {
  cube.style.transform = 'rotateY(90deg)';
}
