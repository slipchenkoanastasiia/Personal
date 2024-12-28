<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "slipchenko.as@gmail.com";
    $subject = "Нове повідомлення з форми";

    $body = "Ім'я: $name\n";
    $body .= "Email: $email\n";
    $body .= "Повідомлення:\n$message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Повідомлення успішно відправлено!";
    } else {
        echo "Виникла помилка при відправці повідомлення.";
    }
} else {
    echo "Форма не була відправлена.";
}
?>
