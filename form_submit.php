<?php
  require_once 'login.php';
  $conn = new mysqli($hn, $un, $pw, $db);
  if ($conn->connect_error) die("Unable to connect to database");
  $query="SELECT * FROM contactdetails";
  $result=mysql_query($query,$conn);
  $name  = $conn->real_escape_string($_POST['name']);
  $pno      = $conn->real_escape_string($_POST['pno']);
  $email  = $conn->real_escape_string($_POST['email']);
  $sub      = $conn->real_escape_string($_POST['sub']);
  
  $query    = "INSERT INTO contactdetails VALUES ('$name', '$pno', '$email', '$sub')";
  $result   = $conn->query($query);
  if ($result) 
	  die("Insertion is Successful");
  else
	  die("Insertion Failed");
    
  $result->close();
  $conn->close();
?>
