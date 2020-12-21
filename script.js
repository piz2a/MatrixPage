function randint(min, max) {
	return min + Math.floor(Math.random() * (max - min));
}

function choice(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function randomChar() {
	return String.fromCharCode(
		choice([
			randint(48, 48+10), // digit
			randint(65, 65+26), // capitals
			randint(97, 97+26)  // small letters
		])
	);
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function matrix() {
	delay = 50;
	while(true) {
		width = Math.floor(window.innerWidth / 30);
		height = Math.floor((window.innerHeight - 100) / 72);
		document.getElementById("main").innerHTML = "";
		for(let k=0; k<height; k++) {
			for(let i=0; i<width; i++) {
				document.getElementById("main").innerHTML += randomChar();
			}
			document.getElementById("main").innerHTML += "<br />";
		}
		await sleep(delay);
	}
}

matrix();