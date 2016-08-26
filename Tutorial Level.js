var obstacles = [ 
	{
		x : -100,
		y : -100,
		width : 100,
		height : height + 200
	},
	{
		x : width,
		y : -100,
		width : 100,
		height : height + 200
	},
	{
		x : 0,
		y : -100,
		width : width,
		height : 100
	},
    {
    	x : 0,
    	y : height - 30,
    	width : width,
    	height : 30
    },
    {
    	x : width/8,
    	y : 3 * height/4 - 10,
    	width : 9 * width/40 ,
    	height : 10
    },
    {
    	x : 5 * width/8 + width/40,
    	y : 3 * height/4 - 10,
    	width : 9 * width/40 ,
    	height : 10    	
    },
    {
    	x : width/2 - width/8,
    	y : height/2 ,
    	width : width/4,
    	height : 10
    },
    {
    	x : width/8,
    	y : height/4 + 20,
    	width : 9 * width/40 ,
    	height : 10    	
    },
    {
    	x : 5 * width/8 + width/40,
    	y : height/4 + 20,
    	width : 9 * width/40 ,
    	height : 10    	
    }
],
enemyBoundries = [];

for(var count = 4; count < obstacles.length; count++) {
	enemyBoundries.push({
		x: obstacles[count].x - 9,
		y: obstacles[count].y - 10,
		width: 10,
		height: 10
	});
	enemyBoundries.push({
		x: obstacles[count].x + obstacles[count].width - 1,
		y: obstacles[count].y - 10,
		width: 10,
		height: 10		
	});
}

