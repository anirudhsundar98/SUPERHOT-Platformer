var enemies = [],
	path = [],
	timelog = [];
for(var count = 4; count < obstacles.length; count++) {
	enemies.push({
		x: random(obstacles[count].x, obstacles[count].x + obstacles[count].width - 16),
		y: obstacles[count].y - 20,
		width: 16,
		height: 20,
		velX: Math.round(random(0, 1)) - 0.5,
		velY: 0,
		sight: false,
		firing: false
	});
	timelog[count - 4] = null;
	path[count - 4] = null;
}

function random(min, max) {
	return min + (max - min)*Math.random();
}
