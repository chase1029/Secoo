//匀速运动的封装

//水平运动
//参数：domObj(需要移动的dom元素),startValue(起始位置),endValue(结束位置),inc(增量),times(总时长)
function MoveX(domObj,startValue,endValue,inc,times){
	//定义方向
	var direction = -1;
	if(endValue>startValue){//判断dom元素应该朝那边走
		direction = 1;
	}
	moveObj(domObj,"left",startValue,endValue,inc,direction,times);
}

//垂直运动
function MoveY(domObj,startValue,endValue,inc,times){
	//定义方向
	var direction = -1;
	if(endValue>startValue){//判断dom元素应该朝那边走
		direction = 1;
	}
	moveObj(domObj,"top",startValue,endValue,inc,direction,times);
}


//这里是无论什么运动都行（调用下面的函数）
//参数:domObj,attr(left或者top或者opcity或者height等等),startValue,endValue,inc,direction,timeSpace
function moveObj(domObj,attr,startValue,endValue,inc,direction,times){
	let timeSpace = times/(Math.abs(startValue-endValue)/inc);
	
	let myTimer = null;
	let currValue = startValue;
	
	domObj.style[attr] = startValue+"px";
	
	//自运行函数
	(function(){
		if(myTimer!=null){
			window.clearInterval(myTimer);
		}
		myTimer = setInterval(function(){
			currValue = currValue+direction*inc;
			//越界处理
			let isOut = startValue>endValue?currValue<endValue:currValue>endValue;
			if(isOut){
				window.clearInterval(myTimer);
				myTimer = null;
				return;
			}
			domObj.style[attr] = currValue+"px";
			
		},timeSpace);
	})();
}

//轮播图的封装
//指定的图片淡入
function fadeIn(domObj,inc,times){
	FadeInOut(domObj,0,1,inc,1,times);
}
//当前图片淡出
function fadeOut(domObj,inc,times){
	FadeInOut(domObj,1,0,inc,-1,times);
}
//淡入淡出函数封装
function FadeInOut(){
	//当前透明度
	let currOpacity = startOpacity;
	//时间间隔
	let timeSpace = times/(Math.abs(startOpacity-endOpacity)/inc);
	domObj.style.opacity = startOpacity;
	
	let myTimer = null;
	(function moveObj(){
		myTimer = setInterval(function(){
					currOpacity = currOpacity+direction*inc;
					
					//边界处理
					let isOut = startOpacity<endOpacity?currOpacity>endOpacity:currOpacity<endOpacity;
					if(isOut){
						currOpacity = endOpacity;
						window.clearInterval(myTimer);
						return;
					}
					domObj.style.opacity = currOpacity;
				},timeSpace);
	})();
}