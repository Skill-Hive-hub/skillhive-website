// Initialize EmailJS (replace with your own User ID from EmailJS dashboard)
(function() {
    emailjs.init("lvJxFzARDPx-G1PYe");
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.send("service_q7sx8jv", "template_ktc2ga9", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    })
    .then(() => {
        document.getElementById("status").innerText = "Message sent successfully!";
    }, (err) => {
        document.getElementById("status").innerText = "Failed to send message.";
        console.error(err);
    });
});
