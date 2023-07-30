<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve the JSON data sent by the client
  $json_data = file_get_contents('php://input');
  $data = json_decode($json_data, true);

  // Extract the data needed to send the email
  $name = $data['name'];
  $reason = $data['reason'];
  $category = $data['category'];
  $message = $data['message'];

  // Set the recipient email address
  $to = 'astrular@astrumstellar.com';

  // Set the email subject
  $subject = sprintf('[%s] New message from %s', $category, $name);

  // Set the email message
  $body = sprintf("Reason: %s\n\n%s", $reason, $message);

  // Set the email headers
  $headers = array(
    'From: sender@example.com',
    'Reply-To: sender@example.com',
    'X-Mailer: PHP/' . phpversion()
  );

  // Send the email
  if (mail($to, $subject, $body, implode("\r\n", $headers))) {
    http_response_code(200);
    echo json_encode(array('message' => 'Email sent'));
  } else {
    http_response_code(500);
    echo json_encode(array('message' => 'Failed to send email'));
  }
}
