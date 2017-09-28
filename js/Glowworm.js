

function Glowworm(){

	let that = this;
	let clientWidth = document.documentElement.clientWidth || document.body.clientWidth;

	let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

	this.color = "";
	this.width = Math.random()*30;
	this.width = this.width<=5?5:this.width;
	this.height = this.width;
	this.shadow = this.width/0.9;
	this.inc = Math.random()*0.1;
	this.direction = Math.pow(-1,parseInt(Math.random()*10));
	this.moveDirectionH = Math.pow(-1,parseInt(Math.random()*10));
	this.moveDirectionV = Math.pow(-1,parseInt(Math.random()*10));
	this.top1 = Math.random()*clientHeight;
	this.left1 = Math.random()*clientWidth;
	this.domObj = null;
	this.opacity1 = 1;
	
	this.initUI=function(){
		this.domObj = $create("div");
		this.getColor();
		console.log(this.left1);
		let cssStr = "position:absolute;border-radius:50%;box-shadow:0 0 "+this.shadow+"px "+this.shadow+"px "+this.color+";opacity:"+this.opacity1+";";

		cssStr+="width:"+this.width+"px;height:"+this.height+"px;background-color:"+this.color+";left:"+this.left1+"px;top:"+this.top1+"px;";

		this.domObj.style.cssText = cssStr;
		document.body.appendChild(this.domObj);
	};
	
	
	this.getColor=function(){
		
		let redColor = parseInt(Math.random()*256).toString(16);
		redColor = ("0"+redColor).slice(-2);

		let blueColor = parseInt(Math.random()*256).toString(16);
		blueColor = ("0"+blueColor).slice(-2);

		let greenColor = parseInt(Math.random()*256).toString(16);
		greenColor = ("0"+greenColor).slice(-2);

		this.color = "#"+redColor+blueColor+greenColor;

		if(this.color.toLowerCase()=="#000000"){
			this.color="yellow";
			}
	};


	this.start=function(){
		setInterval(function(){
			that.gostep();
		},30)
	};


	
	this.gostep=function(){
		
		
		this.opacity1 = this.opacity1+this.direction*this.inc;
		this.top1 = this.top1+this.moveDirectionV*Math.random()*3;
		this.left1 = this.left1+this.moveDirectionH*Math.random()*5;
		
		
		let scrollTop =document.documentElement.scrollTop || document.body.scrollTop;
		let scrollLeft =document.documentElement.scrollLeft || document.body.scrollLeft;
		
		//边界处理
		if(this.opacity1<=0){
			this.opacity = 0;
			this.direction = 1;
			this.moveDirectionH = Math.pow(-1,parseInt(Math.random()*10));
			this.moveDirectionV = Math.pow(-1,parseInt(Math.random()*10));
			this.width = Math.random()*30;
			this.width = this.width<=5?5:this.width;
			this.height = this.width;
			this.shadow = this.width/0.9;
			this.inc = Math.random()*0.1;
			this.getColor();
		}else if(this.opacity1>=1){
			this.opacity = 1;
			this.direction = -1;
		}
		
		if(this.left1<(0+scrollLeft)){
			this.left1=clientWidth-this.width+scrollLeft;
		}else if(this.left1>(clientWidth-this.width+scrollLeft)){
			this.left1=0+scrollLeft;
		}

		if(this.top1<(0+scrollTop)){
			this.top1=clientHeight-this.height+scrollTop;
		}else if(this.top1>(clientHeight-this.height+scrollTop)){
			this.top1=0+scrollTop;
		}
		
		this.domObj.style.opacity = this.opacity1;
		this.domObj.style.left = this.left1+"px";
		this.domObj.style.top = this.top1+"px";
		this.domObj.style.width = this.width+"px";
		this.domObj.style.height = this.height+"px";
		this.domObj.style.boxShadow = "0 0 "+this.shadow+"px "+this.shadow+"px "+this.color;
		this.domObj.style.backgroundColor = this.color;
	}
}