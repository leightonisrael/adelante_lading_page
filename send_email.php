<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // ajuste este caminho se necessário

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $mobile_phone = $_POST['mobile_phone'];
    $email_from = $_POST['email'];

    $mail = new PHPMailer(true);

    try {
        // Configurações do servidor
        $mail->isSMTP(); 
        $mail->Host = 'smtp.titan.email';
        $mail->SMTPAuth = true;
        $mail->Username = 'tech@adelanteengenheria.com.br'; 
        $mail->Password = 'xx'; 
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Destinatários
        $mail->setFrom('tech@adelanteengenheria.com.br', 'Tech Adelante');
        $mail->addAddress('tech@adelanteengenheria.com.br');

        // Conteúdo
        $mail->isHTML(true); // Defina o formato do email para HTML
        $mail->Subject = 'Novo Contato - Website';
        $mail->Body    = "Nome: $name<br>WhatsApp: $mobile_phone<br>Email: $email_from";

        $mail->send();
        echo "Email enviado com sucesso!";
    } catch (Exception $e) {
        echo "Erro ao enviar o e-mail. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
