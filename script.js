document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  const confirmation = document.getElementById("confirmation");
  const details = document.getElementById("details");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // get user input
    const name = document.getElementById("name").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;
    const seats = document.getElementById("seats").value;

    // show confirmation dynamically
    confirmation.style.display = "block";
    details.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>From:</strong> ${from} → <strong>To:</strong> ${to}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Seats:</strong> ${seats}</p>
    `;

    // clear form after booking
    form.reset();
  });
});
