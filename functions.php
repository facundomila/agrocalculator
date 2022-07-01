<?php

  function getDataBaseEnvironment($key) {
    if (defined("_ENV_CACHE")) {
        $vars = _ENV_CACHE;
    } else {
      $file = "environment.php";
      if (!file_exists($file)) {
          throw new Exception("El archivo de las variables de entorno ($file) no existe. Favor de crearlo");
      }
      $vars = parse_ini_file($file);
      define("_ENV_CACHE", $vars);
    }
    if (isset($vars[$key])) {
      return $vars[$key];
    } else {
      throw new Exception("La clave especificada (" . $key . ") no existe en el archivo de las variables de entorno");
    }
  }

  function getConnection() {
    $password = getDataBaseEnvironment("MYSQL_PASSWORD");
    $user = getDataBaseEnvironment("MYSQL_USER");
    $dbName = getDataBaseEnvironment("MYSQL_DATABASE_NAME");
    $database = new PDO('mysql:host=74.63.214.26;dbname=' . $dbName, $user, $password);
    $database->query("set names utf8;");
    $database->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE);
    $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $database->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

    return $database;
  }

  function getSamplesByClient($id) {
    $bd = getConnection();
    $sentencia = $bd->prepare("SELECT idmuestra, nommuestra, fechaing, idcliente, idsubcliente, campo, identificacion, densidadap, profundidad, profdm, densidadap, H, pH, CIC, SatK, SatCa, SatMg, MO, Nt, NO3, PBray, PMIII, POlsen, K, Ca, Mg, S, Fe, Mn, Zn, Cu, B, Cl, Na, PSI, Ce FROM muestras WHERE idcliente = ?");
    $sentencia->execute([$id]);

    return $sentencia->fetchObject();
  }

  function getSamples() {
    $db = getConnection();
    $pullDb = $db->query("SELECT idmuestra, nommuestra, fechaing, idcliente, idsubcliente, campo, identificacion, densidadap, profundidad, profdm, densidadap, H, pH, CIC, SatK, SatCa, SatMg, MO, Nt, NO3, PBray, PMIII, POlsen, K, Ca, Mg, S, Fe, Mn, Zn, Cu, B, Cl, Na, PSI, Ce FROM muestras");

    return $pullDb->fetchAll();
  }

?>