var database = [];
var id = 100;
var mode = 0;

window.onload = function() {
	createForm();
}

createForm = () => {
	const root = document.getElementById("root");
	const container = document.createElement("div");
	container.setAttribute("style","width:40%;margin:auto;background-color:lightgreen;text-align:center;")

	const form = document.createElement("form");
	form.setAttribute("class","m-3");
	
	//First name input and label
	const firstNameInput = document.createElement("input");
	firstNameInput.setAttribute("type","text");
	firstNameInput.setAttribute("name","firstname");
	firstNameInput.setAttribute("id","firstname");
	firstNameInput.setAttribute("class","form-control");
	const firstNameLabel = document.createElement("label");
	firstNameLabel.setAttribute("for","firstname");
	firstNameLabel.setAttribute("class","form-label");
	const firstNameText = document.createTextNode("First Name");
	firstNameLabel.appendChild(firstNameText);
	
	//Last name input and label
	const lastNameInput = document.createElement("input");
	lastNameInput.setAttribute("type","text");
	lastNameInput.setAttribute("name","lastname");
	lastNameInput.setAttribute("id","lastname");
	lastNameInput.setAttribute("class","form-control");
	const lastNameLabel = document.createElement("label");
	lastNameLabel.setAttribute("for","lastname");
	lastNameLabel.setAttribute("class","form-label");
	const lastNameText = document.createTextNode("Last Name");
	lastNameLabel.appendChild(lastNameText);

	//Email input and label
	const emailInput = document.createElement("input");
	emailInput.setAttribute("type","email");
	emailInput.setAttribute("name","email");
	emailInput.setAttribute("id","email");
	emailInput.setAttribute("class","form-control");
	const emailLabel = document.createElement("label");
	emailLabel.setAttribute("for","email");
	emailLabel.setAttribute("class","form-label");
	const emailText = document.createTextNode("Email");
	emailLabel.appendChild(emailText);

	//Phone input and label
	const phoneInput = document.createElement("input");
	phoneInput.setAttribute("type","tel");
	phoneInput.setAttribute("name","phone");
	phoneInput.setAttribute("id","phone");
	phoneInput.setAttribute("class","form-control");
	const phoneLabel = document.createElement("label");
	phoneLabel.setAttribute("for","phone");
	phoneLabel.setAttribute("class","form-label");
	const phoneText = document.createTextNode("Phone");
	phoneLabel.appendChild(phoneText);

	//Submit Button
	const submitButton = document.createElement("input");
	submitButton.setAttribute("type","submit");
	submitButton.setAttribute("id","submitbutton");
	submitButton.setAttribute("class","btn btn-secondary");
	submitButton.setAttribute("value","Add new contact");
	
	form.append(firstNameLabel,firstNameInput,lastNameLabel,lastNameInput,emailLabel,emailInput,phoneLabel,phoneInput,submitButton);
	form.addEventListener("submit",function(event) {
		event.preventDefault();
		addContact();
	})
	
	container.appendChild(form);
	root.appendChild(container);
}


addContact = () => {
	const firstNameInput = document.getElementById("firstname");
	const lastNameInput = document.getElementById("lastname");
	const emailInput = document.getElementById("email");
	const phoneInput = document.getElementById("phone");
	let contact = {
		"firstname":firstNameInput.value,
		"lastname":lastNameInput.value,
		"email":emailInput.value,
		"phone":phoneInput.value
	}
	if(mode) {
		contact.id = mode;
		for(let i=0;i<database.length;i++) {
			if(contact.id === database[i].id) {
				database.splice(i,1,contact);
			}
		}
	} else {
		contact.id = id;
		id++;
		database.push(contact);
	}
	firstNameInput.value = "";
	lastNameInput.value = "";
	emailInput.value = "";
	phoneInput.value = "";
	const submitButton = document.getElementById("submitbutton");
	submitButton.value = "Add new contact";
	mode = 0;
	console.log(database);
}