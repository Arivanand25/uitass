function validateMail(){
	var minput = document.querySelector(".email-input");
	var x = minput.value;
	var atposition = x.indexOf("@");
	var dotposition = x.lastIndexOf(".");
	if(atposition <1 || dotposition < atposition +2 || dotposition + 2 >=x.length){
		alert("ENTER VALID MAIL ");
	}
	else{
		alert("it is valid mail");
	}
	}

function validatePhone(){
	var val=document.querySelector(".number-input");
	var x=val.value;
	if(x.length < 10){
		alert("Enter a valid number");
	}
}

function validateAge(){
	var val = document.querySelector(".age-input");
	var x= val.value;
	if(x < 150){
		alert("The entered age is valid");
	}else{
		alert("The age is not valid");
	}
}



function validateName(){
	var val=document.querySelector(".name-input");
	var x=val.value;
	if(x==""){
		alert("Enter a valid name");
	}
}