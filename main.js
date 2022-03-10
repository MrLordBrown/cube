

const data =[
  {
    "id": "A",
    "front": "The boat is on the lake. You",
    "right": "swim",
    "left": "fall",
    "bottom": "hop",
    "top": "turn",
    "image": null
  },
  {
    "id": "swim",
    "front": "swim towards it briskly.",
    "right": "jug",
    "left": "sump",
    "bottom": "run",
    "top": "oil",
    "image": null
  },
  {
    "id": "fall",
    "front": "fall asleep on the pier.",
    "right": null,
    "left": null,
    "bottom": null,
    "top": null,
    "image": null
  },
  {
    "id": "hop",
    "front": "hop in the kayak and paddle for it.",
    "right": null,
    "left": null,
    "bottom": null,
    "top": null,
    "image": null
  },
  {
    "id": "turn",
    "front": "turn and dissappear into the cabin.",
    "right": null,
    "left": null,
    "bottom": null,
    "top": null,
    "image": null
  },{
    "id": "jug",
    "front": "jug your mama bits.",
    "right": null,
    "left": null,
    "bottom": null,
    "top": null,
    "image": null
  },{
    "id": "sump",
    "front": "sump up the agent.",
    "right": null,
    "left": null,
    "bottom": null,
    "top": null,
    "image": null
  },
  {
    "id": "run",
    "front": "run the swaggert.",
    "right": null,
    "left": null,
    "bottom": null,
    "top": null,
    "image": null
  },
  {
    "id": "oil",
    "front": "oil the grizzty.",
    "right": null,
    "left": null,
    "bottom": null,
    "top": null,
    "image": null
  }
];

let f = document.querySelector('#f');
let l = document.querySelector('#l');
let r = document.querySelector('#r');
let t = document.querySelector('#t');
let d = document.querySelector('#d');
let b = document.querySelector('#b');
let tp = document.querySelector("#top");
let bm = document.querySelector("#bottom");
let lt = document.querySelector("#left");
let rt = document.querySelector("#right");

f.innerHTML = data[0].front;
l.innerHTML = data[0].id
tp.innerHTML = data[0].top;
bm.innerHTML = data[0].bottom;
lt.innerHTML = data[0].left;
rt.innerHTML = data[0].right;
let current;
let go;
let x;

function doIt(x,y) {
console.log(x);
for (var i = 0; i < count; i++) {
  console.log(data[i].id);
    if (data[i].id == x) {
f.innerHTML = data[i].front;
console.log(f.innerHTML);
tp.innerHTML = data[i].top;
bm.innerHTML = data[i].bottom;
lt.innerHTML = data[i].left;
rt.innerHTML = data[i].right;
}
}
if (y == 'f') {
  d.id = 'b';
  f.id = 'd';
  t.id = 'f';
} else if (y == 'd') {
  t.id = 'b';
  f.id = 't';
  d.id = 'f';
} else if (y == 'l') {
l.id = 'b';
  f.id = 'l';
  r.id = 'f';
} else if (y == 'r') {
  r.id = 'b';
  f.id = 'r';
  l.id = 'f';
}
}

var count = Object.keys(data).length;

let cube = document.querySelector('#kyub');
function upy() {
  cube.style.transform = 'rotateX(-90deg)';
<<<<<<< HEAD
  f.style.transform = 'rotateX(90deg)';
=======
>>>>>>> bff26abc68b6c1042afdcc9366b0146872b25036
  doIt(top.innerHTML,'t');

}

function downy() {
  cube.style.transform = 'rotateX(90deg)';
<<<<<<< HEAD
    d.style.transform = 'rotateX(-90deg)';
=======
>>>>>>> bff26abc68b6c1042afdcc9366b0146872b25036
  doIt(bottom.innerHTML,'d');
}
function lefty() {

  cube.style.transform = 'rotateY(90deg)';
  l.style.transform = 'rotateY(-90deg)';
  doIt(left.innerHTML,'l');
}

function righty() {
  cube.style.transform = 'rotateY(-90deg)';
  r.style.transform = 'rotateY(90deg)';
  doIt(right.innerHTML,'r');
}
