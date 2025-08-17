<?php
function insertionSort1($n, $arr) {
    $v = $arr[$n - 1];
    $i = $n - 2;

    while ($i >= 0 && $arr[$i] > $v) {
        $arr[$i + 1] = $arr[$i];
        echo implode(' ', $arr) . PHP_EOL;
        $i--;
    }

    $arr[$i + 1] = $v; // Aquí insertamos v correctamente
    echo implode(' ', $arr) . PHP_EOL;
}
