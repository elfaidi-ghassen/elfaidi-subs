let input = document.querySelector(".filter-input");
let items = document.querySelectorAll("tbody tr");

input.addEventListener("input", function () {
	let words = input.value.trim().split(" ");
	if (words[words.length - 1].length > 2) {
		items.forEach((item) => {
			let exists = words.every((el) => {
				if (item.textContent.indexOf(el) !== -1) {
					return true;
				} else {
					return false;
				}
			});
      if (!exists) item.style.display = "none";
      else item.style.display = "";
		});
	} else {
		document.querySelectorAll("tbody tr").forEach((el) => {
			el.style.display = "";
		});
	}
});
