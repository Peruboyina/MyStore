const form = Document.querySelector('form')

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "gadgetsboytelugu@gmail.com",
        Password : "CC3414ED624E9AC83541BD9E0795DAB3C02C",
        To : 'gadgetsboytelugu@gmail.com',
        From : "gadgetsboytelugu@gmail.com",
        Subject : " This is the subject",
        Body : "And this is the body"
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text:"message sent successfully!",
                icon: "success"
            });
        }
      }
    );
}

form.addEvenListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});