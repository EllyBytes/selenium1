<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  
  
   $email = htmlspecialchars(trim($_POST['email']));
 
    
    // Database connection
    $conn = new mysqli('localhost', 'root', 'root', 'contact_database');

    if ($conn->connect_error) {
        echo "Database connection failed: " . $conn->connect_error;
        exit();
    }

    
    $stmt = $conn->prepare("INSERT INTO newsletter (email) VALUES (?)");
    if ($stmt) {
        $stmt->bind_param("s", $email);
        
        if ($stmt->execute()) {
            echo "Thanks for Subscribing us!";
        } else {
            echo "Error submitting your message. Please try again.";
        }

        $stmt->close();
    } else {
        echo "Error preparing statement: " . $conn->error;
    }

    $conn->close();
} else {
    echo "Invalid request.";
}
?>
