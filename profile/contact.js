function sendEmail() {
    Email.send({
            Host: "smtp.gmail.com",
            Username: "pythons2021@gmail.com",
            Password: "whze hqve awkc otgd",
            To: 'sharmaprajju3014@gmail.com',
            From: "query@uniquedu.co.in",
            Subject: "Sending Email using javascript",
            Body: "Well that was easy!!",
        })
        .then(function(message) {
            alert("mail sent successfully")
        });
}