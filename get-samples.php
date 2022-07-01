<?php
  include_once "functions.php";
  $samples = getSamples();
  echo json_encode($samples);
?>  