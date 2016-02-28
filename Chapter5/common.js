// JavaScript Document
function remove(array, value){
	var index = -1;
	//遍历数组
	for(var i = 0; i < array.length; i++){
		if(array[i] == value){
			index = i;
			break;
		}
	}
	//判断是否找到要删除的数
	if(index != -1){
		//截取要删除数的前后所有元素，并拼接成新的数组
		array = array.slice(0,index).concat(array.slice(index+1));
	}
	return array;
}