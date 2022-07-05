/** @format */
document
	.querySelector("#payments-frm")
	.addEventListener("submit", function (e) {
		e.preventDefault();

		var formData = new FormData(e.target);

		var loan = formData.get("amount-of-loan");
		var months = formData.get("no-of-months");
		var amountPaid = loan / months;
		var validate = isNaN(loan);
		var boolean = isNaN(months);

		if (validate || boolean) {
			alert("Not a number");
		} else {
			alert(
				`These are your details ==> loan: ${loan}  months: ${months} amountPaid: ${amountPaid}`,
			);
		}
	});
