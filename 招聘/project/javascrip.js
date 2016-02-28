// JavaScript Document

//省市数组
var cityList = new Array();
     cityList[0] = ['北京市','朝阳区','东城区','西城区', '海淀区','宣武区','丰台区','怀柔','延庆','房山'];
	 cityList[1] = ['上海市','宝山区','长宁区','丰贤区', '虹口区','黄浦区','青浦区','南汇区','徐汇区','卢湾区'];
	 cityList[2] = ['广州省','广州市','惠州市','汕头市','珠海市','佛山市','中山市','东莞市'];
     cityList[3] = ['深圳市','福田区', '罗湖区', '盐田区', '宝安区', '龙岗区', '南山区', '深圳周边'];
	 cityList[4] =['重庆市','俞中区', '南岸区', '江北区', '沙坪坝区', '九龙坡区', '渝北区', '大渡口区', '北碚区'];
     cityList[5] = ['天津市','和平区', '河西区', '南开区', '河北区', '河东区', '红桥区', '塘古区', '开发区'];
	 cityList[6] = ['江苏省','南京市','苏州市','无锡市'];
	 cityList[7] = ['浙江省','杭州市','宁波市','温州市'];
	 cityList[8] = ['四川省','成都市'];
	 cityList[9] = ['海南省','海口市'];
	 cityList[10] = ['福建省','福州市','厦门市','泉州市','漳州市'];
	 cityList[11] = ['山东省','济南市','青岛市','烟台市'];
	 cityList[12] = ['江西省','南昌市'];
	 cityList[13] = ['广西','南宁市'];
	 cityList[14] = ['安徽省','合肥市'];
	 cityList[15] = ['河北省','石家庄市'];
	 cityList[16] = ['河南省','郑州市'];
	 cityList[17] = ['湖北省','武汉市','宜昌市'];
	 cityList[18] = ['湖南省','长沙市'];
	 cityList[19] = ['陕西省','西安市'];
	 cityList[20] = ['山西省','太原市'];
	 cityList[21] = ['黑龙江省','哈尔滨市'];
	 cityList[22] = ['国外'];
	 cityList[23] = ['其他'];
	 
function cityChange(){
	//清空城市列表
	city.length = 0;
	//添加城市
	 var index = privince.selectedIndex;
	 for(var i = 0; i < cityList[index-1].length; i++){
			var c = new Option(cityList[index-1][i],cityList[index-1][i]);	
			city.options.add(c);
		}
}
 
