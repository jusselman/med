<?php


if( isset($_POST['firstName']) && isset($_POST['lastName']) && isset($_POST['phoneNumber']) && isset($_POST['emailAddress']) && isset($_POST['message']) && isset($_POST['location1'])){
	$name = $_POST['firstName'];
  $lastName = $_POST['lastName'];
  $phoneNumber = $_POST['phoneNumber'];
	$emailAddress = $_POST['emailAddress'];
	$message = nl2br($_POST['message']);
	$location = $_POST['location1'];
	$to = 'irene@glaucomaspecialistsofsanfrancisco.com';
	$from = $emailAddress;
	$subject = 'Schedule Inquiry';
	$message =
 		"Name: $name
Last Name: $lastName
Phone: $phoneNumber
Email: $emailAddress
$message";
	$headers = 'From: $from\n';
	$headers .= 'MIME-Version: 1.0\n';
	$headers .= 'Content-type: text/html; charset=iso-8859-1\n';
	if( mail($to, $subject, $message, $headers) ){
		echo "Email Sent";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
} elseif( isset($_POST['firstName']) && isset($_POST['lastName']) && isset($_POST['phoneNumber']) && isset($_POST['emailAddress']) && isset($_POST['message']) && isset($_POST['location2'])){
	$name = $_POST['firstName'];
  $lastName = $_POST['lastName'];
  $phoneNumber = $_POST['phoneNumber'];
	$emailAddress = $_POST['emailAddress'];
	$message = nl2br($_POST['message']);
	$location = $_POST['location2'];
	$to = 'irene2@glaucomaspecialistsofsanfrancisco.com';
	$from = $emailAddress;
	$subject = 'Schedule Inquiry';
	$message =
 		"Name: $name
Last Name: $lastName
Phone: $phoneNumber
Email: $emailAddress
$message";
	$headers = 'From: $from\n';
	$headers .= 'MIME-Version: 1.0\n';
	$headers .= 'Content-type: text/html; charset=iso-8859-1\n';
	if( mail($to, $subject, $message, $headers) ){
		echo "Email Sent";
	} else {
		echo "The server failed to send the message. Please try again later.";
	} 

}
?>
