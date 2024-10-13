const fetchUserData = async () => {
	const apiUrl = "https://jsonplaceholder.typicode.com/users";
	const dataContainer = document.getElementById("api-data");

	try {
		const response = await fetch(apiUrl, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new Error(`There was an error`);
		}

		const users = await response.json();
		console.log(users);

		dataContainer.innerHTML = "";
		userList = document.createElement("ul");
		users.forEach((user) => {
			const list = document.createElement("li");
			list.textContent = user.name;
			userList.append(list);
		});
		dataContainer.append(userList);
	} catch (error) {
		dataContainer.innerHTML = "Failed to load user data.";
	}
};

document.addEventListener("DOMContentLoaded", fetchUserData());
