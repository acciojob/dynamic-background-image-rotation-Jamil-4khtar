window.addEventListener("resize", () => {
	//your JS code here. If required.
	let width = window.innerWidth;
	let height = window.innerHeight;
	
	let oreintation;
	
	if (height > width) {
		orientation = 'portrait';
	} else {
		orientation = 'landscape';
	}
	
	let body = document.body;
	
	if (orientation === 'portrait') {
		body.style.backgroundImage = "url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg')";
	} else {
		body.style.backgroundImage = "url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg')";
	}
})