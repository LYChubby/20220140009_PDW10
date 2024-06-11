document.querySelector(".submit-btn").addEventListener("click", function () {
  event.preventDefault();

  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var lokasi = document.getElementById("lokasi").value;
  var destinasi = document.getElementById("destinasi").value;
  var pickup = document.getElementById("pickup").value;
  var hour = document.getElementById("hour").value;
  var min = document.getElementById("min").value;
  var ampm = document.getElementById("ampm").value;

  if (nama === "" || email === "" || phone === "" || lokasi === "" || destinasi === "" || pickup === "") {
    Swal.fire({
      title: "Error!",
      text: "Please fill out all fields",
      icon: "error",
    });
  } else {
    Swal.fire({
      title: "Booking Details",
      html: `Name: ${nama}<br>Email: ${email}<br>Phone: ${phone}<br>Pickup Location: ${lokasi}<br>Destination: ${destinasi}<br>Pickup Date: ${pickup} Time : ${hour}:${min} ${ampm}`,
      icon: "success",
    });
  }
});
