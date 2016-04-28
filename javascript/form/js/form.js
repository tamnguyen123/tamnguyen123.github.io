var checkUser = false;
var checkPass = false;
var checkEmail = false;

/*
* Check input form when click submit button
*/
function checkSubmit() {
	var user = document.getElementById('username');
	var pass = document.getElementById('password');
	var birthday = document.getElementById('date');
	var email = document.getElementById('email');

	var checkUser = document.getElementById('checkUser');
	var checkPass = document.getElementById('checkPass');
	var checkEmail = document.getElementById('checkEmail');
	var checkbirthday = document.getElementById('checkBirthday');

	checkUser.innerHTML = "";
	checkPass.innerHTML = "";
	checkEmail.innerHTML = "";
	checkBirthday.innerHTML = "";

	user.style.background = '#fff';
	pass.style.background = '#fff';
	email.style.background = '#fff';
	birthday.style.background = '#fff';

	if(isNull(user.value)) {
		user.style.background = '#FDEDEC';
		checkUser.innerHTML = 'Name must be filled out';
	} else if(!checkLength(username.value)) {
		checkUser.innerHTML = "Username length min 8 letter";
	} else if(!checkValidate(username.value)) {
		checkUser.innerHTML = "Username not contain special character";
	} else {
		checkUser = true;
	}

	if (isNull(pass.value)) {
		pass.style.background = '#FDEDEC';
		checkPass.innerHTML = 'Pass must be filled out';
	} else if(!checkLength(password.value)) {
		checkPass.innerHTML = "Username length min 8 letter";
	} else if(!checkValidate(password.value)) {
		checkPass.innerHTML = "Password not contain special character";
	} else {
		checkPass = true;
	}

	if (isNull(email.value)) {
		email.style.background = '#FDEDEC';
		checkEmail.innerHTML = 'Email must be filled out';
	} else if (!checkEmails(email.value)) {
		checkEmail.innerHTML = "Email wrong format";
	} else {
		checkEmail = true;
	}

	if (isNull(birthday.value)) {
		birthday.style.background = '#FDEDEC';
		checkbirthday.innerHTML = 'Birthday must be filled out';
	} else {
		checkBirthday = true;
	}

	if (checkUsername && checkPassword && checkEmail) {
			callAjax("http://tamnguyen123.esy.es/php/test.php", username.value);
		}
}

function isNull(text) {
	if(text == null || text == "") {
		return true;
	}
	return false;
}

function checkEmails(value_email) {
	var email = /\S+@\S+\.\S+/;
	if(value_email.match(email)) {
		return true;
	}
	return false;
}

function checkLength(text) {
	if (text.length < 8) {
		return false;
	}
	return true;
}

function checkValidate(text) {
	var results = /^([0-9a-zA-Z])+$/;
	return true;
	//return results.test(text);
}

function callAjax(url, username) {
		httpRequest = new XMLHttpRequest();
		if (!httpRequest) {
			alert("Khong the khoi tao XMLHttpRequest");
			return false;
		}
		httpRequest.onreadystatechange = alertContents;
		console.log(url + "?username=" + username);
		httpRequest.open("GET", url + "?username=" + username);
		httpRequest.send();
	}

function valid() {
	var errors = false;
	var reg_email = /^[A-Za-z0-9] + ([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
	for (var i = 0; i < inputs; i++) {
		var value = inputs[i].value;
		var id = inputs[i].getAttribute('id');

		//create span save error
		var span = document.createElement('span');
		//if exist is remove
		var p = inputs[i].parentNode;
		if (p.lastChild.nodeName == 'SPAN') {
			p.removeChild(p.lastChild);
		}
		//check empty
		if (value == '') {
			span.innerHTML = 'Empty'
		}
	}
}