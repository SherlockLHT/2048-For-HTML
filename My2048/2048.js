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
			moveLeft();
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
});

function initNum(){
	for(var row_index = 0; row_index < 4; row_index++){
		for(var column_index = 0; column_index < 4; column_index++){
			var id = getIdByRowColumn(row_index, column_index);
			setNumberByID(id, 0);
			//更新当前div的位置
			document.getElementById(id).style.top = getPosTop(row_index, column_index) + "px";
			document.getElementById(id).style.left = getPosLeft(row_index, column_index) + "px";
			var background_id = id + "-background";
			document.getElementById(background_id).style.top = getPosTop(row_index, column_index) + "px";
			document.getElementById(background_id).style.left = getPosLeft(row_index, column_index) + "px";
		}
	}
}

function moveLeft(){
	for(var row = 0; row < 4; row++){
		moveLeftRow(row);
	}
}

function moveLeftRow(row){
	for(var column = 1; column < 4; column++){
		var current = getNumByRowColumn(row, column);
		if(0 == current){//当前是0，则停止
			continue;
		}
		
		var pervious = getNumByRowColumn(row, column-1);
		if(pervious == 0){	//前一个数是0，只移动
			move(row, column, row, column-1);
			setNumByRowColumn(row, column-1, pervious);
		}
		else if(current == pervious){//当前和前一个相同，则赋值并移动
			move(row, column, row, column-1);
			setNumByRowColumn(row, column-1, pervious*2);
		}
	}
}