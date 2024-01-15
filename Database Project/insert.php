<?php 
$username = $_['username'];
$password = $_['password'];
$gender = $_['gender'];
$email = $_['email'];
$phone = $_['phone'];

if(!empty($username) || !empty($password) || !empty($gender) || !empty($email)
|| !empty($phone)) {
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "cosc333"

    //to create a connection
    $conn = new mysqli($host,$dbUsername,$dbPassword,$dbname);

    if(mysqli_connect_error()){
        die('Connect Error('.mysqli_connect_error().')'.mysqli_connect_error());
    } else {
        $SELECT = "SELECT email From register Where email = ? Limit=1";
        $INSERT = "INSERT Into register (username,password,gender,email,phone) values(?,?,?,?,?) "
    }

    //prepare statement for select query
    $stmt = $conn->prepare($SELECT),
    $stmt->bind_param("s",$email);
    $stmt->bind_execute();
    $stmt->bind_result($email);
    $stmt->store_result();
    $rnum = $stmt->num_rows;

       if($rnum == 0) {
        $stmt->close();
        $stmt = $conn->prepare($INSERT);
        $stmt->bind_param("ssssi",$username,$password,$gender,$email,$phone);
        $stmt->execute();
        echo "New record inserted succesfully";
       } else {
        echo "This email was already registred by someone else"
       }
       $stmt->close();
       $conn->close();

} else {
    echo" All fields are required"
    die();
}

?>