var allId = new Array();	//所有id
for(var row = 0; row < 4; row++){
	allId[row] = new Array();
	for(var column = 0; column < 4; column++){
		var id = "cell-" + row + "-" + column;
		allId[row][column] = id;
	}
}

function setNumberByID(id, number){
	var element = document.getElementById(id);
	element.innerHTML = number
	//element.innerHTML = 0==number? "": number;
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

function move(row, column, toRow, toColumn){
	var from_id = allId[row][column];
	var to_pos_x = getPosLeft(toRow, toColumn);
	var to_pos_y = getPosTop(toRow, toColumn);
	$("#" + from_id).animate({top: to_pos_y, left:to_pos_x}, 0);
	moveAtOnce(toRow, toColumn, row, column);
}

function moveAtOnce(row, column, toRow, toColumn){
	var from_id = allId[row][column];
	var to_pos_x = getPosLeft(toRow, toColumn);
	var to_pos_y = getPosTop(toRow, toColumn);
	//$("#" + from_id).animate({height:'200px'}, 1000);
	//$("#" + from_id).css("height:200px;");
	$("#" + from_id).css({top: to_pos_y, left:to_pos_x});
	//$("#" + from_id).css("style.top:"+to_pos_y + ";style.left:"+to_pos_x);
}

function getPosLeft(row, column){
	return 130*column+30;
}
function getPosTop(row, column){
	return 130*row+30
}

function getNumberBackgroundColor(number) {
    switch (number) {
    case 2:
        return "#eee4da";
        break;
    case 4:
        return "#eee4da";
        break;
    case 8:
        return "#f26179";
        break;
    case 16:
        return "#f59563";
        break;
    case 32:
        return "#f67c5f";
        break;
    case 64:
        return "#f65e36";
        break;
    case 128:
        return "#edcf72";
        break;
    case 256:
        return "#edcc61";
        break;
    case 512:
        return "#9c0";
        break;
    case 1024:
        return "#3365a5";
        break;
    case 2048:
        return "#09c";
        break;
    case 4096:
        return "#a6bc";
        break;
    case 8192:
        return "#93c";
        break;
    }
    return "black";
}