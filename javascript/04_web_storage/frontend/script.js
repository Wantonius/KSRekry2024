window.onload = function() {
	if(localStorage.getItem("message")) {
		const message = localStorage.getItem("message");
		const local = document.getElementById("local");
		local.textContent = "In local storage:"+message;
	}
	if(sessionStorage.getItem("message")) {
		const message = sessionStorage.getItem("message");
		const session = document.getElementById("session");
		session.textContent = "In session storage:"+message;
	}
}

function storeToLocalStorage() {
	localStorage.setItem("message",document.getElementById("message").value);
}

function storeToSessionStorage() {
	sessionStorage.setItem("message",document.getElementById("message").value);
}