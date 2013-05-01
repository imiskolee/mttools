/*** MTTOOL of javascript 
*** 这是一个使用javascript语言实现的几何运算库
*******/

/***MT对象为顶部全局命名空间***/
window.MT= window.MT || {};
/*** MT的数学库,与javascript的Math类需要区分***/
MT.Math = MT.Math || {};
var _m = MT.Math;

/***基本的二维点对象
 *** @param Number x x轴坐标
 *** @param Number y y轴坐标**/
 _m.Point = function(x,y){

 	this.x = x;
 	this.y = y;
 }

 

/*** 直线对象
*** @param Point 直线上的一个点
*** @param Number | Point  斜率或者另外一个点****/
_m.Line = function(p1,p2){
	this.p = p1;
	if('number' ==typeof p2){
		this.s = p2;
		
		return this;
	}
	this.s = _m.slope(p1,p2);
	return this;	
}

/** 计算斜率
*** @param Point p1
*** @param Point p2***/
_m.slope =function(p1,p2){
return (p2.y-p1.y) / (p2.x-p1.x);	
}

//垂线的斜率
_m.vertical_line_slope = function(slope){
	return (-1/slope);
}
//中点
_m.center_point_of_line = function(p1,p2){
	//return  [((p1[0]+p2[0])),((p1[1]+p2[1]) /2)]
	return new _m.point(((p1.x+p2.x)/2),(p1.y+p2.y)/2);
}
/***
 *** 两直线交点坐标。利用直线的两点式求交点坐标
*/
_m.intersection_of_line = function(line1,line2){
	//若是平行线，则没有交点
	if(line1.s ==line2.s){
		return false;
	}
	var p1 =line1.p,p2=line2.p,s1=line1.s,s2=line2.s;
	var x = (p2.y-p1.y+s1*p1.x-s2*p2.x)/(s1-s2);  //交点X轴坐标
	var y =s1*x-s1*p1.x+p1.y;  	//代入直线1 求出Y点坐标
	return new _m.Point(x,y);
}
//距离
_m.distance_of_point = function(p1,p2){
var b1 = Math.pow((p1[0]-p2[0]),2)+Math.pow(p1[1]-p2[1],2);
return Math.sqrt(b1);
}

/**
var line1 = new MT.Math.Line(new MT.Math.Point(1,1),new MT.Math.Point(2,1))
var line2 = new MT.Math.Line(new MT.Math.Point(1,2),new MT.Math.Point(2,4))
**/

/**** 
TODO: 我们首先需要实现基本的点，线，三角运算
之后开始实现曲线运算

***/







