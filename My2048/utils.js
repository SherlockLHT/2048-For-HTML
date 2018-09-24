var allId = new Array(4, 4);
allId[0][0] = "cell-0-0";
allId[0][1] = "cell-0-1";
allId[0][2] = "cell-0-2";
allId[0][3] = "cell-0-3";
allId[1][0] = "cell-1-0";
allId[1][1] = "cell-1-1";
allId[1][2] = "cell-1-2";
allId[1][3] = "cell-1-3";
allId[2][0] = "cell-2-0";
allId[2][1] = "cell-2-1";
allId[2][2] = "cell-2-2";
allId[2][3] = "cell-2-3";
allId[3][0] = "cell-3-0";
allId[3][1] = "cell-3-1";
allId[3][2] = "cell-3-2";
allId[3][3] = "cell-3-3";


function setNumberByID(id, number){
	var element = document.getElementById(id);
	element.innerHTML = number
	element.innerHTML = 0==number? "": number;
}

function getNumberById(id){
	var element = document.getElementById(id);
	var value = element.innerHTML;
	if (value == "") {	//空的表示0
		return 0;
	}
	return value;
}

function getNumByRowColumn(row, column){
	var id = getIdByRowColumn(row, column);
	return getNumberById(id);
}

function setNumByRowColumn(row, column, num){
	var id = getIdByRowColumn(row, column);
	setNumberByID(id, num);
}

function getIdByRowColumn(row, column){
	var id = allId[row][column];
	return id;
}

function getRandomNum(min, max){
	var range = max - min;
	var random = Math.random();
	var num = min + Math.round(random * range);
	return num;
}

function move(row, column){

}
