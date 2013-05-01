(function(){
var _m = MT.Math;
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
})()