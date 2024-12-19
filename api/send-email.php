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

// Validate required fields (website is optional)
if (!isset($data['fullName']) || !isset($data['email']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(['message' => 'Missing required fields']);
    exit;
}

// Ensure website field exists even if empty
$data['website'] = isset($data['website']) ? $data['website'] : '';

// Basic spam prevention
if (preg_match('/[\\x00-\\x1F\\x7F]/', $data['message'])) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid message content']);
    exit;
}

// Validate email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid email format']);
    exit;
}

$to = 'ian@ianworks.dev';
$subject = 'New Contact Form Submission from ' . htmlspecialchars($data['fullName']);
$message = "Name: " . htmlspecialchars($data['fullName']) . "\n" .
           "Company: " . htmlspecialchars($data['company'] ?? 'N/A') . "\n" .
           "Website: " . htmlspecialchars($data['website'] ?? 'N/A') . "\n" .
           "Email: " . htmlspecialchars($data['email']) . "\n\n" .
           "Message:\n" . htmlspecialchars($data['message']);

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