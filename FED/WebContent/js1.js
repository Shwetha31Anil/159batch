/**
 * 
 */

function display(){
var x=window.confirm("welcome");
if(x==true)
document.write("Welcome");
else
document.write("user cancelled");
}

function display1(){
	var x=prompt("enter number1","");
	var y=prompt("enter number 2","");
	var z=parseInt(x)+parseInt(y);
	document.write(z);
}


function getCars(){
	var cars=["BMW","XUV","SUV","I20"];
	var i=0;
	var txt="";
	while(cars[i]){
		txt+=cars[i]+"<br/>";
		i++;
	}
	document.write(txt);
}

function predefinedFunctions(){
	var str="Some String";
	//String styles
	document.write(str.big()+"<br/>");
	document.write(str.small()+"<br/>");
	document.write(str.sub()+"<br/>");
	document.write(str.sup()+"<br/>");
	//String methods
	document.write(str.charAt(2)+"<br/>");
	
	var d=new Date();
	document.write(d+"<br/>");
	document.write(d.getMonth()+"<br/>");
	document.write(d.getFullYear()+"<br/>");
	
	var n=456.89;
	document.write(Math.floor(n)+"<br/>");
	document.write(Math.ceil(n)+"<br/>");
	document.write(Math.random()+"<br/>");
	document.write(Math.floor(Math.random()*11)+"<br/>");
	document.write(Math.pow(6,2)+"<br/>");
	
	
	var x="10";
	if(x===10)
		document.write("values are equal");
	else
		document.write("values are not equal");
}


function addition(){
	var x=document.getElementById("num1").value;
	var y=document.getElementById("num2").value;
	var z=parseInt(x)+parseInt(y);
	document.getElementById("result").value=z;
}

