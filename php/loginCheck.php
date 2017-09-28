<?php
	header("Content-type: text/html; charset=utf-8");
	
	//1、接收浏览器端的数据（即客户端的数据）
	$name = $_POST['userName'];
	$pass = $_POST['userPass'];
	
	//2、插入数据库
	
	//1、连接数据库
	$conn = mysql_connect("localhost","root","qianfeng");
	
	if(!$conn){
		die("亲，connect fail");
	}else{
		//echo "connect success";
	}
	
	//2、选择数据库
	mysql_select_db("mydb1704",$conn);
	
	//3、执行SQL语句
	$sqlStr="select * from userInfo where userName='".$name."' and userPass='".$pass."'";
    $result = mysql_query($sqlStr,$conn);
    $rowCount = mysql_num_rows($result);
    if($rowCount==0){
    	echo "0";//登录失败    	
    }else{
    	echo "1";//登录成功！
    }
    //4、关闭数据库
    mysql_close($conn); 
?>