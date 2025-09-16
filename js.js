document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let date = document.getElementById("date").value;
    let seats = document.getElementById("seats").value;

    // Show confirmation message
    document.getElementById("confirmation").style.display = "block";
    document.getElementById("details").innerHTML = `
    <strong>Name:</strong> ${name}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>From:</strong> ${from} → <strong>To:</strong> ${to}<br>
    <strong>Date:</strong> ${date}<br>
    <strong>Seats:</strong> ${seats}
  `;

    // Clear form
    document.getElementById("bookingForm").reset();
});