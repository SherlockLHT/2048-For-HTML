window.onload=function(){
	initNum();
	var random_row1 = getRandomNum(0, 3);
	var random_column1 = getRandomNum(0, 3);
	var id1 = getIdByRowColumn(random_row1, random_column1);
	setCellNumber(id1, 2);
	while(true){
		var random_row2 = getRandomNum(0, 3);
		var random_column2 = getRandomNum(0, 3);
		if (random_row2 != random_row1 || random_column2 != random_column1) {
			var id2 = getIdByRowColumn(random_row2, random_column2);
			setCellNumber(id2, 2);
			break;
		}
	}
	
}

function setCellNumber(id, number){
	var element = document.getElementById(id);
	element.innerHTML = number
	element.innerHTML = 0==number? "": number;
}

function getNumber(id){
	var element = document.getElementById(id);
	var value = element.innerHTML;
	if (value == "") {	//空的表示0
		return 0;
	}
	return value;
}

function getRandomNum(min, max){
	var range = max - min;
	var random = Math.random();
	var num = min + Math.round(random * range);
	return num;
}

function initNum(){
	for(var row_index = 0; row_index < 4; row_index++){
		for(var column_index = 0; column_index < 4; column_index++){
			var id = getIdByRowColumn(row_index, column_index);
			setCellNumber(id, 0);
		}
	}
}

function getIdByRowColumn(row, column){
	var id = "cell-" + row.toString() + "-" + column.toString();
	return id;
}

function run(ids){
	for(var start_index = 0; start_index < 4; start_index++){
		var has_num = false;
		for(var index = start_index + 1; index < 4; index++){
			if(0 != getNumber(ids[index])){	//找到第一个不为0的数
				has_num = true;
				break;
			}
		}
		if(!has_num){	//后面全是0
			break;
		}
		if (getNumber(ids[start_index]) == 0) {
			setCellNumber(ids[start_index], getNumber(ids[index]));
			setCellNumber(ids[index], 0);
			start_index--;
		}
		else if (getNumber(ids[start_index]) == getNumber(ids[index])) {
			setCellNumber(ids[start_index], getNumber(ids[index]) * 2);
			setCellNumber(ids[index], 0)
		}
	}
}

function addNewNum(){
	while(true){
		var random_row = getRandomNum(0, 3);
		var random_column = getRandomNum(0, 3);
		var id = getIdByRowColumn(random_row, random_column);
		var value = getNumber(id);
		if(value == 0){
			break;
		}
	}
	setCellNumber(id, 2);
}

document.onkeydown=function(event){
	switch(event.keyCode){
	case 37: //left
		for(var row = 0; row < 4; row++){
			var ids = new Array(
				getIdByRowColumn(row, 0),
				getIdByRowColumn(row, 1), 
				getIdByRowColumn(row, 2),
				getIdByRowColumn(row, 3)
			);
			run(ids);
		}
		addNewNum();
		break;
	case 38: //up
		for(var column = 0; column < 4; column++){
			var ids = new Array(
				getIdByRowColumn(0, column),
				getIdByRowColumn(1, column),
				getIdByRowColumn(2, column),
				getIdByRowColumn(3, column)
			);
			run(ids);
		}
		addNewNum();
		break;
	case 39: //right
		for(var row = 0; row < 4; row++){
			var ids = new Array(
				getIdByRowColumn(row, 3),
				getIdByRowColumn(row, 2), 
				getIdByRowColumn(row, 1),
				getIdByRowColumn(row, 0)
			);
			run(ids);
		}
		addNewNum();
		break;
	case 40: //down
		for(var column = 0; column < 4; column++){
			var ids = new Array(
				getIdByRowColumn(3, column),
				getIdByRowColumn(2, column),
				getIdByRowColumn(1, column),
				getIdByRowColumn(0, column)
			);
			run(ids);
		}
		addNewNum();
		break;
	default:
		break;
	}
};