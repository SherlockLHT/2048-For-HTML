$(document).ready(function(){
	initNum();
	var random_row1 = getRandomNum(0, 3);
	var random_column1 = getRandomNum(0, 3);
	var id1 = getIdByRowColumn(random_row1, random_column1);
	setNumberByID(id1, 2);
	while(true){
		var random_row2 = getRandomNum(0, 3);
		var random_column2 = getRandomNum(0, 3);
		if (random_row2 != random_row1 || random_column2 != random_column1) {
			var id2 = getIdByRowColumn(random_row2, random_column2);
			setNumberByID(id2, 2);
			break;
		}
	}

	$(document).keydown(function(event){
		switch(event.keyCode){
		case 37: //left
			console.log("left");
			break;
		case 38: //up
			console.log("up");
			break;
		case 39: //right
			console.log("right");
			break;
		case 40: //down
			console.log("down");
			break;
		default:
			break;
		}
	});

	console.log(getIdByRowColumn(1,2));
});

function initNum(){
	for(var row_index = 0; row_index < 4; row_index++){
		for(var column_index = 0; column_index < 4; column_index++){
			var id = getIdByRowColumn(row_index, column_index);
			setNumberByID(id, 0);
		}
	}
}

function moveLeft(){
	for(var row = 0; row < 3; row++){
		moveLeftRow(row);
	}
}

function moveLeftRow(row){
	for(var column = 1; column < 3; column++){
		
	}
}