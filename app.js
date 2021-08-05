kaboom({
	global: true,
    scale: 1,
    width: 1150,
    height: 750
});

loadSprite("base", "./assets/princess/base.png");
loadSprite("closet", "./assets/closet.png");
loadSprite("dress1", "assets/dresses/dress1.png");
loadSprite("dress2", "assets/dresses/dress2.png");
loadSprite("dress3", "assets/dresses/dress3.png");
loadSprite("dress4", "assets/dresses/dress4.png");
loadSprite("dress5", "assets/dresses/dress5.png");
loadSprite("dress6", "assets/dresses/dress6.png");
loadSprite("hair1", "assets/hairs/hair1.png");
loadSprite("hair2", "assets/hairs/hair2.png");
loadSprite("hair3", "assets/hairs/hair3.png");
loadSprite("hair4", "assets/hairs/hair4.png");
loadSprite("bg", "assets/bg.jpg");

addSprite("bg");

addSprite("base", {
	pos: vec2(790, 120),
});
addSprite("closet", {
	pos: vec2(10, 60),
    width: 600,
});
// addSprite("apple", {
// 	pos: vec2(100, 40),
//     width: 220,
// });


let curDraggin = null;

function drag() {

	let offset = vec2(0);

	return {
		id: "drag",
		require: [ "pos", "area", ],
		// "add" is a special lifecycle method gets called when the obj is added to scene
		add() {
			// "this" in all methods refer to the obj
			this.clicks(() => {
				if (curDraggin) {
					return;
				}
				curDraggin = this;
				offset = mousePos().sub(this.pos);
				readd(this);
			});
		},
		// "update" is a special lifecycle method gets called every frame the obj is in scene
		update() {
			if (curDraggin === this) {
				this.pos = mousePos().sub(offset);
			}
		},
	};

}

mouseRelease(() => {
	curDraggin = null;
});

/* add([
    sprite("apple"),
    //pos(width(), height()),
    //origin("center"),
    pos(80, 80),
    drag()
]); */
add([
    sprite("dress6"),
    pos(132, 190),
    drag()
]);

add([
    sprite("dress5"),
    pos(245, 180),
    drag()
]);
add([
    sprite("dress4"),
    pos(190, 180),
    drag()
]);
add([
    sprite("dress3"),
    pos(111, 184),
    drag()
]);
add([
    sprite("dress2"),
    pos(12, 190),
    drag()
]);
add([
    sprite("dress1"),
    pos(62, 180),
    drag()
]);

add([
    sprite("hair1"),
    pos(625, 69),
    drag()
]);
add([
    sprite("hair2"),
    pos(625, 230),
    drag()
]);
add([
    sprite("hair3"),
    pos(625, 391),
    drag()
]);
add([
    sprite("hair4"),
    pos(625, 512),
    drag()
]);




