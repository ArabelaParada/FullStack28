<?php
require_once "checker.php";

// Casos de prueba
$tests = [
    [1,1,4,2,1,3],
    [5,1,2,3,4],
    [1,2,3,4,5]
];

foreach ($tests as $case) {
    $result = HeightChecker::countMismatches($case);
    echo "Input: [" . implode(",", $case) . "] => Mismatches: $result\n";
}
