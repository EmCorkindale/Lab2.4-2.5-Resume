// Add an event listener to the document that will fire when the page has
// finished loading.  We do this to ensure that we don't try to access either
// the menu-button or the menu before they have been created on the page.
document.addEventListener("DOMContentLoaded", () => {
	// Get references to the menu button and the menu itself.
	const menuButton = document.getElementById("menu-button");
	const menu = document.getElementById("menu");

	// Add an event listener to the menu button that fires whenever it is
	// clicked.
	menuButton.addEventListener("click", () => {
		// Toggle the visibility of the menu by adding or removing the "visible"
		// class.
		menu.classList.toggle("visible");
	});
});
