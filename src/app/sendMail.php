<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case "OPTIONS": // Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;

    case "POST": // Send the email.
        header("Access-Control-Allow-Origin: *");
        header('Content-Type: application/json');

        // Payload is not sent to $_POST; it's sent to php://input as text.
        $json = file_get_contents('php://input');
        // Parse the payload from text format to an object.
        $params = json_decode($json);

        $email   = $params->email;
        $name    = $params->name;
        $message = $params->message;

        $recipient = 'rainer.musch@icloud.com';  
        $subject   = "Contact From <{$email}>";
        $messageContent = "From: " . $name . "<br>" . $message;

        $headers = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        // Additional header
        $headers[] = "From: rainer.musch@icloud.com";

        $mailSent = mail($recipient, $subject, $messageContent, implode("\r\n", $headers));

        if ($mailSent) {
            echo json_encode(["status" => 1]);
        } else {
            echo json_encode(["status" => 0, "message" => "Mail konnte nicht versendet werden."]);
        }
        break;

    default: // Reject any non-POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
?>
