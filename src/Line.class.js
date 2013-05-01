/*** 直线对象
*** @param Point 直线上的一个点
*** @param Number | Point  斜率或者另外一个点****/
(function(){
var _m = MT.Math;
_m.Line = function(p1,p2){
	this.p = p1;
	if('number' ==typeof p2){
		this.s = p2;
		return this;
	}
	this.s = _m.slope(p1,p2);
	return this;	
}

})()