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

	if(isNull(user.value)) {
		user.style.background = '#FDEDEC';
		checkUser.innerHTML = 'Name must be filled out';
	}
	if (isNull(pass.value)) {
		pass.style.background = '#FDEDEC';
		checkPass.innerHTML = 'Pass must be filled out';
	}
	if (isNull(email.value)) {
		email.style.background = '#FDEDEC';
		checkEmail.innerHTML = 'Email must be filled out';
	}
	if (isNull(birthday.value)) {
		birthday.style.background = '#FDEDEC';
		checkbirthday.innerHTML = 'Birthday must be filled out';
	}
}

function isNull(text) {
	if(text == null || text == "") {
		return true;
	}
	return false;
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