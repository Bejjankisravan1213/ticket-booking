document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const seats = document.getElementById("seats").value;

    if (source && destination && date && seats) {
        alert(`Booking Confirmed!\n\nFrom: ${source}\nTo: ${destination}\nDate: ${date}\nSeats: ${seats}`);
    } else {
        alert("Please fill in all fields!");
    }
});