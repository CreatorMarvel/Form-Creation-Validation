document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("registration-form");
	const feedbackDiv = document.getElementById("form-feedback");

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		const username = document.getElementById("username").value.trim();
		const password = document.getElementById("password").value.trim();
		const email = document.getElementById("email").value.trim();

		const messages = [];
		let isValid = true;

		if (username.length < 3) {
			isValid = false;
			messages.push("Username must be at least 3 characters long.");
		}

		// Validate email
		if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
			isValid = false;
			messages.push("Please enter a valid email address.");
		}

		// Validate password
		if (password.length < 8) {
			isValid = false;
			messages.push("Password must be at least 6 characters long.");
		}

		feedbackDiv.style.display = "block";
		if (isValid) {
			feedbackDiv.textContent = "Registration successful!";
			feedbackDiv.style.color = "#28a745";
		} else {
			feedbackDiv.style.color = "#dc3545";
			feedbackDiv.innerHTML = messages.join("<br>");
		}
	});
});
