// Send email
function sendEmail() {
  Email.send({
    SecureToken: "5e0ef4bd-1539-4025-af02-fde7623d64da",
    To: "rk@rahulkathak.com",
    From: "rahulkathakindia@gmail.com",
    Subject: "New Contact Form Enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then(
    Swal.fire({
      title: "success!",
      text: "Thank you for contacting us!",
      icon: "success",
    })
  );
}

// JavaScript for disabling form submissions if there are invalid fields
(() => {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.stopPropagation();
          event.preventDefault();
        }
        form.classList.add("was-validated");

        if (form.checkValidity()) {
          // function call
          sendEmail();
        }
      },
      false
    );
  });
})();
