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
	element.innerHTML = 0==number? "": number;
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