const validate = document.getElementById('validation');
const validateSuccess = document.getElementById('validationSuccess');

function validasiEmail() {
	var rs = document.forms["formInput"]["email"].value;
	var atps=rs.indexOf("@");
	var dots=rs.lastIndexOf(".");
	if (atps<1 || dots<atps+2 || dots+2>=rs.length) {
		validate.innerText = "Please provide a valid email"
        validate.style.color = "red";
		return false;
	} 
}