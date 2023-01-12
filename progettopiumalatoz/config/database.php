class Database{
    private $host = "salvini.matteo";
    private $db_name = "213.140.22.237\SQLEXPRESS";
    private $username = "salvini.matteo";
    private $password = "xxx123##";
    public $conn;
}
public function getConnection(){
   $this->conn = null;
   try{
       $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
       $this->conn->exec("set names utf8");
   }catch(PDOException $exception){
       echo "Connection error: " . $exception->getMessage();
   }
   return $this->conn;
}