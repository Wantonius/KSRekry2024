var database = [];
var id = 100;
var mode = 0;

window.onload = function() {
	createForm();
	populateTable();
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
	populateTable();
}

removeContact = (id) => {
	for(let i=0;i<database.length;i++) {
		if(id === database[i].id) {
			database.splice(i,1);
		}
	}
	populateTable();
}

editContact = (contact) => {
	const firstNameInput = document.getElementById("firstname");
	const lastNameInput = document.getElementById("lastname");
	const emailInput = document.getElementById("email");
	const phoneInput = document.getElementById("phone");
	firstNameInput.value = contact.firstname;
	lastNameInput.value = contact.lastname;
	emailInput.value = contact.email;
	phoneInput.value = contact.phone;
	mode = contact.id;
	const submitButton = document.getElementById("submitbutton");
	submitButton.value = "Save";
}

populateTable = () => {
	const root = document.getElementById("root");
	const oldTable = document.getElementById("table");
	if(oldTable) {
		root.removeChild(oldTable);
	}
	const table = document.createElement("table");
	table.setAttribute("class","table table-striped");
	table.setAttribute("id","table");
	
	//Table headers
	
	const header = document.createElement("thead");
	const headerRow = document.createElement("tr");
	
	//First Name header
	
	const firstNameHeader = document.createElement("th");
	const firstNameNode = document.createTextNode("First Name");
	firstNameHeader.appendChild(firstNameNode);

	//Last name header
	
	const lastNameHeader = document.createElement("th");
	const lastNameNode = document.createTextNode("Last Name");
	lastNameHeader.appendChild(lastNameNode);
	
	//Email header
	
	const emailHeader = document.createElement("th");
	const emailNode = document.createTextNode("Email");
	emailHeader.appendChild(emailNode);
	
	//Phone header

	const phoneHeader = document.createElement("th");
	const phoneNode = document.createTextNode("Phone");
	phoneHeader.appendChild(phoneNode);

	//Remove header
	const removeHeader = document.createElement("th");
	const removeNode = document.createTextNode("Remove");
	removeHeader.appendChild(removeNode);
	
	//Edit header
	
	const editHeader = document.createElement("th");
	const editNode = document.createTextNode("Edit");
	editHeader.appendChild(editNode);

	headerRow.append(firstNameHeader,lastNameHeader,emailHeader,phoneHeader,removeHeader,editHeader);
	header.appendChild(headerRow);
	table.appendChild(header);

	//Table body
	const body = document.createElement("tbody");
	for(let i=0;i<database.length;i++) {
		const row = document.createElement("tr");
		for(x in database[i]) {
			if(x === "id") {
				continue;
			}
			const column = document.createElement("td");
			const info = document.createTextNode(database[i][x]);
			column.appendChild(info);
			row.append(column)
		}
		const removeColumn = document.createElement("td");
		const removeButton = document.createElement("button");
		removeButton.setAttribute("class","btn btn-danger");
		const removeButtonText = document.createTextNode("Remove");
		removeButton.appendChild(removeButtonText);
		removeButton.addEventListener("click",function(event) {
			removeContact(database[i].id)
		})
		
		const editColumn = document.createElement("td");
		const editButton = document.createElement("button");
		editButton.setAttribute("class","btn btn-secondary");
		const editButtonText = document.createTextNode("Edit");
		editButton.appendChild(editButtonText);
		editButton.addEventListener("click",function(event) {
			editContact(database[i]);
		})
		
		removeColumn.appendChild(removeButton);
		editColumn.appendChild(editButton);
		row.append(removeColumn,editColumn);
		body.appendChild(row);
	}
	table.appendChild(body);
	root.appendChild(table);
}