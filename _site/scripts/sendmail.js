const form = document.getElementById("contactRob");

const sendEmail = (mail) => {

    fetch("http://localhost:8080/send", {

    method: "post",
    body: mail,
    }).then((response) => {

        return response.json();
    });

};

const formEvent = form.addEventListener("submit", (event) => {
event.preventDefault();

let mail = new FormData(form);

sendMail(mail);
});

