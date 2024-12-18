<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
    exit;
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (!isset($data['fullName']) || !isset($data['email']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(['message' => 'Missing required fields']);
    exit;
}

$to = 'ian@ianworks.dev';
$subject = 'New Contact Form Submission from ' . $data['fullName'];
$message = "Name: " . $data['fullName'] . "\n" .
           "Company: " . ($data['company'] ?? 'N/A') . "\n" .
           "Website: " . ($data['website'] ?? 'N/A') . "\n" .
           "Email: " . $data['email'] . "\n" .
           "Message: " . $data['message'];

$headers = 'From: ' . $data['email'] . "\r\n" .
    'Reply-To: ' . $data['email'] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['message' => 'Failed to send email']);
}
?>