
const formData = {
	email: "",
	message: ""
};

const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const localStorageKey = "feedback-form-state";


const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
	const parsedData = JSON.parse(savedData);
	formData.email = parsedData.email || "";
	formData.message = parsedData.message || "";
	emailInput.value = formData.email;
	messageInput.value = formData.message;
}


form.addEventListener("input", (event) => {
	const { name, value } = event.target;
	formData[name] = value.trim();
	localStorage.setItem(localStorageKey, JSON.stringify(formData));
});


form.addEventListener("submit", (event) => {
	event.preventDefault();

	if (!formData.email || !formData.message) {
		alert("Fill please all fields");
		return;
	}

	console.log(formData); 
	localStorage.removeItem(localStorageKey);
	formData.email = "";
	formData.message = "";
	form.reset();
});