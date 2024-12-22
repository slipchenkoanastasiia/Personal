<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Змінні з форми
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email, на який відправляти повідомлення
    $to = "slipchenko.as@gmail.com";
    $subject = "Нове повідомлення з форми";

    // Тіло листа
    $body = "Ім'я: $name\n";
    $body .= "Email: $email\n";
    $body .= "Повідомлення:\n$message\n";

    // Заголовки
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Відправка
    if (mail($to, $subject, $body, $headers)) {
        echo "Повідомлення успішно відправлено!";
    } else {
        echo "Виникла помилка при відправці повідомлення.";
    }
} else {
    echo "Форма не була відправлена.";
}
?>
