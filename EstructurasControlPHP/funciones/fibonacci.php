<?php
// Archivo: funciones/fibonacci.php

function generarFibonacci($n) {
    if ($n <= 0) {
        echo "Por favor, ingrese un número mayor a cero.";
        return;
    }

    $fibonacci = [];

    if ($n >= 1) {
        $fibonacci[] = 0;
    }

    if ($n >= 2) {
        $fibonacci[] = 1;
    }

    for ($i = 2; $i < $n; $i++) {
        $nuevoValor = $fibonacci[$i - 1] + $fibonacci[$i - 2];
        $fibonacci[] = $nuevoValor;
    }

    echo "Serie Fibonacci de $n términos:\n";
    foreach ($fibonacci as $valor) {
        echo $valor . " ";
    }
}
?>
