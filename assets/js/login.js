
document.getElementById("submit-btn").addEventListener("click", function () {

	// get user emial
	const userEmail = document.getElementById("user-email");
	const userEmailValue = userEmail.value;

	// get user password
	const userPass = document.getElementById("user-pass");
	const userPassValue = userPass.value;

	// condition
	if (userEmailValue == "saruarhosen525@gmail.com" && userPassValue == "saruar") {
		window.location.href = "banking.html";
	} else {
		const para = document.getElementById("para");
		para.innerText = "Please valid email & password";
		// paragraph style
		para.style.marginTop = "15px";
		para.style.textAlign = "center";
		para.style.fontWeight = "500";
		para.style.color = "white";
		para.style.fontSize = "20px";
	};

});