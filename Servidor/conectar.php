<?php
    /*#region Headers*/
    header('Access-Control-Allow-Origin: *');
    /*#endregion*/

    /*#region Conexão*/
    $PDO = new pdo('mysql:host=localhost;dbname=id17726666_medicame', 'id17726666_admin', 'TccSenha123*');
    $PDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    /*#endregion*/
?>
