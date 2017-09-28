
//获取标签的样式属性

function getStyle(dom,attrName){
	if(dom.currentStyle){//如果说能够得到dom.currentStyle。
		return dom.currentStyle[attrName];
	}else {
		return window.getComputedStyle(dom)[attrName];
	}
}