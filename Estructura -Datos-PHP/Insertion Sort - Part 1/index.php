<?php
require_once 'funcion.php';

$n = intval(trim(fgets(STDIN)));
$arr = array_map('intval', explode(' ', trim(fgets(STDIN))));

if (count($arr) !== $n) {
    fwrite(STDERR, "Error: el número de elementos no coincide con n\n");
    exit(1);
}

insertionSort1($n, $arr);
