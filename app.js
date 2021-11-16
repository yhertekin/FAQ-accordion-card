const buttonHandler = () => {
	const idNumber = Number(event.target.id.split("-")[1]);
	for (let i = 1; i < 6; i++) {
		let answer = document.getElementById("answer-" + i);
		let arrow = document.getElementById("arrow-" + i);
		let question = document.getElementById("question-" + i);
		if (i === idNumber) {
			if (answer.style.display === "block") {
				answer.style.display = "none";
				arrow.style.transform = "rotate(360deg)";
				question.style.fontWeight = "400";
			} else {
				answer.style.display = "block";
				arrow.style.transform = "rotate(180deg)";
				question.style.fontWeight = "700";
			}
		} else {
			answer.style.display = "none";
			arrow.style.transform = "rotate(360deg)";
			question.style.fontWeight = "400";
		}
	}
};
