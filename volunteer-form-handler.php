<?php
// ================= Volunteer Form Handler =================

// Set your email where you want to receive submissions
$to = "b2h.born2help@gmail.com";

// Collect form data safely
$name = htmlspecialchars(trim($_POST['name']));
$email = htmlspecialchars(trim($_POST['email']));
$phone = htmlspecialchars(trim($_POST['phone']));
$location = htmlspecialchars(trim($_POST['location']));
$area = htmlspecialchars(trim($_POST['area']));
$message = htmlspecialchars(trim($_POST['message']));

// Subject and body of the email
$subject = "New Volunteer Application from $name";
$body = "
Name: $name\n
Email: $email\n
Phone: $phone\n
Location: $location\n
Area of Contribution: $area\n
Message / Skills: $message
";

// Email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Send the email
if(mail($to, $subject, $body, $headers)) {
    echo "<script>alert('Thank you for volunteering! We will contact you soon.');window.location='volunteer.html';</script>";
} else {
    echo "<script>alert('Oops! Something went wrong. Please try again.');window.location='volunteer.html';</script>";
}
?>
